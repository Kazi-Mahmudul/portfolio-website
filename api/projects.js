const projectsData = require('../server/data/projects.json');

export default function handler(req, res) {
  try {
    res.json(projectsData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects data' });
  }
}