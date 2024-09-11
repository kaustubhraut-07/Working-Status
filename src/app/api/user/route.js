import { NextResponse } from "next/server";
import { dbconnect } from "@/helper/db";
import { User } from "@/models/user";
dbconnect();
export function GET(request){
    const users = [
        {
            id: 1,
            name: "Kaustubh"

        },
        {
            id: 2,
            name: "ankit"

        },
        {
            id: 3,
            name: "yogesh"

        },
    ];
    return NextResponse.json(users);

};

export async function POST(request){
    try{
    const {name, email, password} =  request.json();
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