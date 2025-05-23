import { Todo } from "@/models/todo";
import { NextResponse } from "next/server";

// export function GET(request,{ params }){
//     console.log(params);
//     const { userid,postid } = params;
//     console.log("user user id is",userid)
//     console.log("user post id is",postid)
    
//   return NextResponse.json({
//     message: "post upload sucessfully"
//   })
// }



export async function GET(request,{params} ){
  const {postid} = params;
  try {
    const post = await Todo.findById({
      _id:postid
    });
    return NextResponse.json(
      {
      
        message:"the post is",post,
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








export async function DELETE(request, { params }) {
  const { postid } = params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(postid);

    if (!deletedTodo) {
      return NextResponse.json({
        message: "Todo not found",
        success: false,
      }, { status: 404 });
    }

    return NextResponse.json({
      message: "Todo deleted successfully",
      success: true,
      todo: deletedTodo,
    }, { status: 200 });

  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({
      message: "Failed to delete todo",
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}


