const Beer = require('../models/beer.model')
const BeerAttribute = require('../models/beerAttr.model')
const BeerStyle = require('../models/style.model')

module.exports = {
    addBeer: async (req,res) => {
        try{
            const newBeer = await Beer.create(req.body)
            res.json(newBeer)
        } catch(err) {
            res.status(400).json(err)
        }
    },

    getAllBeers: (res) => {
        Beer.find({})
            .then(allBeers => res.json(allBeers))
            .catch(err => res.status(400).json(err))
    },

    getOneBeer: (req,res) => {
        Beer.findById(req.params.id)
            .then(oneBeer => res.json(oneBeer))
            .catch(err => res.status(400).json(err))
    },

    updateBeer: (req,res) => {
        Beer.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
            .then(updatedBeer => res.json(updatedBeer))
            .catch(err => res.status(400).json(err))
    },

    addStyle: async (req,res) => {
        try{
            const newStyle = await BeerStyle.create(req.body)
            res.json(newStyle)
        } catch(err) {
            res.status(400).json(err)
        }
    }
}