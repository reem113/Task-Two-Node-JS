const { where } = require('sequelize/types');
const {users} = require('../models/users')
const createuser =(data)=>{
   return users.create(data);
}
const findAll = ()=>{
    users.findAll();
}
const findById = (id)=>{
    return users.findOne({where: { id}})
}
const editData =(id,data)=>{
    return users.update({where: {id}})
}
const deleteuser = (id) =>{
    return users.destroy({where:{id}})
}

module.exports ={
    createuser,findAll,findById,editData,deleteuser}
