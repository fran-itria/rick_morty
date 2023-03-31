const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const server = express()
const PORT = 3001

server.use(express.json())
server.use(cors())
server.use('/', router)

server.listen(PORT, () => console.log(`Correindo en el puerto ${PORT}`))
