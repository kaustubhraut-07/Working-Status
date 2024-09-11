import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        enum:["pending", "completed" ],
        required: true,
        default: "pending"
    }
});

export const Task = mongoose.models.Task || mongoose.model("Task", taskSchema)