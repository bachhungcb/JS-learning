const sql = require('mssql');
const sqlConfig  = require('../config/database');
const { getAllUsers, updateUserById, createNewUsers, getUserById, deleteUsersById } = require('../service/CRUDService')
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
    res.redirect('/');
}

const getCreatePage = (req, res) =>{
    res.render('create.ejs');
}
const getUpdatePage = async (req, res) =>{
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', {user : user}); //user = user
}

const postUpdatePage = async (req, res) => {
    let {email, myname, city, userId} = req.body;
    await updateUserById(email, myname, city, userId);
    // res.send('Updated User succeed');
    res.redirect('/');
}

const postDeleteUser = async (req,res) =>{
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', {user: user});
}

const handleDeleteuser = async (req,res) => {
    const userId = req.body.userId;
    await deleteUsersById(userId);
    res.redirect('/');
}

module.exports = {
    getHomepage,
    getABC,
    getBCD,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdatePage,
    postDeleteUser,
    handleDeleteuser
}