const express = require('express')
const cors = require('cors')
const passport = require('./config/passportJWT')
const db = require('./config/mongoose')
const PORT=8000
const app = express()

app.use(cors())

app.use(express.urlencoded())
app.use(express.json())

passport.initialize()

app.use('/', require('./router'))


app.listen(PORT, (err) => {
    if(err){
        console.log('Error in starting server', err)
    }
    console.log('Server is successfully running!')
})