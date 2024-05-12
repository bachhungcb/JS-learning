const sql = require('mssql');
const sqlConfig  = require('../config/database');


const getHomepage = async (req, res) =>{
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(sqlConfig)
        const result = await sql.query`SELECT * FROM Users;`
        user = result;
       } catch (err) {
        console.log(err)
       }
    res.send(JSON.stringify(user));
}

const getABC = (req, res) =>{
    res.send('Check ABC');
}

const getBCD = (req, res) =>{
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getBCD
}