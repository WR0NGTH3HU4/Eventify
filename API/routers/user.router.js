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

module.exports = router