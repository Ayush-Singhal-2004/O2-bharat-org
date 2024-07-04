import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "name": String,
    "email": String,
    "phoneNumber": String,
    "user": String
});

export const User = mongoose.model("User", userSchema);