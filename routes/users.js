const express = require('express');
const {users} = require('../controllers')
const router = express.Router();

router.post('/',(req,res)=>{
    const {body} = req
    users.createuser(req.body);
    res.status(204).end();
})

router.get('/',async (req,res)=>{
    const allusers = await users.findAll()
    res.json(allusers)
})
router.get('/id',async (req,res)=>{
    const {id} = req.params
    const user = await users.findById()
    res.json(user)
    if(!user){
        res.status(404).end();
        return;
    }
})
router.patch('/id', async (req,res)=>{
    const {body, params:{id}} = req
    await users.editData(id,body)
    res.status(204).end()
})
router.delete('/id',async (req,res)=>{
    const{id} = req.params
    await users.deleteuser(id)
    res.status(204).end()
})



module.exports = router