import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server"

connectDB();

export async function GET(request) {
    let user = []

    try {
        
        user = await User.find().select("-password"); 
       
    } catch (error) {
        console.log(error.code);
        return NextResponse.json({
            message:"failed to Get User",
            success: false
        })
    }
    return NextResponse.json(user)
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


const {name,email,password,about,profileURL} = await request.json();
// console.log({name,email,password,about,profileURL})
    //Fetch User Data From DataBase
    try {
        const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
        
    })
    const createdUsser = await user.save();

    const responce = NextResponse.json(user,{

        status:201,
    })
    return responce
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            return NextResponse.json("the email is already exist!");
        }else{
            return NextResponse.json(error);
        }
        
        };
    

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