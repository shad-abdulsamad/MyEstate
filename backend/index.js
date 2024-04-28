import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect('mongodb://localhost/myestate')
.then(()=>console.log('Connected to the database'))
.catch(()=>console.log('Could not connect to the database'));

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

