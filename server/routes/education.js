const express = require("express");
const router = express.Router();

const educationData = {
  education: [
    {
      id: "varendra-university",
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Varendra University",
      duration: "Jan 2022 - Jan 2026",
      cgpa: "3.95/4.00",
      description:
        "As a 4th-year Computer Science student, I am working on a thesis in Data Science & Machine Learning applications. I have published 2 research papers in IEEE international conferences, working on more.",
      achievements: [
        "Published 2 research papers in IEEE international conferences",
        "Served as Class Representative (CR)",
        "Additional research papers under review at international venues",
        "Active member of the Research Club",
        "Participated in tech events showcasing software projects",
      ],
    },
  ],
};

// GET /api/education
router.get("/", (req, res) => {
  try {
    res.json(educationData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching education data" });
  }
});

module.exports = router;
