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

app.post("/api/notes", async (req,res)=>{
    const { Title, Content } = req.body[0];
    
    if (!Title || !Content) {
        return res.status(400).json({ error: "title and content fields required" });
    }

    try{
        const note = await sql.connect(config);
        await note.request()
            .input('title', sql.NVarChar, Title)
            .input('content', sql.NVarChar, Content)
            .query('insert into notes (title, content) values (@title, @content)');
            res.status(200).json({message: "Note added successfully"});
    }catch(err){
        console.log(err)
    };
})

app.put("/api/notes/:id", async (req,res)=>{
    const { Title, Content } = req.body[0];
    const id = parseInt(req.params.id);

    if (!Title || !Content) {
        return res.status(400).json({ error: "title and content fields required" });
    }

    if(!id || isNaN(id)){
        return res.status(400).json({error: "id must be a number"});
    }

    try{
        const note = await sql.connect(config);
        await note.request()
            .input('id', sql.Int, id)
            .input('title', sql.NVarChar, Title)
            .input('content', sql.NVarChar, Content)
            .query('update notes set title = @title, content = @content where id = @id');
            res.status(200).json({message: "Note updated successfully"});
    }catch(err){
        res.status(500).json({error: "Internal server error"});
    };

})

app.delete("/api/notes/:id", async (req,res)=>{
    const id = parseInt(req.params.id);

    if(!id || isNaN(id)){
        return res.status(400).json({error: "id must be a number"});
    }

    try{
        const note = await sql.connect(config);
        await note.request()
                    .input('id', sql.Int, id)
                    .query('delete from notes where id = @id');
                    res.status(200).json({message: "Note deleted successfully"});   
    }catch(err){
        console.log(err);
    }

});

app.listen(5000,() =>{
    console.log("Server is running on port 5000");
})

