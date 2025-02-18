const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

// register new user
router.post('/register', userController.register);

//login user
router.post('/login', userController.login);

//update password
router.patch('/password/:id', authMiddleware, userController.password)

//update emai
router.patch('/email/:id', authMiddleware, userController.email)

//update username
router.patch('/username/:id', authMiddleware, userController.username)

module.exports = router