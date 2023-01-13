const mongoose = require('mongoose')


const clientSchema = new mongoose.Schema({

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
        required: true,
        unique: true
    },
    foods: [
        {
            type: mongoose.Types.ObjectId,
        }
    ]

})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client