import { NextResponse } from "next/server";
import { Task } from "@/models/tasks";

export async function GET(req, { params }) {
    try {
        const { userid } = params;
        const tasks = await Task.find({ userId: userid });
        return NextResponse.json({ message: tasks });
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};