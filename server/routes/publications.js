const express = require('express');
const router = express.Router();
const publicationsData = require('../data/publications.json');

// GET /api/publications
router.get('/', (req, res) => {
  try {
    res.json(publicationsData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching publications data' });
  }
});

// GET /api/publications/:id
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    // Search in all publication categories
    const allPublications = [
      ...publicationsData.publications.published,
      ...publicationsData.publications.submitted,
      ...publicationsData.publications.inProgress
    ];
    
    const publication = allPublications.find(p => p.id === id);
    
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }
    
    res.json(publication);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching publication data' });
  }
});

// GET /api/publications/stats
router.get('/stats', (req, res) => {
  try {
    res.json(publicationsData.stats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching publication stats' });
  }
});

module.exports = router;