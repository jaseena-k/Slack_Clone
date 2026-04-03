import express from "express"
import { ENV } from "../config/env.js"
import { connectDB } from "../config/db.js"
import { clerkMiddleware } from '@clerk/express'
import { inngest, functions } from "./src/inngest"


const app = express()
app.use(clerkMiddleware())
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/",(req,res)=>{
    res.send("Hello World!!")
    console.log("mongoose url",ENV.DB_URL)

})

app.listen(ENV.PORT,()=>{
    console.log ("server started on port",ENV.PORT)
    connectDB();
})


// ctHoeUXzDXo7AqSx
// jaseenajas596_db_user