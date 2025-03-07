import { NextResponse } from "next/server";

export async function GET(request) {
    const response = NextResponse.json({ success: true, message: "Logged out successfully" });

    // Clear the 'token' cookie
    response.cookies.set("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",  // Make sure it works for production
        maxAge: 0,  // Set to 0 to immediately expire the cookie
        path: "/",  // Ensure the cookie is cleared for the entire site
    });

    return response;
}


