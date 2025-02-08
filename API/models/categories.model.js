const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Categories = db.define('Categories', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    }
});

module.exports =  { Categories } ;