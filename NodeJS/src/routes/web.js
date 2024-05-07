const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! \n huhue');
  });
  
router.get('/abc', (req, res) => {
    res.send('Check ABC');
});
  
router.get('/bcd', (req, res) => {
    // res.send('<h1>avx</h1>');
    res.render('sample.ejs');
});

module.exports = router;