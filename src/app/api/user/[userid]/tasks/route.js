import { NextResponse } from "next/server";
import { Task } from "@/models/tasks";
import { dbconnect } from "@/helper/db";
import mongoose from "mongoose";
// dbconnect();
export async function GET(req, { params }) {
    try {
        const { userid } = params;
        console.log(userid , "userid");
        // const tasks = await Task.find({ userId: userid });
        // const tasks = await Task.find();
        const tasks = await Task.find({ userId:userid});
        console.log(tasks, "getting tasks  from api call");
        return NextResponse.json({ message: tasks });
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};