const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    id: Number, //autogen
    name: String, //user input
    attributes: Array, //reference foodAttr model
}, {timestamps: true})

const food = mongoose.model('food', FoodSchema)
module.exports = food