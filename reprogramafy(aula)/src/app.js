const express = require('express'); //importo o express

const app = express()// executo o express

app.use(express.json()) // uso o body parse

// importe da continuação de rotas podcast
const podRotas = require('./routes/podcastsRoutes')

app.use('/podcast', podRotas)// crio uma rota raiz

// exportando para usar o server.js
module.exports = app