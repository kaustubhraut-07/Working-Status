import { NextResponse } from "next/server";
import {User} from "@/models/user";

export async function DELETE(request, {params}){
    try{

        const {userid} = params;
        console.log(userid)
        const user  = await User.findByIdAndDelete({_id : userid});

        return NextResponse.json({message : "User Deleted Succefully"});

    }catch(error){
        return NextResponse.json({message : error.message});

    }
};      

export async function GET(req, {params}){
    try{
        const user = await User.findById({_id : params.userid});
        return NextResponse.json({message : user});
    }catch(error){
        return NextResponse.json({message : error.message});

    }
}

export async function PUT(req, {params}){
    try{
        const {userid} = params;
        const {name , password} = await req.json();
        
        const user = await User.findByIdAndUpdate({_id : userid},{
            name : name,
            password : password
        });

        return NextResponse.json({message : user });
    }catch(error){
        return NextResponse.json({message : error.message});

    }

}