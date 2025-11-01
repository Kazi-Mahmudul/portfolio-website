const experienceData = require('../server/data/experience.json');

export default function handler(req, res) {
  try {
    res.json(experienceData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experience data' });
  }
}