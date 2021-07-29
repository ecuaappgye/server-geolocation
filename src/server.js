const express = require('express')
const http = require('http')
const {connection} = require('./socket')
const morgan = require('morgan')
const cors = require('cors')

const application = express()
application.set('port', process.env.PORT)

const server = http.createServer(application)

connection({serverConnection:server})

application.use(cors())
application.use(express.urlencoded({extended:true}))
application.use(express.json())

// Configuraciones de los middleware
application.use(morgan('dev'))

server.listen(application.get('port'), ()=>{console.log(`Server on port ${application.get('port')}`)})