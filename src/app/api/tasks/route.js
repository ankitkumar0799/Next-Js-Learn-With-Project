// /api/tasks

import { connectDB } from "@/helper/db";
import { getResponceMessage } from "@/helper/responceMessage";
import { Task } from "@/models/task"
import {  NextResponse } from "next/server";


await connectDB();

// get all tasks
export async function GET(request) {
    const task = [];
    try {
    const task = await Task.find();
    return NextResponse.json(task,{
        "message":"user task has been there",
        status:201
    });
    } catch (error) {
        return getResponceMessage("failed to get all tesks",404,false)
    }

}

//create task 
export async function POST(request) {
    
    const {title,content,userId} = await request.json()
    // console.log({title,content,addedDate,status,userId})
    try {
        const task = new Task({
            title,
            content,
           userId
        })
        const createdTask = await task.save();
        return NextResponse.json(createdTask,{
            status:201,
            "message":"the task has been created in user id"
        })
        
      

    } catch (error) {
        // console.log(error.errors);
        console.log("my message")
        
        return getResponceMessage("failed to create Task",500,false)
    }
}