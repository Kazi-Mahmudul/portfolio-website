const express = require('express');
const router = express.Router();
const profileData = require('../data/profile.json');

// GET /api/profile
router.get('/', (req, res) => {
  try {
    res.json(profileData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile data' });
  }
});

module.exports = router;