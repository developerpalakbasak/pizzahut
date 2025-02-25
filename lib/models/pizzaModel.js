import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    category:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default: "demo.jpg"
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

const PizzaModel = mongoose.models.pizzahat || mongoose.model('pizzahat', Schema)

export default PizzaModel;