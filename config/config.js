const mongoose = require('mongoose');

require("dotenv").config();

const connect = async (connectionString) => {
    try {
        mongoose.connect(connectionString);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
}


const startConnection = async (listenPort) => {
    try {
        const connectionString = process.env.MONGODB_URI;
        await connect(connectionString);
    } catch (error) { 
        console.log(error);
    }

}

module.exports = {
    startConnection
}