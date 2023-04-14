const express = require('express'); 
const router  = express.Router(); 
const tournamentController = require('../controllers/tournamentController'); 
router.post('/createTournament', tournamentController.createTournament); 
router.post('/getTournamentById', tournamentController.getTournamentById); 
router.post('/getTournamentByKeyword', tournamentController.getTournamentByKeyword); 
router.get('/getAllTournaments', tournamentController.getAllTournaments); 
router.post('/tournamentRegistration', tournamentController.tournamentRegistration); 
module.exports = router; // export to use in server.js
