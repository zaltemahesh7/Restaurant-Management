const contactModel = require('../models/contact.model');

const contact = async (req, res) => {
    try {
        
    const {name, email, message} = req.body;

    await contactModel.create({name, email, message});
    return res.status(200).json({msg: 'Message send successfully :) !!'})
    } catch (error) {
        console.log(error);
        return res.status(403).json({msg: 'Error sending Message :( !!', error})
    }
};

module.exports = contact;