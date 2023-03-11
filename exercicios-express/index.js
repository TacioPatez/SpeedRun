const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Guilherme'))

app.use((req, res, next) =>{
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req,res) => {
    res.send(`Cliente ${req.params.id} selecionados!`)
})


app.use((req,res, next) => { //app.    all/get/put/use
    // res.send('Estou <b>Bem!</b>')
    
    res.json({
        name: 'iPad',
        price: 1800.00,
        discount: 0.12
    })

    console.log('Durante...')
    next()
})

app.use((req, res) =>{
    console.log('Depois...')
})


app.listen(3000, () => {
    console.log('Backend Executando...')
})