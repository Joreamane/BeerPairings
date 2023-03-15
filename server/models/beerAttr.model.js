const mongoose = require('mongoose')

const BeerAttrSchema = new mongoose.Schema({
    name: String,
    foodProfiles: Array //Create Cut and Compliment fields later, differentiation
}, {timestamps: true})

const beerAttr = mongoose.model('beerAttr', BeerAttrSchema)
module.exports = beerAttr