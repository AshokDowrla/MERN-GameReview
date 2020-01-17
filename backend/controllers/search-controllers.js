const Game = require('../models/games')
const HttpError = require('../models/http-error')
const getSearchResults = (req, res, next) => {

    const query = req.params.searchQuery

    if (query) {
        const regex = new RegExp(escapeRegex(query), 'i');

        //console.log(regex)
        Game.find({ title: regex }).sort({ score: -1 })
            .exec()
            .then(results => {
                // console.log(results)
                

                res.status(200).json({
                    count: results.length,
                    game_reviews: results
                })
            })
            .catch(err => {
                const error = new HttpError('Error getting Search Results from Database', 500)

                return next(error)
            })

    }





}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

exports.getSearchResults = getSearchResults