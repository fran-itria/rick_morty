const axios = require('axios')

const URL_BASE = 'https://rickandmortyapi.com/api'
const KEY = '179180d9d086.4e91a167f3c86bcbbb24';

const getCharByID = (res, id) => {
    axios(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then(response => {
            const { id, name, species, gender, image } = response.data
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end(JSON.stringify({ id, name, species, gender, image }))
        })
        .catch(reason => {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end(reason.message)
        })
}

module.exports = getCharByID