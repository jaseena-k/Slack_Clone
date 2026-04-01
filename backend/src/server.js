
import express from "express"
import dotenv from "dotenv"
import { ENV } from "./config/env"
dotenv.config()

const app = express()
app.get("/",(req,res)=>{
    res.send("Hello World!!")
    console.log("mongoose url",ENV.DB_URL)

})

app.listen(ENV.PORT,()=> console.log ("server started on port",ENV.PORT))