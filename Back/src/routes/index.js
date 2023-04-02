const { Router } = require('express')
const getCharById = require('../controllers/getCharacterById')
const getCharDetail = require('../controllers/getCharactersDetail')
const router = Router()
const favorite = require ('./fav.js')

router.get('/onsearch/:id', getCharById)
router.get('/detail/:id', getCharDetail)
router.use('/rickandmorty/fav', favorite)

module.exports = router