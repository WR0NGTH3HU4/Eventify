const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Locations = db.define('Locations', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    regionName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cityName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    postCode: {
        type: DataTypes.STRING(4),
        allowNull: false
    }
});

module.exports = { Locations };