const express = require('express')
const sendMailer = require('../config/mailers')
const passport = require('../config/passportJWT')
const Order = require('../models/order')
const router = express.Router()

router.post('/foodOrder',  async (req, res) => {

    try{

        console.log("the order obj")
        const order = await Order.create(req.body)
        sendMailer()
        return res.status(200).json({
            order,
            message: "Order Place successfully"
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Order Place successfully"
        })
    }

} )


module.exports = router