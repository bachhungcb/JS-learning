const express = require('express')
const {getHomepage, getABC, getBCD, getOld, getNew} = require('../controllers/homeController')
const router = express.Router()

//router.Method('/route', handler);

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/bcd', getBCD);
// router.get('/old', getOld);
// router.get('/new', getNew);

module.exports = router;