const publicationsData = require('../server/data/publications.json');

export default function handler(req, res) {
  try {
    res.json(publicationsData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching publications data' });
  }
}