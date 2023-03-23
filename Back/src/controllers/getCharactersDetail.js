const axios = require('axios')

const URL_BASE = 'https://rickandmortyapi.com/api'
const KEY = '179180d9d086.4e91a167f3c86bcbbb24';

const getCharDetail = (res, id) => {
    axios(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then(response => {
            const { name, species, gender, status, origin, image, episode } = response.data
            res.end(JSON.stringify({ name, species, gender, status, origin, image, episode }))
        })
        .catch(reason => {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.edn(reason.message)
        })
}

module.exports = getCharDetail