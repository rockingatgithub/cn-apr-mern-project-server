const mongoose = require('mongoose')

// mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/mern_zomato')

const db = mongoose.connection

db.once('open', (err) => {
    if(err){
        console.log('Database connection error!', err)
        return
    }
    console.log("Database connection successful!")
})

module.exports = db
