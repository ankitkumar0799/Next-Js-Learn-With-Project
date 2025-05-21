
import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connectDB();
/// user get by id single user
export async function GET(request,{params} ){
  const {userid,name} = params;

  try {
    const user = await User.findById({
      _id:userid
    });

    return NextResponse.json(
      {
      
        message:"the user is",user,
        success: true
      }
    )
  } catch (error) {
    return NextResponse.json({
      message:"failed to get user",
      success:false
    })
  }

}

export async function PUT(request,{params}){
  const {userid} = params;
   const {name,password,about,profileURL} = await request.json()
  try {
    const user = await User.findById(userid);
    if (!user) {
      return NextResponse.json({
        message: "User not found",
        success: false,
      }, {
        status: 404,
      });
    }
    user.name = name ;
    user.password = password ;
    user.about = about ;
    user.profileURL = profileURL ;

    const updatedUser = await user.save();
    return NextResponse.json({
      message: "User updated successfully",
      success: true,
      updatedUser
    }, {
      status: 200,
    });

  } catch (error) {
    
  }
}




















// user can delete it self by userid
export async function DELETE(request,{ params }){
   const {userid} = params;
    try {
     await User.deleteOne({
        _id:userid,
      })
      return NextResponse.json({
        message:"user deleted",
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
    

}


