import { NextResponse } from "next/server";
import { Task } from "@/models/tasks";
export async function GET(req, {params}){
    try{
        const {taskid} = params;
        const task = await Task.findById({_id : taskid});
        return NextResponse.json({message : task});
    }catch(error){
        return NextResponse.json({message : error.message});

    }

};

export async function PUT(req, {params}){
    try{
        const {taskid} = params;
        const {title, content, status} = await req.json();
        const task = await Task.findByIdAndUpdate({_id : taskid},{
            title : title,
            content : content,
            status : status
        });
        return NextResponse.json({message : task});
    }
    catch(error){
        return NextResponse.json({message : error.message});

    }

};

export async function DELETE(req, {params}){
    try{
        const {taskid} = params;
        const task = await Task.findByIdAndDelete({_id : taskid});
        return NextResponse.json({message : "task Deleted Succefully"});
    }catch(error){
        return NextResponse.json({message : error.message});

    }
};