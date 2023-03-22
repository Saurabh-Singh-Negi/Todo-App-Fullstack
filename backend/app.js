const express = require('express');
const cors = require('cors')
const handler = require('./controllers/handlers');
const bodyParser = require('body-parser');
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', handler.getTodos);
app.post('/createtodo', handler.createTodo);
app.put('/edittodo/:id', handler.editTodo);
app.delete('/deletetodo/:id', handler.deleteTodo);

app.listen(3001);
console.log('running on 3001');