const Food = require('../models/food.model')
const FoodAttribute = require('../models/foodAttr.model')

module.exports = {
    addFood: async (req,res) => {
        try{
            const newFood = await Food.create(req.body)
            res.json(newFood)
        } catch(err) {
            res.status(400).json(err)
        }
    },

    getAllFoods: (res) => {
        Food.find({})
            .then(allFoods => res.json(allFoods))
            .catch(err => res.status(400).json(err))
    },

    getOneFood: (req,res) => {
        Food.findById(req.params.id)
            .then(oneFood => res.json(oneFood))
            .catch(err => res.status(400).json(err))
    },

    updateFood: (req,res) => {
        Food.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
            .then(updatedFood => res.json(updatedFood))
            .catch(err => res.status(400).json(err))
    }
}