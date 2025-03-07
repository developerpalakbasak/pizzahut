import { ConnectDB } from "@/lib/config/db";
import PizzaModel from "@/lib/models/pizzaModel";
import { writeFile } from "fs/promises";
import fs from "fs";
const { NextResponse } = require("next/server");


const loadDB = async () => {
    await ConnectDB();
}

loadDB();

// api endpoint to get all pizzas
export async function GET(request) {


    const allPizza = await PizzaModel.find({})
    const pizzaCount = allPizza.length;
    return NextResponse.json({ success: true, pizzaCount, allPizza })



}

// api endpoint to add pizza
export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        if (!image) {
            return NextResponse.json({ success: false, msg: "Image is required" }, { status: 400 });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const pizzaData = {
            title: formData.get('title'),
            price: formData.get('price'),
            description: formData.get('description'),
            category: formData.get('category'),
            stock: formData.get('stock'),
            image: imgUrl,

        };

        // console.log(pizzaData)
        await PizzaModel.create(pizzaData);
        // console.log('Pizza saved:', pizzaData);

        return NextResponse.json({ success: true, msg: "Pizza added" });
    } catch (error) {
        console.error('Error saving pizza:', error);
        return NextResponse.json({ success: false, msg: "Internal Server Error" }, { status: 500 });
    }
}

// api endpoint to update isTopSelling and isFeature
export async function PUT(request) {
    try {
        const { id, isTopSelling, isFeature, orderedItem } = await request.json();


        // Validate the provided ID and fields
        if (!id) {
            return NextResponse.json({ success: false, message: "Pizza ID is required" }, { status: 400 });
        }

        // Update the pizza document
        const pizza = await PizzaModel.findById(id)

        const { stock } = pizza;

        // console.log(stock)

        const updatedPizza = await PizzaModel.findByIdAndUpdate(
            id,
            {
                ...(isTopSelling !== undefined && { isTopSelling }),
                ...(isFeature !== undefined && { isFeature }),
                ...(orderedItem !== undefined && { stock: stock-orderedItem }),
            },
            { new: true } // Return the updated document
        );

        if (!updatedPizza) {
            return NextResponse.json({ success: false, message: "Pizza not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Pizza updated successfully", updatedPizza, stock });
    } catch (error) {
        console.error("Error updating pizza:", error);
        return NextResponse.json({ success: false, message: "Failed to update pizza", error: error.message }, { status: 500 });
    }
}



// api endpoint to delete pizza
export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await PizzaModel.findById(id);

    if (!blog) {

        return NextResponse.json({ msg: "item not found" });
    }



    // delete from database
    await PizzaModel.findByIdAndDelete(id);

    // delete image from public folder
    fs.unlink(`./public/${blog.image}`, () => { });

    return NextResponse.json({ msg: "Pizza deleted" });
}