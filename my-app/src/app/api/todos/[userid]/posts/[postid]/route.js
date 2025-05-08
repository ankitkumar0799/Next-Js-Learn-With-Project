import { NextResponse } from "next/server";

export function GET(request,{ params }){
    console.log(params);
    const { userid,postid } = params;
    console.log("user user id is",userid)
    console.log("user post id is",postid)
    
  return NextResponse.json({
    message: "post upload sucessfully"
  })
}


