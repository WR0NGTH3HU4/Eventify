const { DataTypes } = require('sequelize');
const db = require('../config/database');
const { Events } = require('../models/events.model');
const { User } = require('../models/user.model');

const EventRatings = db.define('EventRatings', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rating: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    opinion:{
        type: DataTypes.TEXT,
        allowNull: true
    }
});

//Kapcsolatok
EventRatings.hasMany(Event, {foreignKey: 'eventId'});
Events.belongsTo(EventRatings, {foreignKey: 'eventId'});

EventRatings.hasMany(User, {foreignKey: 'userId'});
User.belongsTo(EventRatings, {foreignKey: 'userId'});

module.exports = { EventRatings };