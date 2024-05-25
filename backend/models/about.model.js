const { text } = require('express')
const mongoose = require('mongoose')

const aboutShema = new mongoose.Schema({
    img: String,
    desc: text
});

const About = monde.Schema('About', aboutShema);
module