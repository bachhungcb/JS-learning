const path = require('path');
const express = require('express');

const configViewEngine = (app) =>{
    app.set('views', path.join('./src', 'views'));  // phu thuoc vao noi de file de config duong dan
    app.set('view engine', 'ejs');
    //config static files
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;