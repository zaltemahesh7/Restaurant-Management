const jwt = require('jsonwebtoken');
const User = require('../models/user.model');


const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'Unauthorized HTTP, Token in not provided!..' });
    }

    const jwtToken = token.replace('Bearer', '').trim();
    console.log('token ', jwtToken);
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_TOKEN);
        // console.log("is very", isVerified);

        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });
        // console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        console.log(req.user, "auth token");
        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Unauthorized HTTP, Token in not provided!..' });
    }
};

module.exports = authMiddleware;