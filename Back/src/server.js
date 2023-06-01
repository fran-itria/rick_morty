const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const { conn } = require('./DB_connection')
const server = express()
const PORT = 3001

server.use(express.json())
server.use(cors())
server.use('/', router)

conn
    .sync({ force: true })
    .then(() => {
        server.listen(PORT, () => console.log(`Correindo en el puerto ${PORT}`))
    })
    .catch(error => console.log(error))
