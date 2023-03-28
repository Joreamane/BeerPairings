const BeerController = require('../controllers/beer.controllers')

module.exports = (app) => {
    app.get('/api/homepage', BeerController.getAllBeers)
    app.post('/api/addBeer')
    app.post('/api/addBeer', BeerController.addBeer)
}