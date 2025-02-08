const { DataTypes } = require('sequelize');
const db = require('../config/database');
const { User } = require('../models/user.model')

const UserRatings = db.define('UserRatings', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rating: {
        type: DataTypes.STRING(1),
        allowNull: true
    }
});

//Kapcsolatok
UserRatings.hasMany(User, {foreignKey: 'userId'});
User.belongsTo(UserRatings, {foreignKey: 'userId'});

module.exports = { UserRatings };