import mongoose, { Schema, Types } from "mongoose";
import { connectDB } from "@/helper/db";



connectDB();
const UserSachema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: [true, "Email Is Required !!"]
    },
    password: {
        type: String,
        required: [true, "Password Is Required !!"]
    },
    about: String,
    profileURL: String
   

})



// export const User = mongoose.models.users || mongoose.model("users", UserSachema)
export const User = mongoose.models.User || mongoose.model("User", UserSachema);
