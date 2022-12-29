const express = require('express')
const Customer = require('../models/customer')
const router = express.Router()


router.post('/signup', async (req, res) => {
    const client = await Customer.create(req.body)
    if(client){
        return res.status(200).json({ message: "Client created successfully!", client:client })
    }
    return res.status(500).json({ message: "Error Occured!"})
})

router.post('/signin', async (req, res) => {
    try{
        const client = await Customer.findOne({email: req.body.email})
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


module.exports = router