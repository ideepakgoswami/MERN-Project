//REQUIRE
const express = require("express");
const dotenv = require('dotenv');
const app = express();

//CONFIG
dotenv.config({ path: './.env' })
const PORT = process.env.PORT || 4000;

//IMPORTS
const { dbConn } = require('./db/conn');

//MIDDLEWARES
app.use(express.json())
app.use(require('./routes/auth'))

//ROUTES
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/contact', (req, res) => {
    res.send('Contact')
})

app.get('/signin', (req, res) => {
    res.send('welcome')
})

app.get('/signout', (req, res) => {
    res.send('welcome')
})

//SERVER LISTENING
const start = async () => {
    try {
        await dbConn();
        app.listen(PORT, () => {
            console.log(`server is listening on port no. : ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};

start();