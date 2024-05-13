require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');

const app = express(); // app express
const port = process.env.PORT || 8083; //port => hardcode
const hostname = process.env.HOST_NAME || 'localhost';
const webRoutes = require('./routes/web');

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })) //Parse URL-encoded bodies


//configure template engine
configViewEngine(app);

//khai bao route
app.use('/',webRoutes);


 app.listen(process.env.PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});