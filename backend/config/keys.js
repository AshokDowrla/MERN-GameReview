module.exports={
    mongoURI: 'mongodb+srv://' +process.env.MONGO_ATLAS_USER+ ':' +process.env.MONGO_ATLAS_PW+'@gamereview-ubkhs.mongodb.net/'+process.env.DB_NAME+'?retryWrites=true&w=majority'
}