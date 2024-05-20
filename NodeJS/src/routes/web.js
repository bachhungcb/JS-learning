const express = require('express')
const {getHomepage, getABC, getBCD, postCreateUser, getCreatePage} = require('../controllers/homeController')
const router = express.Router()

//router.Method('/route', handler);

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/bcd', getBCD);
router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser)


module.exports = router;