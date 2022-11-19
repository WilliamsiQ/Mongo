const express = require('express');
const {json} = require('express');
const todoRouter = require('./route/todoRoute');
const connect = require('./config/database');


connect()
const app = express();
app.use(json());
app.use('/todo', todoRouter)
const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=> console.log(`serving on port ${PORT}`))