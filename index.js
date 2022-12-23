const express = require('express')
const cors = require('cors')
const db = require('./config/mongoose')
const Client = require('./models/client')
const PORT=8000
const app = express()

app.use(cors())

app.use(express.urlencoded())
app.use(express.json())


// app.use((req, res, next) => { console.log("this is a middleware!", req.url); next() })
// app.use((req, res, next) => { console.log("this is a middleware 2!", req.url); next() })



app.post('/signup', async (req, res) => {
    const client = await Client.create(req.body)
    if(client){
        return res.status(200).json({ message: "Client created successfully!", client:client })
    }
    return res.status(500).json({ message: "Error Occured!"})
})

app.post('/signin', async (req, res) => {
    try{
        const client = await Client.findOne({email: req.body.email})
        if(client){
            if(client.password === req.body.password)
                return res.status(200).json({ message: "Client found successfully!", client:client })
            return res.status(401).json({ message: "User not found!"})  
        }
        return res.status(401).json({ message: "User not found!"})
    }catch(error){
        return res.status(500).json({ message: "Server error!"})
    }
    
})


app.listen(PORT, (err) => {
    if(err){
        console.log('Error in starting server', err)
    }
    console.log('Server is successfully running!')
})