const express = require('express');
const route = express.Router()
const alunoController = require("./controllers/AlunoController.js")
const cors = require('cors');
const turmaController = require('./controllers/TurmaController.js');

route.options("*", cors())

//Endpoints - Aluno
route.get('/aluno', alunoController.readyAlunos)//Ready
route.get('/aluno/:codigo', alunoController.readyAlunosByCurso)//Ready
route.post('/aluno', alunoController.createAluno)//Create
route.put('/aluno/:codigo', alunoController.updateAluno)//Update
route.delete('/aluno/:codigo', alunoController.deleteAluno) //Delete

//Endpoints - Turma
route.get('/turma', turmaController.readyTurma) //Ready
route.post('/turma', turmaController.createTurma) //Create
route.put('/turma/:codigo', turmaController.updateAluno) //Update
route.delete('/turma/:codigo', turmaController.deleteTurma) //Delete

module.exports = route;