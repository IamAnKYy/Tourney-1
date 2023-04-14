const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    mobile_no: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    participated_tournaments:[{ 
        type: mongoose.Schema.Types.ObjectId , 
        ref: "Tournament"
}],
    tournamentHosted:[{ 
        type: mongoose.Schema.Types.ObjectId , 
        ref: "Tournament"
    }
    ],
})
module.exports = mongoose.model("User", userSchema)