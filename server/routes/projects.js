const express = require('express');
const router = express.Router();
const projectsData = require('../data/projects.json');

// GET /api/projects
router.get('/', (req, res) => {
  try {
    res.json(projectsData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects data' });
  }
});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const project = projectsData.projects.find(p => p.id === id) || 
                   (projectsData.featured.id === id ? projectsData.featured : null);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project data' });
  }
});

module.exports = router;