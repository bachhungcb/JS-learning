import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req,res)=>{
    res.json({message: "Hello World"});
})

app.listen(5000,() =>{
    console.log("Server is running on port 5000");
})