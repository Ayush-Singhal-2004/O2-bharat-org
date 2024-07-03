import express from "express";
import "dotenv/config";
import app from "./app.js";
import { User } from "./models/user.model.js";
import connectDB from "./DB/db.js";
import cors from "cors";

app.use(cors());
app.use(express.json());

connectDB()
.then(() => {
    console.log("DB connected");
})
.catch((err) => {});


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/user/data", async(req, res) => {
    const { 
        firstName, 
        lastName, 
        phoneNumber, 
        email, 
        message 
    } = req.body;

    try {
        await User.create({
            firstName,
            lastName,
            phoneNumber,
            email,
            message
        });
        res.status(200).json("User added");
    } catch(err) {
        res.status(500).json("Failed");
    }
});




// 5rxXASgIwwgX1yMv