const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const profileData = require('./data/profile.json');
const educationData = require('./data/education.json');
const experienceData = require('./data/experience.json');
const projectsData = require('./data/projects.json');
const certificationsData = require('./data/certifications.json');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Routes
app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

app.get('/api/education', (req, res) => {
  res.json(educationData);
});

app.get('/api/experience', (req, res) => {
  res.json(experienceData);
});

app.get('/api/projects', (req, res) => {
  res.json(projectsData);
});

app.get('/api/certifications', (req, res) => {
  res.json(certificationsData);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // In a real application, you would send an email here
  // For now, we'll just log the message
  console.log(`Contact form submission: ${name}, ${email}, ${message}`);
  
  // Simulate email sending delay
  setTimeout(() => {
    res.json({ success: true, message: 'Message received! I\'ll get back to you soon.' });
  }, 1000);
});

// Serve static files from the React app build directory
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});