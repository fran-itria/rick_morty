const { Router } = require('express')
const getCharById = require('../controllers/getCharacterById')
const getCharDetail = require('../controllers/getCharactersDetail')
const router = Router()
const favorite = require('./fav.js')

const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const login = require('../controllers/login.js')


router.get('/onsearch/:id', getCharById)
router.get('/detail/:id', getCharDetail)
router.use('/rickandmorty/fav', favorite)

router.get('/login', login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)


module.exports = router