import { NextResponse } from "next/server";

export function GET(request){
    const data = [{
        
            name: "priya",
            phone: "4521542515",
            course: "bca,"
        
    },
    {
        
        name: "Aman",
        phone: "4526541542515",
        course: "bcaSQ,"
    
},
{
        
    name: "SONU",
    phone: "4526546511542515",
    course: "bcaSDB ,"

},]
return NextResponse.json(data);
}