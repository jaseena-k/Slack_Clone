import express from "express"
import { ENV } from "./config/env.js"

const app = express()
app.get("/",(req,res)=>{
    res.send("Hello World!!")
    console.log("mongoose url",ENV.DB_URL)

})

app.listen(ENV.PORT,()=> console.log ("server started on port",ENV.PORT))


// ctHoeUXzDXo7AqSx
// jaseenajas596_db_user