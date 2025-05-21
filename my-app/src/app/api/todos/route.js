

import { connectDB } from "@/helper/db";
import { Todo } from "@/models/todo";
import { NextResponse } from "next/server";

connectDB();

export async function POST(request) {
  try {
    const { title, description, status, dueDate, userId } = await request.json();

    const todo = new Todo({
      title,
      description,
      status,
      dueDate,
      user: userId, // ✅ include user if needed
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

