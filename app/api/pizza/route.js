import { ConnectDB } from "@/lib/config/db";
import PizzaModel from "@/lib/models/pizzaModel";
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

// api endpoint to get add pizza
export async function POST(request) {

    const {title, description, category, price} = await request.json();

    const pizzaData = {
        title,
        description,
        category,
        price
    }
    
    await PizzaModel.create(pizzaData);
    console.log("created")

    return NextResponse.json({ success: true, pizzaData })



}