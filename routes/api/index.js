//collecting the packaged group of API endpoints and prefixing them with the path /api
const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/api/users', userRoutes); //FIXED THIS! YEAH

module.exports = router;