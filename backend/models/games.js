const mongoose = require('mongoose')

const Schema = mongoose.Schema

gameSchema = new Schema({

    title:{
        type:String,
        required:true


    },
    platform:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    editors_choice:{
        type:String,
        required:true
    }


}
)


module.exports = Game= mongoose.model('gamereview',gameSchema)