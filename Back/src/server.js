const http = require('http')
const characters = require('./utils/data')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req
    if (url.includes('rickandmorty/character')) {
        const id = url.trim().split('/').pop()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(characters.find(char => char.id == id)))
    } else { return res.end(404, 'Id no encontrado') }
}).listen(3001, 'localhost')