const Game = require('../models/games')
const HttpError = require('../models/http-error')

const getGameReviews = (req, res, next) => {

  
    Game.find({})
        .exec()
        .then(list => {

            if (!list || list.length === 0) {

                const error = new Error('Could not find the records or Databse is Empty', 404)

                return next(error)
            }
            res.status(200).json({
                count: list.length,
                game_reviews: list
            })
        })
        .catch(err => {
            const error = new HttpError('Error getting Data from Database', 500)

            return next(error)
        })



}

const getTopRated = (req, res, next) =>{

    
    Game.find({score:{$gte : 9}}).sort({score:-1})
        .exec()
        .then(list => {

            if (!list || list.length === 0) {

                const error = new Error('Could not find the records or Databse is Empty', 404)

                return next(error)
            }
            res.status(200).json({
                count: list.length,
                game_reviews: list
            })
        })
        .catch(err => {
            const error = new HttpError('Error getting Data from Database', 500)

            return next(error)
        })


}




const getGenreGames = (req, res, next) =>{

    const query = req.params.genreName
    
    Game.find({genre:query}).sort({score:-1})
        .exec()
        .then(list => {

            if (!list || list.length === 0) {

                const error = new Error('Could not find the records or Databse is Empty', 404)

                return next(error)
            }
            res.status(200).json({
                count: list.length,
                game_reviews: list
            })
        })
        .catch(err => {
            const error = new HttpError('Error getting Data from Database', 500)

            return next(error)
        })


}


exports.getGameReviews = getGameReviews
exports.getTopRated = getTopRated
exports.getGenreGames =getGenreGames