import UserModel from "@/lib/models/userModel";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";


// Api endpoint to get logged in user details
export async function GET(request) {

    const token = request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }



    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Extract email from decoded token
        const { email } = decoded;

        // Fetch user details using the email
        const user = await UserModel.findOne({ email });

        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, user });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ success: false, message: "Failed to fetch user details" }, { status: 500 });
    }

}