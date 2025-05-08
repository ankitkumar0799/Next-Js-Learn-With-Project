import { NextResponse } from "next/server"

export function GET(){
    const users= [{
        name: "Ankit Kumar",
        phone: "7042879410",
        course: "bca,"
    },
    {
        name: "Monu",
        phone: "2653525894",
        course: "bca,"
    },
    {
<<<<<<< HEAD
        name: "manjeet",    
=======
        name: "manjeet",
>>>>>>> 94bfd5e57bc8ec84c0f0c571838ee3d2b166c436
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
export function POST(){
    
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