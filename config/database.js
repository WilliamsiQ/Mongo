const mongoose = require('mongoose');
const {config} = require('dotenv');

config()

async function connect() {
    try{
        mongoose.connect(uri || Process.env.MONGO_DB_LOCAL)
        console.log("connected to MongoDB")
    } catch(err) {
        console.log(err.message)

    }
}

module.exports = connect;