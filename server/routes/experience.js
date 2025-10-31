const express = require("express");
const router = express.Router();

const experienceData = {
  experience: [
    {
      id: "tutor-freelance",
      title: "Mathematics and Science Tutor",
      company: "Freelance",
      type: "Remote & On-site",
      duration: "Jan 2022 - Present",
      description:
        "Providing personalized tutoring services with a focus on problem-solving and conceptual clarity. Currently tutoring students internationally, including students in the Netherlands, using virtual tools for interactive and engaging learning experiences.",
      achievements: [
        "Improved student performance and exam results through tailored teaching methods",
        "Developed virtual learning strategies for remote international tutoring",
        "Tutored students across different grade levels and science faculty subjects",
        "Enhanced student understanding and confidence in complex mathematical concepts",
      ],
      skills: [
        "Communication",
        "Mentorship",
        "Time Management",
        "Leadership",
        "Adaptability",
        "Remote Teaching",
      ],
    },
    {
      id: "sasthotech-qa",
      title: "SQA Tester",
      company: "Sasthotech",
      type: "Contract · On-site",
      duration: "Sep 2024 - Dec 2024 (4 months)",
      description:
        "Led comprehensive quality assurance testing for a Hospital Management System, ensuring system reliability and user experience optimization in healthcare IT environment.",
      achievements: [
        "Identified and documented 50+ critical bugs, improving system stability",
        "Collaborated with cross-functional teams to troubleshoot complex system issues",
        "Developed comprehensive technical documentation and test cases",
        "Enhanced system usability through rigorous UI/UX testing protocols",
      ],
      skills: [
        "Manual Testing",
        "Healthcare IT Systems",
        "Quality Assurance",
        "Cross-functional Collaboration",
        "Problem Solving",
        "Technical Documentation",
      ],
    },
  ],
};

// GET /api/experience
router.get("/", (req, res) => {
  try {
    res.json(experienceData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching experience data" });
  }
});

module.exports = router;
