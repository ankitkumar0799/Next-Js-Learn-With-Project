import { NextResponse } from "next/server";

export function DELETE(request,{ params }){
    console.log(params);
    const userId = params.userid
    console.log("user id is",userId)
  return NextResponse.json({
    message: "testing userid delete"
  })
}


