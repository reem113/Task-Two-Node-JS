const express = require('express');
const {todos} = require('../controllers')
const router = express.Router();

router.post('/',(req,res)=>{
    const {body} = req
    todos.createTodo(req.body);
    res.status(204).end();
})

router.get('/',async (req,res)=>{
    const allTodos = await todos.findAll()
    res.json(allTodos)
})
router.get('/id',async (req,res)=>{
    const {id} = req.params
    const todo = await todos.findById()
    res.json(todo)
    if(!todo){
        res.status(404).end();
        return;
    }
})
router.patch('/id', async (req,res)=>{
    const {body, params:{id}} = req
    await todos.editData(id,body)
    res.status(204).end()
})
router.delete('/id',async (req,res)=>{
    const{id} = req.params
    await todos.deleteTodo(id)
    res.status(204).end()
})



module.exports = router