
const express=require("express");
const {connection}=require("./db");
require("dotenv").config();

console.log(process.env.mongo_url)

let app=express();

app.get("/",(req,res)=>{
    res.json({"msg":"ping"})
})

app.listen(8080,async ()=>{
    try {
        await connection;
        console.log("connected");
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port 8080")
});


