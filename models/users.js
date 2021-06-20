const {DataTypes} = require('sequelize');

const sequelize  = require('../db');
const User = sequelize.define('User',{
    content:{
        type: DataTypes.STRING
    }
})
User.sync({});
module.exports = User;