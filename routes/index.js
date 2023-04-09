const router = require('express').Router()
const Controller = require('../controllers')
const { authentication } = require('../middlewares')

// INDEX - TEST
router.get('/', Controller.index);


// REGISTER - DONE
router.post('/register', Controller.register);


// LOGIN - DONE
router.post('/login', Controller.login);


// GETALL DATA - DONE
router.get('/getalljobs', Controller.getAllJobs)


// GET ONE USER
router.get('/getuser', Controller.getUser)


// EDIT PROFILE - 
// router.put('/editprofile', Controller.editProfile);


// APPLY JOB - 
router.post('/applyjob', authentication, Controller.applyJob);


// GENERATE MIDTRANS TOKEN - DONE
router.post('/generate-midtrans-token', authentication, Controller.genMidtransToken);


// GET PREMIUM - DONE
router.patch('/getpremium', authentication, Controller.getPremium);


// GET HISTORY
router.get('/gethistory', authentication, Controller.getHistory)


module.exports = router