import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect('mongodb://localhost/myestate')
.then(()=>console.log('Connected to the database'))
.catch(()=>console.log('Could not connect to the database'));

const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});