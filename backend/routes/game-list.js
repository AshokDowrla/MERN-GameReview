const express = require('express')

const router = express.Router()
const gameControllers = require('../controllers/game-controllers')




router.get('/list',gameControllers.getGameReviews)

router.get('/toprated', gameControllers.getTopRated)

router.get('/genre/:genreName', gameControllers.getGenreGames)

module.exports= router