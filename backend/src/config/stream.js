import {StreamChat} from "stream-chat"
import { ENV } from "../config/env.js"

const streamClient = StreamChat.getInstance(ENV.STREAM_APIKEY,ENV.STREAM_API_SECRET)

export const upsertStreamUser =async (userData)=>{
    try{
        await streamClient.upsertStreamUser(userData)
        console.log("stream user upsert successfully ",userData.name);
        return userData
        

    }
    catch(error){
        console.log("error upserting stream user",error);
        

    }
}
export const deleteStreamUser =async(useId)=>{
    try{
        await streamClient.deleteStreamUser(useId)
        console.log("stream user successfully deleted",useId);
        
    }
    catch(error){
        console.log("error deleting stream user",error);
        

    }
}
export const generateStreamToken =(userId)=>{
    try{

        const userIdString =userId.toString()
        return streamClient.createToken(userIdString)
        
    }
    catch(error){
        console.log("error generating stream tokens",error);
        return null;
        

    }
}