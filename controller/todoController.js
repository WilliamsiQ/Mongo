const Todo = require("../model/todo");

//get all todos

exports.getAllTodos = async(req,res)=> {
    try {
        let todo = await Todo.find();
        if(todo.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'todos not found'
            })
        }
        res.status(200).json({
            success: true,
            message: "Todos found",
            todo,
            count: todo.length
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: err.message
        })
    }
}

// create todo

exports.createTodo = async(req,res)=> {
    try {
        let todo = await req.body;
        let created = await Todo.create(todo);
        if(!created){
            return res.status(400).json({
                success: false,
                message: "Todo not created"
            })   
        }
        return res.status(201).json({
            success: true,
            message: "todo created",
            todo: created 
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: err.message
        })
    }
}

//get one todo

exports.getTodo = async (req,res)=> {
    try {
        let id = {_id: req.params.id}
        const todo = await Todo.findOne(id);

        if(!todo) {
            return res.status(404).json({
                success: false,
                message: " not found"
            })
        }
        res.status(200).json({
            success: true,
            todo
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        })
    }
}

exports.updateTodo = async (req,res)=> {
    try {
        let id = { _id: req.params.id };
        let tondo = await req.body;
        let update = await Todo.findOneAndUpdate(id, tondo, {new: true});

        if(!update) {
            return res.status(400).json({
                success: false,
                message: 'todo not updated',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'todo updated',
            todo: update
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'server error',
            error: err.message
        })
    }
}

exports.deleteTodo = async(req, res) => {
    try {
        let id = {_id: req.params.id}
        let todoDel = await Todo.findOneAndRemove(id);

        if(!todoDel) {
            return res.status(400).json({
                success: false,
                message: 'todo not found'
            });
        }
        return res.status(200).json({
            success: true,
            message: 'todo deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message:'internal server error',
            error: err.message
        })
    }
}




