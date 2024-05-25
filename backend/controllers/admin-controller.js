const User = require('../models/user.model');
const Contact = require('../models/contact.model')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: false });
        if (!users || users.length === 0) return res.status(404).json({ message: "NO user found :(  " });
        console.log(users);
        res.status(200).json(users)
    } catch (error) {
        console.log('admin get: ', errer);
    }
}

const getAllContact = async (req, res) => {
    try {
        const contact = await Contact.find();
        if (!contact) res.status(404).json({ message: 'No Data is Available :( ' });
        res.status(200).json(contact);
    } catch (error) {
        console.log('admin getcontact: ', errer);
    }
}

module.exports = { getAllUsers, getAllContact };