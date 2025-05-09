import { NextResponse } from "next/server"

export function GET(){
    const users= [{
        name: "Ankit Kumar",
        phone: "7042879410",
        course: "bca12,"
    },
    {
        name: "Monu",
        phone: "2653525894",
        course: "bca,"
    },
    {
        name: "manjeet",    
        phone: "4584598652",
        course: "bca,"
    },
    {
        name: "shubham",
        phone: "7584589652",
        course: "bca,"
    },
    {
        name: "priya",
        phone: "4521542515",
        course: "bca,"
    },]
    return NextResponse.json(users);
}

// ye hum user se kuch post karne ke liye use karte hai aur isse hum bohot si chize kar sakte hai 
export function POST(request){
    // const Body=request.body;
    // const Body = request.body;
    // const method = request.method   ;

    const {body,method,cookies} = request;

    console.log(body);
    console.log(method);
    console.log(cookies);

    return NextResponse.json({
        "name": "ankit NextjsResponce Pending"
    })
    
}
export function DELETE(request){
    console.log("delete api called");
    return NextResponse.json({
        message: "delete sucessfully",
        Status: "Done Deletiation"
    },{status: 301,statusText: "h"})
    
}
export function PUT(){
    
}