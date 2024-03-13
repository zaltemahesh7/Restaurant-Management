

const validation = async function (req, res, next) {
    try {
        // password validation
        const { password } = req.body;
        console.log("Password validation");
        if(password.length < 3) res.status(403).json({msg: "password is short"})
        else next()
    } catch (error) {
        console.log(error, "varification");
        res.status(400).json({ msg: 'Error from Middleware LingthCal!!' })
    }
}

module.exports = { validation }