const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, {timestamps: true});

UserSchema.pre('save', async function(next) { //prehook, will run this before User is saved to the schema, then move onto the next which will be the confirm password
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        console.log('Hashed Password', hashedPassword)
        this.password = hashedPassword
        next()
    } catch {console.log('Error in save', error)}
})

// UserSchema.pre('validate', function(next) {  //prehook, to check that this runs before validations, next aspect allows us to call the next middleware or function inline, in this case the validations for email
//     if (this.password !== this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Password must match confirm password');
//     }
//     next();
// });

const User = mongoose.model('User', UserSchema)
module.exports = User