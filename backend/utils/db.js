require('dotenv').config()
const mongoose = require('mongoose');
const url = process.env.DBURI;

const conndb = async () => {
    try {
        await mongoose.connect(url)
        console.log('connected.....');
    } catch (error) {
        console.error('Connection failed..');
    }
}

module.exports = conndb