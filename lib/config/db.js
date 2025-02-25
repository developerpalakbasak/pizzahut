import mongoose from "mongoose";
// const URI = ''
export const ConnectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
}
 