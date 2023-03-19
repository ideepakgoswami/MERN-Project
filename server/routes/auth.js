//REQUIRE
const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//IMPORTS
const User = require('../models/userSchema')

//ROUTES
//home
router.get('/', (req, res) => {
    res.send('welcome')
})

//registeration
router.post('/register', async (req, res) => {
    try {
        const { name, email, phone, work, password, cpassword } = req.body;
        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.status(422).json({ error: "Kindly fill all the the fields" })
        }
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" })
        }
        else if (password != cpassword) {
            res.status(422).json({
                message: "Password doesn't match with confirm password"
            })
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword })
            await user.save()
            res.status(201).json({ message: "User registered successfully" })
        }
    } catch (error) {
        console.log(error)
    }
});


//sign in
router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    if (!email && !password) {
        return res.status(422).json({ error: "Kindly fill all the the fields" })
    }
    try {
        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            //JWT
            const token = await userLogin.generateAuthToken()
            console.log(token)
            res.cookie('jwt', token, {
                maxAge: 2 * 60 * 60 * 1000, httpOnly: true
            })
            //JWT

            if (!isMatch) {
                res.status(400).json({
                    message: "Invalid Credentials"
                })
            }
            else {
                res.status(200).json({
                    message: "User Sign In Successfully"
                })
            }
        }
        else {
            res.status(400).json({
                message: "Invalid Credentials"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

//EXPORTS
module.exports = router