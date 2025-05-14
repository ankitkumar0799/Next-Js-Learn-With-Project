import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server"

connectDB();

export function GET(request) {
    const users = [{
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
    return NextResponse.json(users)
}






//craete user
// ye hum user se kuch post karne ke liye use karte hai aur isse hum bohot si chize kar sakte hai 
export async function POST(request) {
    // const Body=request.body;
    // const Body = request.body;
    // const method = request.method   ;
    // const {body,method,cookies,headers} = request;
    // request.cookies.set('show-banner', 'false')
    // console.log(body);
    // console.log(method);
    // request.cookies.clear()
    // console.log("cokkies ko hata diya gaya hai")
    // console.log(request.nextUrl.pathname)
    // console.log(request.nextUrl.pathname)
    // console.log(request.nextUrl.searchParams);
    // console.log(cookies);
    // console.log(headers);
    // const textData= await request.text();
    // const jsonData = await request.json();
    // console.log(jsonData);
    // console.log(textData);
    // return NextResponse.json({
    //     "messag": "the POST method was called"
    // })



    //Fetch User Data From DataBase
    try {
            const user = new User({
        name,
        email,
        passoword,
        about,
        profileURL
    })
    const createdUsser = await user.save();

    const responce = NextResponse.json(user,{

        status:201,
    })
    return responce
    } catch (error) {
        return NextResponse.json({
            
        })
    }


    
    
}
export function DELETE(request) {
    console.log("delete api called");
    const { body, method } = request;
    console.log(body);
    console.log(method);
    return NextResponse.json({

        message: "delete sucessfully",
        Status: "Done Deletiation"
    }, { status: 301, statusText: "h" })

}
export function PUT() {

}