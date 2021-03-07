const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


// User Schema
const userSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
})

userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified(`password`)) return next()
    bcrypt.hash(user.password, 8, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        return callback(null, isMatch)
    })
}

userSchema.methods.withoutPassword = function() {
    const user = this.toObject();
    delete user.password
    return user
}

module.exports = mongoose.model('User', userSchema);