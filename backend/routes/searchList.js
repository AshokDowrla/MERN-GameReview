const express = require('express')

const router = express.Router()

const searchControllers =require('../controllers/search-controllers')


router.get('/search/:searchQuery', searchControllers.getSearchResults)

module.exports= router