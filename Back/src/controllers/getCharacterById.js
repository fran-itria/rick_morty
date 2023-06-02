const axios = require('axios')

const URL_BASE = 'https://rickandmortyapi.com/api/character'
const KEY = '179180d9d086.4e91a167f3c86bcbbb24';

const getCharById = (req, res) => {
    const { id } = req.params
    axios(`${URL_BASE}/${id}?key=${KEY}`)
        .then(response => {
            const { id, name, species, gender, image, status } = response.data
            let origin = response.data.origin.name
            res.status(200).json({ id, name, species, gender, image, origin, status })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
}


module.exports = getCharById