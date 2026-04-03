import mongoose from 'mongoose'
import { ENV } from './env.js'

export const connectDB =async()=>{
    try{
            const conn=await mongoose.connect(ENV.DB_URL)
            console.log("db connected successfuly",conn.connection.host);
    }
    catch(error){
        console.log("error connecting to db",error);
        process.exit(1)

    }

}