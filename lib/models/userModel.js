import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
   
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role:{
        type: String,
        default: "user"
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{timestamps: true});

const UserModel = mongoose.models.user || mongoose.model('user', userSchema);

export default UserModel;
