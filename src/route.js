const express = require('express')
const QuestionController = require('./controllers/QuestionController')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-room', (req, res) => res.render("create-room"))

//Formato que o formulário de dentro da modal tem que passar a infor
route.post('/room/:room/:question/:action', QuestionController.index)

module.exports = route