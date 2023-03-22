const http = require('http')
const getCharByID = require('./controllers/getCharacterById')
const getCharDetail = require('./controllers/getCharactersDetail')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req
    if (url.includes('onsearch')) {
        const id = url.split('/').at(-1)
        getCharByID(res, id)
    }
    if (url.includes('detail')) {
        const id = url.split('/').at(-1)
        getCharDetail(res, id)
    }
}
).listen(3001, 'localhost')