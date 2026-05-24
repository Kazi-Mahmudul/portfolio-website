export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  doi?: string;
  url?: string;
  abstract?: string;
}

export const publications: Publication[] = [
  {
    id: "autism-detection-2025",
    title: "Enhanced MobileNetV1 for early autism detection: A transfer learning approach using facial imagery",
    authors: [
      "Kazi Mahmudul Hasan",
      "Md. Fatin Nibbrash Nakib",
      "Md. Musfiqur Rahman Mridha",
      "et al."
    ],
    venue: "2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN 2025)",
    date: "July 31 - August 2, 2025",
    doi: "10.1109/QPAIN66474.2025.11172046",
    url: "https://doi.org/10.1109/QPAIN66474.2025.11172046",
    abstract: "This paper presents an enhanced MobileNetV1 architecture for early autism detection using facial imagery. The proposed transfer learning approach achieves high accuracy while maintaining computational efficiency, making it suitable for real-time applications."
  }
];
