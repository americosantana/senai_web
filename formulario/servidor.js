const porta = 3003

const express = require('express')
const app = express()
const filtro = require ('./lista')
const bodyParser = require('body-parser')

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With, Content-Type, Acept');
    next();
})

//função para acesso dos filtros
app.get('/', function(req, res, next){
    res.send(filtro.resultado);
})

//configuração de funcionamento do app na porta 3003, configure linha 1
app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`)
})