const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    phone: {
        type: Number,
        unique: true
    }

})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer