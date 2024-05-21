const express = require('express')
const {getHomepage, getABC, getBCD, postCreateUser, getCreatePage, getUpdatePage, postUpdatePage, postDeleteUser, handleDeleteuser } = require('../controllers/homeController')
const router = express.Router()

//router.Method('/route', handler);

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/bcd', getBCD);
router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdatePage);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user/', handleDeleteuser);

router.post('/create-user', postCreateUser)


module.exports = router;