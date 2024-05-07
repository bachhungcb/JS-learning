const express = require('express'); //commonjs
const path = require('path');
require('dotenv').config();

const app = express(); // app express
const port = process.env.PORT || 8083; //port => hardcode
const hostname = process.env.HOST_NAME || 'localhost';

//configure template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//config static files
app.use(express.static(path.join(__dirname, 'public')));

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World! \n huhue');
});

app.get('/abc', (req, res) => {
  res.send('Check ABC');
});

app.get('/bcd', (req, res) => {
  // res.send('<h1>avx</h1>');
  res.render('sample.ejs');
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
