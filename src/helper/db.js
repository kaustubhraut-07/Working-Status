import mongoose from "mongoose";

async function dbconnect(){
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName: "WorkingStatusDB",
            useUnifiedTopology: true
        })
    }catch(error){

    }
}