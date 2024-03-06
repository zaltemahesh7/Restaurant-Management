const mongoose = require('mongoose');
const url = 'mongodb+srv://Mahesh:y39LKs2NWUuaJtDG@cluster0.yfyid.mongodb.net/MyDB'

const conndb = async () => {
    try {
        await mongoose.connect(url)
        console.log('connected.....');
    } catch (error) {
        console.log(error);
    }
}

module.exports = conndb