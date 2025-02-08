const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/token');

exports.registerUser = async (username, email, password, gender, defAddress, favCategories, role, status)=>{
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        gender,
        defAddress,
        favCategories,
        role,
        status,
    });

    return user
};