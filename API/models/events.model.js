const { DataTypes } = require('sequelize');
const db = require('../config/database');
const { User } = require('../models/user.model');
const { Categories } = require('../models/categories.model');

const Events = db.define('Events', {
    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    eventStart: {
        type: DataTypes.DATE,
        allowNull: false
    },
    eventEnd: {
        type: DataTypes.DATE,
        allowNull: false
    },
    eventAddress: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    eventDate:{
        type: DataTypes.DATE,
        allowNull: false
    }
});

//Kapcsolatok
User.hasMany(Events, Categories, {foreignKey: 'userId'});
Categories.hasMany(Events, {foreignKey: 'catId'});

Events.belongsTo(User, Categories, {foreignKey: 'userId', foreignKey: 'catId'});

module.exports = { Events };