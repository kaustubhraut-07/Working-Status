import mongoose from "mongoose";

export async function dbconnect(){
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName: "WorkingStatusDB",
            useUnifiedTopology: true
        })

        console.log("Database connected")
    }catch(error){

    }
}