const PersonController = require('../controllers/pairings.controller')
const UserController = require('../controllers/user.controller')
module.exports = (app) => {
    app.get('/api', PersonController.index)
}