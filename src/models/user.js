import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passord: {
        type: String,
        required: true
    }
});

export const User = mongoose.model.User || mongoose.model("User", userSchema)