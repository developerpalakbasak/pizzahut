import { ConnectDB } from "@/lib/config/db";
import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loadDB = async () => {
    await ConnectDB();
};

loadDB();

export async function POST(request) {
    const { email, password } = await request.json();

    console.log(email, password);
    const user = await UserModel.findOne({ email }).select("+password");

    
    if (!user) {
        return NextResponse.json({ success: false, message: "User Not Found" }, { status: 400 });
    }

    // console.log(user)

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return NextResponse.json({ success: false, message: "Invalid Credentials" }, { status: 400 });
    }

    // console.log(isMatch)

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Set token in an HttpOnly cookie
    const response = NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });

    response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60, // 7 days
        path: "/",
    });

    return response;
}
