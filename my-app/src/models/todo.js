const { connectDB } = require("@/helper/db");
const { Schema, default: mongoose } = require("mongoose");

connectDB();

const UserTask = new Schema({
    title: String,
    description: String,
    status: String,
    dueDate:({
        type: Date,
        required: [true,"Due Date is needed!!"]
    }),
    createdAt: Date,
    updatedAt:Date,


})

export const Todo = mongoose.models.Todo || mongoose.model("Todo", UserTask);