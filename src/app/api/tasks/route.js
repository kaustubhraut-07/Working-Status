import { NextResponse } from "next/server";
import { Task } from "@/models/tasks";

export async function GET(request){

    try{

        const tasks = await Task.find();

        return NextResponse.json({message : tasks});

    }catch(error){

        return NextResponse.json({message : error.message});

    }
};


export async function POST(request){

    try{

        const {title, content, userId} = await request.json();
        const task = new Task({
            title  : title,
            content :content,
            userId : userId
        });
        const createdtask = await task.save();
        return NextResponse.json({message : createdtask});
    }catch(error){

        return NextResponse.json({message : error.message});

    }
};