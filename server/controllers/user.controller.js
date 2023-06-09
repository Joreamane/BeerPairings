const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.FIRST_SECRET_KEY

module.exports = {
    registerUser: async (req,res) => {
        try{
            const newUser = await User.create(req.body)
            const userToken = jwt.sign({_id:newUser._id, email:newUser.email}, SECRET)
            res.status(201).cookie('userToken', userToken, {httpOnly:true,expires:new Date(Date.now() + 90000)}).json({User: newUser})
        }
        catch(error){
            res.status(400).json(error)
        }
    },
    loginUser: async (req,res) => {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            res.status(400).json({error:"Invalid email/password"})
        }
        try{
            const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
            if(!isPasswordValid){
                res.status(400).json({error:"Invalid email/password"})
            } else {
                const userToken = jwt.sign({_id:user._id, email:user.email}, SECRET)
                res.status(201).cookie('userToken', userToken, {httpOnly:true,expires:new Date(Date.now() + 90000)}).json({User: user})
            }
        } catch{
            res.status(400).json({error:"Invalid email/password"})
        }
    },
    logoutUser: (req,res) => {
        res.clearCookie('userToken')
        res.json({success: 'User logged out'})
    },
    findAllUsers: (req,res) => {
        User.find()
            .then((allUsers) => {
                res.json({users: allUsers})
            })
            .catch((err => {
                res.json({message: 'Something went wrong', error: err})
            }))
    },
    findOneUser: (req,res) => {
        User.findById({_id: req.params._id})
            .then((singleUser) => {
                res.json({user:singleuser})
            })
            .catch((err) => {
                res.json({message:'Something went wrong', error:err})
            })
    }
}
