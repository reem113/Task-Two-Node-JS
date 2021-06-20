const {DataTypes} = require('sequelize');
const user = require('./users')
const sequelize  = require('../db');
const Todo = sequelize.define('Todo',{
    content:{
        type: DataTypes.STRING
    }
})
Todo.belongsTo(user);
Todo.sync({});
module.exports = Todo;