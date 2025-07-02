import { connectDB } from "@/helper/db";
import { getResponceMessage } from "@/helper/responceMessage";
import { Task } from "@/models/task";
import { NextRequest, NextResponse } from "next/server";

await connectDB();
export async function GET(request, { params }) {
    const { taskid } = params;
  
    try {
      const task = await Task.findById(taskid); 
  
      return NextResponse.json(task)
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        message: "Failed to get task by ID",
        success: false,
        error: error.message, // optional
      }, { status: 500 });
    }
  }
  

export async function POST(request,{params}) {
    
}


export async function DELETE(request,{params}) {
  const {taskid} = params;
  try {
 
      let task = await Task.deleteOne({
        _id:taskid
      });

      return NextResponse.json({
        "message":"the task has been deleted",
        success : true
      });

    } catch (error) {
      console.log(error)
      return getResponceMessage("failed to update user",404,false)
    }
}


export async function PUT(request,{params}) {
  
  try {
    const {taskid} = params;
    const {title,content,status,} = await request.json();
      let task = await Task.findById(taskid);

      (task.title = title),
      (task.content = content),
      (task.status = status)


      const updatedTask = await task.save();
      return NextResponse.json(updatedTask);

    } catch (error) {
      console.log(error)
      return getResponceMessage("failed to update user",404,false)
    }
}