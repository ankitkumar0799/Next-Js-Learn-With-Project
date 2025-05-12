import mongoose, { connection } from "mongoose";
export async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "Work_manager"
        })
        // console.log(connection)
        console.log("database connect with the", mongoose.connection.host)

    } catch (error) {
        console.log("fail to connect with data base")
        console.log(error)
    }
};