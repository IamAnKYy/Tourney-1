const express = require('express'); 
const router  = express.Router(); 
const userController = require('../controllers/userController'); 
router.post('/register', userController.register); 
router.post('/login', userController.login); 
router.post('/verifyUser', userController.verifyUser); 
router.post('/getMyProfile', userController.getMyProfile); 
module.exports = router;
