const express = require('express');
const userController = require('../controllers/userController');
const protectAuth = require('../middlewares/authProtector')
const restrictTo = require('../middlewares/restrictTorole')

const router = express.Router();
router.use(protectAuth)


router.get('/overview', userController.userOverview);
router.route('/resetPassword').post(userController.resetPassword);
router.route('/createuser').post(restrictTo('admin'), userController.createUser);
router.route('/list-users').get(restrictTo('admin'), userController.userList)

module.exports = router;