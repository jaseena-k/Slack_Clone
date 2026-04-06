import express from "express"
import { ENV } from "./config/env.js"
import { connectDB } from "./config/db.js"
import { clerkMiddleware } from '@clerk/express'
import { inngest, functions} from "../src/config/inngest.js"
import { serve } from "inngest/express";


const app = express()
app.use(clerkMiddleware())
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/",(req,res)=>{
    res.send("Hello World!!")
    console.log("mongoose url",ENV.DB_URL)

})
const startServer = async ()=>{
    try{
        await connectDB();
        if(ENV.NODE_ENV !=="production"){
            app.listen(ENV.PORT,()=>{
            console.log ("server started on port",ENV.PORT)
        })
    }

    }catch(error){
        console.log("error starting server ",error);
    }

}
startServer()

export default app;