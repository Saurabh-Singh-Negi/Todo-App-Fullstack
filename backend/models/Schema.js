const mongoose = require('mongoose');
const {Schema} = mongoose;

const connect = async() => {
    await mongoose.connect("mongodb://localhost:27017/todoSample")
}
connect();
const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    priority: Number
})

const todoModel = mongoose.model('todos', todoSchema);
module.exports = todoModel;





