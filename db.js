const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('node', 'root',null, {
//     host: '127.0.0.1',
//     dialect: 'mssql'
//   });

const sequelize = new Sequelize('mssql://root:root@localhost:3000/node')
  module.exports = sequelize;