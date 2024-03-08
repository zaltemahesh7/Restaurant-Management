const User = require('../models/user.model');
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // console.log(username, password);

        // Check for Existing User.
        let userdb = await User.findOne({ username: username });

        // console.log(userdb.password);
        if (userdb) {
            const isPasswordValid = await bcrypt.compare(password, userdb.password);
            // console.log(isPasswordValid);
            if (!isPasswordValid) {
                console.log('Not Exist');
                return res.status(401).json({ message: 'Invalid username or password 18' });
            }

            console.log("Existing User");
            res.send({ msg: 'User Exist' })
        } else {
            console.log('Not Exist');
            res.status(401).json({ message: 'Invalid username or password 25' });
        }

        // res.send("Login controller through router");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const register = async (req, res) => {
    try {
        const { username, email, phone, password, isAdmin } = req.body;

        let userdb = await User.findOne({ email: email });

        // Check for Existing User.
        if (userdb) {
            console.log("Existing User");
            res.send({ msg: 'User Exist' })
        }

        // Take a Look of BCRYPTJS for more Understanding.

        // console.log(hashPass);

        // Creating New user.
        else {

            const user = await User.create({ username: username, email, phone, password, isAdmin })
            console.log({ Success: user });
            res.status(201).json({ msg: user, token: await user.generateToken(), userId: user._id.toString() })
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "error at Registration", error })
    }
}

const home = async (req, res) => {
    try {
        res.send('This is Home Page.');
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { login, register, home };