import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    email:{
        type:"string",
        required:true,
        unique:true
    },
    name:{
        type:"string",
        required:true
    },
    image:{
        type:"string",
        required:true
    },
    clerkId:{
        type:"string",
        required:true,
        unique:true
    }
    },
    {timestamps:true})

    export const User =mongoose.model("user",userSchema)