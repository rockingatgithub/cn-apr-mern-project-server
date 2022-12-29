const express = require('express')
const Client = require('../models/client')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {

    try{
        const client = await Client.create(req.body)
        if(client){
            const clientObj = { id: client._id, email: client.email }
            const token = jwt.sign(clientObj, 'my_key', { expiresIn: '7d' })
            return res.status(200).json({ message: "Client created successfully!", client:client, token })
        }
    }catch(error){
        console.log("Error Ocuured", error)
        return res.status(500).json({ message: "Error Occured!"})
    }

    
})

router.post('/signin', async (req, res) => {
    try{
        const client = await Client.findOne({email: req.body.email})
        if(client){
            if(client.password === req.body.password){
                const clientObj = { id: client._id, email: client.email }
                const token = jwt.sign(clientObj, 'my_key', { expiresIn: '7d' })
                return res.status(200).json({ message: "Client found successfully!", client:client, token })
            }
            return res.status(401).json({ message: "User not found!"})  
        }
        return res.status(401).json({ message: "User not found!"})
    }catch(error){
        return res.status(500).json({ message: "Server error!"})
    }
    
})

module.exports = router