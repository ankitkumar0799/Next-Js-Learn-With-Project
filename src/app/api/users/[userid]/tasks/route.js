// http://localhost:3000/api/users/[userid]/tasks
import { getResponceMessage } from "@/helper/responceMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
try {
    const {userid} = params;
    const tasks = await Task.find({
        userId:userid
    })
    return NextResponse.json({
        "message":"the task is ",
        tasks,
        "success":"true"
    })
} catch (error) {
    getResponceMessage("failed to fetch task of this user" + userid);
    console.log(error);
}
    


}