const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    customer: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    food: {
        type: mongoose.Types.ObjectId,
        ref: 'Food',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }

})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order