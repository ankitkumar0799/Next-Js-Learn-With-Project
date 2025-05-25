import { NextResponse } from "next/server"

export const getResponceMessage=(message,statusCode,successStatus)=>{
    return NextResponse.json({
    message:message,
    success:successStatus

},{
    status:statusCode
})
}
