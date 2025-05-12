
import { NextResponse } from "next/server";


export function DELETE(request,{ params }){
    console.log(params);
    const { userid,title } = params;
    console.log("user id is",userid)
    
  return NextResponse.json({
    message: "testing userid delete"
  })
}


