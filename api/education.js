export default function handler(req, res) {
  try {
    const educationData = {
      education: [
        {
          id: "varendra-university",
          degree: "B.Sc. in Computer Science & Engineering",
          institution: "Varendra University",
          duration: "Jan 2022 - Jan 2026",
          cgpa: "3.95/4.00",
          description:
            "As a 4th-year Computer Science student, I am working on a thesis in Data Science & Machine Learning applications. I have published 2 research papers in IEEE international conferences, including work on autism detection using enhanced MobileNetV1 and plant disease detection using deep learning models.",
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
    
    res.json(educationData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching education data' });
  }
}