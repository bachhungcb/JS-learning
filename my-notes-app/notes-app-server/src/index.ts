import express from "express";
import cors from "cors";
const config = require("./config/databaseConfig");
const sql = require('mssql');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req,res)=>{  
        try {
            let pool = await sql.connect(config)
            let result1 = await pool.request()
                .query('select * from notes')
    
            console.dir(result1.recordset);
            res.send(result1.recordset); // Stored
        } catch (err) {
            console.log(err)
        }
})


app.listen(5000,() =>{
    console.log("Server is running on port 5000");
})

