const mongoose = require('mongoose')

const BeerSchema = new mongoose.Schema({
    brand: String, // user input
    name: String, // user input
    style: String, //user input
    attributes: Array
}, {timestamps: true})

const beer = mongoose.model('beer', BeerSchema)
module.exports = beer