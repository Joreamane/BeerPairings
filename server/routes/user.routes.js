const UserController = require('../controllers/user.controller')

module.exports = (app) => {
    app.get('/api')
    app.post('/api/register', UserController.registerUser)
    app.post('/api/login', UserController.loginUser)
    app.get('/api/users', UserController.findAllUsers)
    app.get('/api/logout', UserController.logoutUser)
}