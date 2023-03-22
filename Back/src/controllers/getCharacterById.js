const axios = require('axios')

const getCharByID = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            const { id, name, species, gender, image } = response.data
            const information = {
                id,
                name,
                species,
                gender,
                image
            }
            res.end(JSON.stringify(information))
        })
    // .catch(res.end(500, { 'Content-Type': 'text/plain' }), { message: error.message })
}

module.exports = getCharByID