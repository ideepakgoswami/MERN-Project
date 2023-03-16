//REQUIRE
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//USER SCHEMA
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requires: true
    },
    email: {
        type: String,
        requires: true
    },
    phone: {
        type: Number,
        requires: true
    },
    work: {
        type: String,
        requires: true
    },
    password: {
        type: String,
        requires: true
    },
    cpassword: {
        type: String,
        requires: true
    },
    tokens: [
        {
            token: {
                type: String,
                requires: true
            }
        }
    ]
})

//PASSWORD HASHING
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next();
})

//generatetoken
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token;
    } catch (error) {
        console.log(error)
    }
}

//USER MODEL
const User = mongoose.model('USER', userSchema)

//EXPORTS
module.exports = User