const mongoose = require('mongoose')

const PairingSchema = new mongoose.Schema({
    id: Number, //autogen
    user_id: Number, //reference user who uploaded pairing
    food: String, //reference FoodSchema
    beer: String, //reference BeerSchema
    comments: Array //users can comment on pairing, poster can comment as well, similar to reddit
}, {timestamps: true})

const pairing = mongoose.model('pairing', PairingSchema)
module.exports = pairing