const express = require('express');
const router = express.Router();
const Task = require('../model/index')

//  Rota de GET
router.get('/tasks', (req, res) => {
    Task.find({}, (err, data) => {
        if(err) return res.send({ message: 'Erro na consulta Tasks'});
        return res.status(200).json(data);
    });
});

//  Rota de Post
router.post('/task', (req, res) => {
    const {tarefa, data, hora} = req.body;
    if(!tarefa || !data || !hora) return res.send({ error: "Dados insuficientes!" });
    
    Task.create(req.body, (err, data) => {
        if(err) return res.send({ error: "Erro ao criar Task!"});
        return res.send(data);
    });
});

//  Rota de Delete
router.delete('/task/:id', (req, res) => {
    const task = Task.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.status(400).json({ error: "Erro ao excluir o Task!" });
    });
    return res.status(200).json({ message: 'Task excluido com sucesso!'});
});

module.exports = router;