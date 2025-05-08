import { resolve } from "styled-jsx/css"
import { NotFound } from 'next/navigation';

async function TakeTime(){
    await new Promise((resolve)=>{
        
        setTimeout(resolve,3000)
    })
}
export default async function about(){
   await TakeTime();
   

    return(
        <div>
            <h1>About us page</h1>
        </div>
    )
}

