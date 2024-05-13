const express = require('express')
const {getHomepage, getABC, getBCD, getOld, getNew, postCreateUser} = require('../controllers/homeController')
const router = express.Router()

//router.Method('/route', handler);

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/bcd', getBCD);
// router.get('/old', getOld);
// router.get('/new', getNew);

router.post('/create-user', postCreateUser)


module.exports = router;