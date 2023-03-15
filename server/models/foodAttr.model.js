const mongoose = require('mongoose')

const FoodAttrSchema = new mongoose.Schema({
    name: String
}, {timestamps: true})

const foodAttr = mongoose.model('foodAttr', FoodAttrSchema)
module.exports = foodAttr