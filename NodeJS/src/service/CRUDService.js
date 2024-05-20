const sql = require('mssql');
const sqlConfig  = require('../config/database');

const getAllUsers = async () =>{
    let result = null;
    try{
        let pool = await sql.connect(sqlConfig);
        result = await pool
        .request()
        .query(`SELECT *
                FROM Users`,
        );
        // Inform the state
        //res.send('Create User succeed');
    }
    catch(err){
        console.log(err);
    }

    return result.recordset;
}

module.exports = {
    getAllUsers
}