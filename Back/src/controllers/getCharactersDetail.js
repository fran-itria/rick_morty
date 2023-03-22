const axios = require('axios')

const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            const { name, species, gender, status, origin, image, episode} = response.data
            const information = {
                name,
                species,
                gender,
                status,
                origin,
                image,
                episode
            }
            res.end(JSON.stringify(information))
        })
    // .catch(res.end(500, { 'Content-Type': 'text/plain' }), { message: error.message })
}

module.exports = getCharDetail