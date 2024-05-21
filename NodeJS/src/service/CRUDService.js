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

const updateUserById = async (email, myname, city, userId) =>{
    try{
        let pool = await sql.connect(sqlConfig);
        let result = await pool
        .request()
        .input('email', sql.NVarChar, email)
        .input('name', sql.NVarChar, myname)
        .input('city', sql.NVarChar, city)
        .input('userID', sql.Int, userId)
        .query(`UPDATE Users
                SET name = @name, city= @city, email = @email
                WHERE id = @userID;`
        );
        // Inform the state
    }catch(err){
        console.log(err);
    }
}

const createNewUsers = async (email, myname, city) =>{
    try{
        let pool = await sql.connect(sqlConfig);
        let result = await pool
        .request()
        .input('email', sql.NVarChar, email)
        .input('name', sql.NVarChar, myname)
        .input('city', sql.NVarChar, city)
        .query(`INSERT INTO
                Users(email, name, city)
                VALUES(@email, @name, @city)`,
            [email, myname, city],
        function(err, results){
            res.send('Create User succeed');
        });
        // Inform the state
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getAllUsers,
    updateUserById,
    createNewUsers
}