import mongoose, { Schema, Types } from "mongoose";
import { connectDB } from "@/helper/db";
import profile from "@/app/Profile/page";

connectDB();
const UserSachema = new Schema({
    name: String,
    email: {
        type: String,
        required: [true, "Email Is Required !!"],
    },
    password: {
        type: String,
        required: [true, "Password Is Required !!"],
    },
    about: String,
    profileURL: String,

})



export const User = mongoose.models.users || mongoose.model("users", UserSachema)