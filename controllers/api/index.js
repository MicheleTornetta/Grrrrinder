const router = require('express').Router();
const dogRoutes = require('./dogRoutes');
// const meetupRoutes = require('./meetupRoutes');
// const ownerRoutes = require('./ownerRoutes');

router.use('/dogs', dogRoutes);
// router.use('/meetups', meetupRoutes);
// router.use('/owners', ownerRoutes);

module.exports = router;