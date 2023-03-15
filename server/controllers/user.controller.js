const User = require('../models/user.model')

module.exports.registerUser = (req,res) => {
    User.create(req.body)
        .then((newUser) => {
            res.json({msg: "Success!", user: newUser})
        })
        .catch(err => res.json(err))
}