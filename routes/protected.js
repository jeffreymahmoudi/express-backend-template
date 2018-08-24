'use strict';

const express = require('express');
const passport = require('passport');

const router = express.Router();

// Protect endpoints using JWT Strategy
router.use('/', passport.authenticate('jwt', { session: false, failWithError: true }));

router.get('/', (req, res, next) => {
  res.json({ data: 'Protected data route.' });
});

module.exports = router;
