
const getHomepage = (req, res) =>{
    //process data, goi den model
    //call model
    res.send('Hello World! \n huhue');
}

const getABC = (req, res) =>{
    res.send('Check ABC');
}


const getBCD = (req, res) =>{
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getBCD
}