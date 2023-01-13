const express = require('express')
const router = express.Router()
const passport = require('../config/passportJWT')
const Client = require('../models/client')
const Food = require('../models/food')

router.post('/addFood', passport.authenticate('jwt', {failureRedirect: '/login', session: false}), async (req, res) => {
    try{

        console.log(req.body)
        const food = await Food.create(req.body)
        const restaurant = await Client.findById(req.user.id)
        restaurant.foods.push(food._id)
        await restaurant.save()

        return res.status(200).json({
            food,
            message: "Food added successfully!"
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Food not added!"
        })

    }
    
} )

router.get('/allFood', async (req, res) => {
    try{

        const Foods = await Food.find({})
        return res.status(200).json({
            foods: Foods,
            message: "Food fetched successfully!"
        })

    }catch(error) {
        console.log(error)
        return res.status(500).json({
            message: "Error in fetching food!"
        })
    }
} )

module.exports = router