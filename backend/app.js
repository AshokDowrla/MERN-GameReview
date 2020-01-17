const express = require('express')
const app = express()
const mongoose =require('mongoose')
const db= require('./config/keys').mongoURI
const bodyParser = require('body-parser')
const gameReviewRoute = require('./routes/game-list')
const searchRoute = require('./routes/searchList')
const HttpError = require('./models/http-error')



mongoose.connect(db,


    {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }

)
.catch(err=>{
    console.log(err)
})

//body-parser

app.use(bodyParser.json())



//cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

//routes
app.use('/api/gamereviews', gameReviewRoute)
app.use('/api/gamereviews', searchRoute)




//error catchers

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });



app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
  });

module.exports=app