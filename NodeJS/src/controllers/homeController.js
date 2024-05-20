const sql = require('mssql');
const sqlConfig  = require('../config/database');
const { getAllUsers } = require('../service/CRUDService')
//const request = new sql.Request()

const getHomepage = async (req, res) =>{
    let result  = await getAllUsers();
    console.log(result);
    return res.render('home.ejs', {listUsers: result}) // listUser = result
}

const getABC = (req, res) =>{
    res.send('Check ABC');
}

const getBCD = (req, res) =>{
    res.render('sample.ejs');
}

// const getOld = async (req, res) => {
//     try{
//         let totalExec = 0;
//         for(let i = 0; i< 1000; i++){
//             let pre_query = new Date().getTime();
//             let con = await sql.connect(Config);
            
//             con.query(
//                     `SELECT * 
//                     FROM characters 
//                     WHERE anime_id = @anime_id`,
//                 function (err, results, fields){
//                     const post_query = new Date().getTime();
//                     const duration = (post_query - pre_query) / 1000;
//                     totalExec += duration;

//                     console.log(">>>>", " i = ", i, "duration: ", duration)
//                     if(i == 999){
//                         const ave = totalExec / 1000;
//                         return res.send("average: " + ave);
//                     }
//                 }
//             )

//         }
        
//     }catch(err){
//         console.log(err);
//     }
// }

// const getNew = async (req, res) => {
//     try{
//         let totalExec = 0;
//         for(let i = 0; i< 1000; i++){
//             let pre_query = new Date().getTime();
//             let con = await sql.connect(sqlConfig);
            
//             con.query(
//                 'SELECT * FROM User',
//                 function (err, results, fields){
//                     const post_query = new Date().getTime();
//                     const duration = (post_query - pre_query) / 1000;
//                     totalExec += duration;

//                     console.log(">>>>", " i = ", i, "duration: ", duration)
//                     if(i == 999){
//                         const ave = totalExec / 1000;
//                         return res.send("average: " + ave);
//                     }
//                 }
//             )

//         }
        
//     }catch(err){
//         console.log(err);
//     }
// }

const postCreateUser = async (req, res) => {
    console.log('>>> req.body', req.body);
    let {email, myname, city} = req.body;
    console.log(">>>> email = ", email, 'name = ', myname, 'city = ', city);
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
            console.log(results);
            res.send('Create User succeed');
        });
        console.log(result);
        // Inform the state
        res.send('Create User succeed');
    }catch(err){
        console.log(err);
    }
}

const getCreatePage = (req, res) =>{
    res.render('create.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getBCD,
    postCreateUser,
    getCreatePage
}