const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
    tarefa: { type: String, require: true},
    data: { type: String, require: true},
    hora: { type: String, require: true}
});

module.exports = mongoose.model('Taks', TasksSchema);