const educationData = require('../server/data/education.json');

export default function handler(req, res) {
  try {
    res.json({ education: educationData });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching education data' });
  }
}