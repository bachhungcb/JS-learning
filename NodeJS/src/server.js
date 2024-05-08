require('dotenv').config();
const express = require('express'); //commonjs
const path = require('path');
const configViewEngine = require('./config/viewEngine');

const app = express(); // app express
const port = process.env.PORT || 8083; //port => hardcode
const hostname = process.env.HOST_NAME || 'localhost';
const webRoutes = require('./routes/web');

//configure template engine
configViewEngine(app);

//khai bao route
app.use('/',webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});