require('dotenv').config();
const express = require('express'); //commonjs
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const sqlConfig  = require('./config/database');

const app = express(); // app express
const port = process.env.PORT || 8083; //port => hardcode
const hostname = process.env.HOST_NAME || 'localhost';
const webRoutes = require('./routes/web');
const sql = require('mssql');

//configure template engine
configViewEngine(app);

//khai bao route
app.use('/',webRoutes);


 app.listen(process.env.PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});