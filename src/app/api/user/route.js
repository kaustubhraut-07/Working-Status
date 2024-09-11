import { NextResponse } from "next/server";
import { dbconnect } from "@/helper/db";
import { User } from "@/models/user";
dbconnect();
export async function GET(request){
    
    try{

        
      const  users = await User.find();
        return NextResponse.json({message : users});
    }catch(error){

        return NextResponse.json({message : error.message});

    }

};

export async function POST(request){
    try{
    const {name, email, password} = await request.json();
    const user = new User({
        name  : name,
        email : email,
        password : password
    });
    await user.save();
    return NextResponse.json({message : user});
}catch(error){
   return NextResponse.json({message : error.message});
}
};