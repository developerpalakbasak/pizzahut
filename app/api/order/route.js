import OrderModel from "@/lib/models/orderModel";
import { NextResponse } from "next/server";

// api endpoint to create order
export async function POST(request) {
    const { firstName, lastName, email, phone, address, city, zipCode, cartItems, totalPrice } = await request.json();
    // Basic validation to ensure all required fields are provided
    if (!firstName || !lastName || !email || !phone || !address || !city || !zipCode || !cartItems || !totalPrice) {
        return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
    }
    const orderItems = cartItems.map(item => ({
        productId: item.id, // Assuming 'id' is the MongoDB ObjectId reference
        productName: item.name,
        price: item.price,
        quantity: item.quantity
    }));

    const orderData = {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        zipCode,
        orderItems,
        totalAmount: totalPrice,
        paymentMethod: 'Cash on Delivery', // Assuming this for now
        paymentStatus: 'Pending', // Assuming pending for now
        orderStatus: 'Processing', // Assuming processing initially
    };


    // console.log(orderItems)

    try {
        const order = await OrderModel.create(orderData);
        // console.log(order);

        return NextResponse.json({ success: true, order });
    } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json({ success: false, message: "Error creating order." }, { status: 500 });
    }

}


// Admin -- api endpoint to get all order
export async function GET(request) {
    try {
        // Fetch orders with status "Processing"
        const allOrders = await OrderModel.find({});

        return NextResponse.json({ success: true, allOrders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        return NextResponse.json({ success: false, message: "Failed to fetch orders" }, { status: 500 });
    }
}