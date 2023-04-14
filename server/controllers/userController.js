const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const login = async (req, res) => {
    let user
    try {
        user = await User.findOne({ mobile_no: req.body.user.mobile })
    } catch (error) {
        return res.status(404)
    }
    const password = user.password
    if (bcrypt.compare(req.body.user.password, password)) {
        return res.json(user)
    }
    else {
        return res.send("wrong password")
    }
};
const register = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.user.password, salt)
    let user
    try {
        user = await User.create({ ...req.body.user, password })
    }
    catch (error) {
        return res.status(500)
    }
    return res.json(user)
}
const getMyProfile = async (req, res) => {
    let tournaments
    try {
        tournaments = await User.findOne({ _id: req.body.id }).populate("tournaments_Hosted").populate("participated_tournaments")
    } catch (error) {
        console.log(error)
        return
    }
    return res.json(tournaments)
}
const verifyUser = async (req, res) => {
    if (req.body.id) {
        let user
        try {
            user = await User.findOne({ _id: req.body.id })
        } catch (error) {
            console.log(error)
        }
        if (user) {
            console.log(user)
            res.json(user)
        }
        else {
            res.json("not found")
        }
    }
}
module.exports = { login, register, getMyProfile, verifyUser }
