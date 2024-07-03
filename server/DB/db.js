import mongoose from "mongoose";
import app from "../app.js";
import "dotenv/config";

const connectDB = async() => {
    try {
        const mongoInstance = await mongoose.connect(process.env.MONGO_DB_URI);
        app.on("error", (err) => {
            console.log(err);
            process.exit(1);
        })
        app.listen(process.env.PORT || 3001, () => {
            console.log(`Server is running on port ${process.env.PORT || 3001}`);
        })
        Promise.resolve();
    }
    catch(err) {
        console.log(err);
        Promise.reject();
    }
}

export default connectDB;