import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.db).then(()=>{
console.log("Database Connected Successfully");}).catch((Error)=>{
    console.log("Error :", +Error);})

const app= express();
const port= 3000;
app.listen(port, ()=>{
    console.log("Server is Running on Port Number : ", port)
})