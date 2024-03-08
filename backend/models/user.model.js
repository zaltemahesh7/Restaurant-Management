const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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

})

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
