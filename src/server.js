const database = require('./database.js')
//Importar modulo dotenv e especificar o arquivo de configuracao
require('dotenv').config({path: "variaveis.env"})

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const route = require('./routes.js') // importanto routes

const server = express()

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(cors())
server.use("/labschool", route)

server.listen(process.env.PORT, () => {
    console.log(`Server run on port http://localhost:${process.env.PORT}`)
})