const { Router } = require('express')
const favorite = Router()
let fav = require('../utils/index')

favorite.post('/fav', (req, res) => {
    fav.push(req.body)
}) 
favorite.get('/fav', (req, res) => {
    res.status(200).json(fav)
})
favorite.delete('/fav/:id', (req, res) => {
    const { id } = req.params
    fav = fav.filter(char => char.id != id)
    res.status(200).json(fav)
})

module.exports =  favorite