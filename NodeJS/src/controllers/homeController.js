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

module.exports = {
    getHomepage,
    getABC,
    getBCD
    //getOld,
    //getNew
}