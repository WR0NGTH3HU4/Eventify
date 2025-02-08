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
Events.hasMany(User, Categories, {foreignKey: 'userId'},{});
User.belongsTo(Events, {foreignKey: 'userId'});

Events.hasMany(Categories, {foreignKey: 'catId'});
Categories.belongsTo(Events, {foreignKey: 'catId'});

module.exports = { Events };