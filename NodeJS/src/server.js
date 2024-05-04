const express = require('express'); //commonjs
const path = require('path');

const app = express(); // app express
const port = 8080; //port

//configure template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World! \n hehehehe');
});

app.get('/abc', (req, res) => {
  res.send('Check ABC');
});

app.get('/bcd', (req, res) => {
  // res.send('<h1>avx</h1>');
  res.render('sample.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
