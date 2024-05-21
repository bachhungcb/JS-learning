const sql = require('mssql');
const sqlConfig  = require('../config/database');
const { getAllUsers, updateUserById, createNewUsers } = require('../service/CRUDService')
//const request = new sql.Request()

const getHomepage = async (req, res) =>{
    let result  = await getAllUsers();
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

    let {email, myname, city} = req.body;
    await createNewUsers(email, myname, city);
    res.send('Create User succeed');
}

const getCreatePage = (req, res) =>{
    res.render('create.ejs');
}
const getUpdatePage = async (req, res) =>{
    const userId = req.params.id;
    let result = null;
    try{
        let pool = await sql.connect(sqlConfig);
        result = await pool
        .request()
        .input('userId', sql.Int, userId)
        .query(`SELECT *
                FROM Users
                WHERE id = @userId`,
        );
        // Inform the state
        //res.send('Create User succeed');
    }
    catch(err){
        console.log(err);
    }
    
    let user = result && result.recordset.length > 0 ? result.recordsets[0]: {};
    res.render('edit.ejs', {user : user}); //user = user
}

const postUpdatePage = async (req, res) => {
    let {email, myname, city, userId} = req.body;
    await updateUserById(email, myname, city, userId);
    // res.send('Updated User succeed');
    res.redirect('/');
}

module.exports = {
    getHomepage,
    getABC,
    getBCD,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdatePage
}