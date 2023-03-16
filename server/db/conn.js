//REQUIRE
const mongoose = require('mongoose');

//MONGODB CONNECTION
exports.dbConn = () => {
    mongoose.connect(process.env.URI)
        .then(() => {
            console.log('db connected')
        }).catch((err) => {
            console.log('No db connection')
        })
}

