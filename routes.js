const express=require('express')
const todoRouter=express.Router()
const mongoose=require('mongoose')
const todoSchema=mongoose.Schema({
    task:String,
    status:String
})
const todoModel=mongoose.model('todo',todoSchema)

todoRouter.post('/addTodo',async(req,res)=>{
    try {
        let data=await todoModel.insertMany(req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

todoRouter.get('/getTodo',async(req,res)=>{
    try {
        let data=await todoModel.find({})
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

todoRouter.delete('/deleteTodo',async(req,res)=>{
    try {
        await todoModel.findByIdAndDelete({'_id':req.headers.id})
        res.send('Deleted Successfully')
    } catch (error) {
        res.send(error)
    }
})

todoRouter.put('/toggleTodo',async(req,res)=>{
    try {
        // console.log(req.body)
        await todoModel.findByIdAndUpdate({'_id':req.body.id},req.body)
        res.send('Toggled success')
    } catch (error) {
        res.send(error)
    }
})

module.exports=todoRouter