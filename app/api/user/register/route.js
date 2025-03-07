import { ConnectDB } from "@/lib/config/db";
import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"


const loadDB = async () => {
    await ConnectDB();
}

loadDB();





// api endpoint to create order
export async function POST(request) {
    const { fullName,email, password } = await request.json();

    const existingUser = await UserModel.findOne({email})

    // console.log(email, fullName, password)
    
    
    if (!!existingUser) {
        return NextResponse.json({ success: false, message: "Account Exists Please Login" }, { status: 400 });
    }


  
    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS))

    const newUser = new UserModel({
        fullName,
        email,
        password:hashedPassword,

    })


try {

    await newUser.save();
    return NextResponse.json({ success: true, email, message:"Account created successfully"}, { status: 201 });
    
    
} catch (error) {
     return NextResponse.json({ success: false, email, password}, { status: 500 });
}

       
    


}

