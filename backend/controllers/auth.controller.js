const e = require("express");

const login = async (req, res) => {
    try {
        res.send("Login controller through router");
    } catch (error) {
        res.send(error)
    }
}

const register = async (req, res) => {
    try {
        res.status(200).send('Register controller through router');
    } catch (error) {
        res.send(error);
    }
}

const home = async(req, res) => {
    try {
        res.send('This is Home Page.');
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { login, register, home };