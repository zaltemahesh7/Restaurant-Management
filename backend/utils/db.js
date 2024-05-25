require('dotenv').config()
const mongoose = require('mongoose');
const url = process.env.DBURI;

const conndb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/MyDB')
        console.log('connected.....');
    } catch (error) {
        console.error('Connection failed..');
    }
}

module.exports = conndb