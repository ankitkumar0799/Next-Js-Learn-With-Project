import { User } from "@/models/user";
import mongoose, { connection } from "mongoose";
export async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "Work_manager"
        })


        //Testing For Model
        // const uuser =new User({
        //     name:"Testing 002",
        //     email:"Testing002@gmail.com",
        //     password:"Testing002",
        //     about:"testing",
        //     profileURL:"https://www.linkedin.com/in/nirman-bio-pharma-261885303/",
        // })



    //    await uuser.save();
    //     console.log("user is created sucesfully");

        // console.log(connection)
        console.log("database connect with the CONNECTION", mongoose.connection.host)

    } catch (error) {
        console.log("fail to connect with database")
        console.log(error)
    }
};