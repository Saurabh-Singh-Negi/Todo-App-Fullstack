const { findOneAndUpdate, findByIdAndUpdate } = require('../models/Schema');
const todos = require('../models/Schema')
exports.getTodos = async (req,res) => {
    const todoData = await todos.find();
    res.status(201).json(todoData); 
}

exports.createTodo = async (req, res) => {
    // res.send("task is :" + req.body.todo)
    try {
        const todo = await todos.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                todo,
            }
        })    
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    
}

exports.editTodo = async (req, res) => {
    const todo = await todos.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {
            new:true
        }
    )
    res.status(201).json({
        data: {
            todo
        }
    })

}

exports.deleteTodo = async(req, res) => {
    console.log(req.params.id);
    try {
        const deletedTodo = await todos.deleteOne({_id:req.params.id})
        if(deletedTodo.deletedCount === 0) {
            res.status(404).json({
                status: 'fail',
                message: 'no such todo'
            });
        }
        
        else {
            res.status(200).json({
                data: {
                    deletedTodo
                },
                status: 'success',
                message: 'deleted succesfully'
            })
        } 
    } catch (error) {
        res.status(400).json({
            status: "failed catch",
            message: error.message
        })
    }
    
    
    
}

