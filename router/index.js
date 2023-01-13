const express = require('express')
const router = express.Router()
const passport = require('../config/passportJWT')

router.use('/customer', require('./customer'))
router.use('/client', require('./client'))
router.use('/food', require('./food'))
router.use('/order', require('./order'))

router.get('/profile', passport.authenticate('jwt', {failureRedirect: '/login', session: false}) , (req, res) => {
    return res.status(200).json({
        user: req.user
    })
})


module.exports = router