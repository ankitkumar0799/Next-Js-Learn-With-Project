
import { connectDB } from "@/helper/db";
import { Todo } from "@/models/todo";
import { NextResponse } from "next/server";

connectDB();





//get all posts
export async function GET(request) {
  let post = [];

  try {
      
      post = await Todo.find(); 
     
  } catch (error) {
      console.log(error.code);
      return NextResponse.json({
          message:"failed to Get User",
          success: false
      })
  }
  return NextResponse.json(post)
}

// Create post 
export async function POST(request) {
  try {
    const { title, description, status, dueDate, userId } = await request.json();

    const todo = new Todo({
      title,
      description,
      status,
      dueDate,
      user: userId,
    });

    const createdTodo = await todo.save();

    return NextResponse.json({
      message: "Todo created successfully",
      success: true,
      todo: createdTodo,
    }, {
      status: 201,
    });

  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json({
      message: "Failed to create todo",
      success: false,
      error: error.message,
    }, {
      status: 500,
    });
  }
}












