const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

UserSchema.pre('save', function(next) { //prehook, will run this before User is saved to the schema, then move onto the next which will be the confirm password
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

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

UserSchema.virtual('confirmPassword')  //Does not save to mongodb, just used as a temporary
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {  //prehook, to check that this runs before validations, next aspect allows us to call the next middleware or function inline, in this case the validations for email
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

const user = mongoose.model('user', UserSchema)
module.exports = user