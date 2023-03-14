const mongoose = require('mongoose')

const BeerSchema = new mongoose.Schema({
    id: Number, //autogenerate
    brand: String, // user input
    name: String, // user input
    style: String //reference bStyle model
}, {timestamps: true})

const beer = mongoose.model('beer', BeerSchema)
module.exports = beer