const certificationsData = require('../server/data/certifications.json');

export default function handler(req, res) {
  try {
    res.json(certificationsData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching certifications data' });
  }
}