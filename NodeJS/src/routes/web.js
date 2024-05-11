const express = require('express')
const {getHomepage, getABC, getBCD, getDB} = require('../controllers/homeController')
const router = express.Router()

//router.Method('/route', handler);

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/bcd', getBCD);


module.exports = router;