const { Router } = require('express')
const favorite = Router()
let fav = require('../utils/index')

favorite.post('/', (req, res) => {
    fav.push(req.body)
})
favorite.get('/', (req, res) => {
    res.status(200).json(fav)
})
favorite.delete('/:id', (req, res) => {
    const { id } = req.params
    fav = fav.filter(char => char.id != id)
    res.status(200).json(fav)
})

module.exports = favorite