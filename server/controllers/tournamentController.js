const Tournament = require("../models/tournamentModel")
const User = require("../models/userModel")

const createTournament = async (req, res) => {
    console.log(req.body)
    let tournament
    try {
        tournament = await Tournament.create({ ...req.body.tournamentModel })
    } catch (error) {
        console.log(error)
        res.status(400)
    }
    try {
       await User.findOneAndUpdate(
            { _id: req.body.tournamentModel.organiser_name },
            { "$push": { "tournamentHosted":tournament._id } },
        )
    } catch (error) {
        console.log(error)
    }
    return res.json(tournament)
}
const getTournamentById = async (req, res) => {
    let tournament
    try {
        tournament = await Tournament.findOne({ _id: req.body.id })
    } catch (error) {
        return res.status(400)
    }
    return res.json(tournament)
}
const getTournamentByKeyword = async (req, res) => {
    console.log(req.body)
    let tournament
    try {
        tournament = await Tournament.find({ curr_game_name: req.body.keyword })
        console.log(tournament)
    } catch (error) {
        return
    }
    return res.json(tournament)
}
const getAllTournaments = async (req, res) => {
    let allTournaments
    console.log("working")
    try {
        allTournaments = await Tournament.find()
    } catch (error) {
        return
    }
    console.log(allTournaments)
    return res.json(allTournaments)

}
const getPopularTournaments = (req, res) => {
    let tournaments
    try {
        tournaments = Tournament.find({ curr_game_name: req.body.keyword })
    } catch (error) {
        return
    }
    return res.json(tournaments)
}
const tournamentRegistration = async (req, res) => {
    let tournament
    try {
        tournament = await Tournament.findOneAndUpdate(
            { _id: req.body.id },
            { "$push": { "participated_teams": req.body.team_details } },
            { new: true }
        )
    } catch (error) {
        return
    }
    try {
        for (const member in req.body.team_details.team) {
            try {
                await User.findOneAndUpdate(
                    { _id: req.body.team_details.team[member] },
                    { "$push": { "participated_tournaments": req.body.id } },
                )
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }
    return res.json(tournament)
}
module.exports = { createTournament, getTournamentById, getTournamentByKeyword, tournamentRegistration, getAllTournaments }