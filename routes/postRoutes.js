const router = require('express').Router();
const {visits} = require('../controllers/postControllers')

router.post('/visits',visits)

module.exports = router;