const mongoose = require('mongoose')


const foodSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 5,
        enum: [1, 2, 3, 4, 5]
    },
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: 'Client'
    }

})

const Food = mongoose.model('Food', foodSchema)
module.exports = Food