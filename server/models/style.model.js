const mongoose = require('mongoose')

const StyleSchema = new mongoose.Schema({
    name: String, //user input
    attributes: Array, //reference beerAttr schema
}, {timestamps: true})

const style = mongoose.model('style', StyleSchema)
module.exports = style