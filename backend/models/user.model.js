const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Define user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});


// Encrypt Password

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        next()
    }

    try {
        const salt = await bcrypt.genSalt(5)
        const hashPass = await bcrypt.hash(user.password, salt)
        console.log(hashPass);
        user.password = hashPass;
    } catch (error) {
        next(error);
    }
});

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_TOKEN, {
            expiresIn: '30d'
        }
        )
    } catch (error) {
        console.error(error);
    }
};

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
