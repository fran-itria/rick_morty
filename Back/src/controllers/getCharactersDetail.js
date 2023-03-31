const axios = require('axios')

const URL_BASE = 'https://rickandmortyapi.com/api/character'
const KEY = '179180d9d086.4e91a167f3c86bcbbb24';

const getCharDetail = (req, res) => {
    const { id } = req.params
    axios(`${URL_BASE}/${id}?key=${KEY}`)
        .then(response => {
            const { id, name, status, episode, species, gender, origin, image } = response.data
            res.json({ id, name, status, episode, species, gender, origin, image })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
}

module.exports = getCharDetail