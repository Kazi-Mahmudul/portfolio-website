const profileData = require('../server/data/profile.json');

export default function handler(req, res) {
  try {
    res.json(profileData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile data' });
  }
}