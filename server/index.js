import express from "express";
import "dotenv/config";
import cors from "cors";
import sendToSheet from "./utils/sendToSheet.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/user/data/:user", async(req, res) => {
    const { name, email, phoneNumber } = req.body;
    const user = req.params.user;

    try {
        await sendToSheet(name, email, phoneNumber, user);
        res.status(200).json("User added");
    } catch(err) {
        res.status(500).json("Failed");
    }
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})