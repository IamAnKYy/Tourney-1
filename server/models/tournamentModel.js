const mongoose  = require("mongoose")
const tournamentSchema = new mongoose.Schema({
curr_game_name:{
    type :String ,
    required : true
},
curr_tournament_name : {
    type :String ,
    required : true
} ,
organiser_name:{
    type :String ,
    required : true
},
start_date:{
    type :String ,
    required : true
},
// end_date : {
//     type :String ,
//     required : true
// },
prize : {
    type :Number ,
    required : true
},
currency : {
    type :String ,
    required : true
},
participated_teams: [],
won_by:Array,
maximumMembers:{
    type :Number ,
    required : true
},
maximumTeams:{
    type :Number ,
    required : true
},
registrationDuration:{
    type :String ,
    required : true
},
})
module.exports = mongoose.model("Tournament" , tournamentSchema)