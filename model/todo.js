const {Schema, model} = require("mongoose");

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    
},{timestamps: true});

const todoModel = model("todos", todoSchema);

module.exports = todoModel;