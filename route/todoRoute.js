const router = require('express').Router();
const todoController = require('../controller/todoController')

router
    .get('/',todoController.getAllTodos)
    .post('/',todoController.createTodo)
    .get('/:id',todoController.getTodo)
    .delete('/:id',todoController.deleteTodo)
    .put('/:id',todoController.updateTodo);

module.exports = router;