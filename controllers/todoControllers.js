const Todo  = require('../model/todoSchema')

exports.getAllTodo = async(req,res)=>{
    try{
        const todo = await Todo.find()

        res.status(200).json(todo)
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

exports.addTodo = async(req,res)=>{
    const {task,details}=req.body
    try{
        const todo = await Todo.create({task,details})
        res.status(201).json({message:'created'})
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

exports.updateTodo = async(req,res)=>{
    const{id}=req.params
    const {task,details}=req.body
    try{
        const todo = await Todo.findByIdAndUpdate(id,{task,details})
        res.status(200).json({message:'Updated'})
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

exports.deleteTodo = async(req,res)=>{
    const{id}=req.params
    try{
        const todo = await Todo.findByIdAndDelete(id)
        res.status(200).json({message:'Deleted'})
    }
    catch(error){
        res.status(500).json({message:error})
    }
}
