import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "phoneNumber": String,
    "email": String,
    "message": String
});

export const User = mongoose.model("User", userSchema);