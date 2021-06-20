const { where } = require('sequelize/types');
const {todos} = require('../models/todos')
const createTodo =(data)=>{
   return todos.create(data);
}
const findAll = ()=>{
    todos.findAll();
}
const findById = (id)=>{
    return todos.findOne({where: { id}, include: 'user'})
}
const editData =(id,data)=>{
    return todos.update({where: {id}})
}
const deleteTodo = (id) =>{
    return todos.destroy({where:{id}})
}

module.exports ={
    createTodo,findAll,findById,editData,deleteTodo
}