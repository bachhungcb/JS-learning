const express = require("express"); //commonjs


const app = express();// app express
const port = 8080; //port

app.get("/", (req, res) => {
  res.send('Hello World! \n hehehehe');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
