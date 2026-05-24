export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  highlights: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    id: "softvence",
    title: "AI Engineer",
    company: "Softvence IT Ltd",
    location: "Dhaka, Bangladesh",
    period: "July 2025 - Present",
    description: [
      "Owned end-to-end delivery of production AI systems for international clients from architecture, implementation, testing, deployment, and post-launch optimization.",
      "Engineered an LLM-driven outbound calling platform processing 30K+ leads with Vapi, HubSpot, and Twilio while maintaining quality and conversion controls.",
      "Built scalable ETL and automation pipelines integrating POS and operational systems with near real-time transformation and high data reliability.",
      "Implemented self-hosted workflow orchestration using n8n, Docker, and VPS infrastructure to improve execution reliability and reduce operational bottlenecks."
    ],
    highlights: [
      { label: "Production Systems Shipped", value: "10+" },
      { label: "Leads Processed", value: "30K+" },
      { label: "Client Feedback", value: "5/5" }
    ],
    technologies: ["LLM", "LangChain", "LangGraph", "FastAPI", "Docker", "GCP", "n8n", "HubSpot", "Twilio", "Vapi", "PostgreSQL", "Neo4j"],
    current: true
  },
  {
    id: "tutor",
    title: "Mathematics and IT Tutor",
    company: "Freelance",
    location: "Remote",
    period: "January 2022 - Present",
    description: [
      "Delivered structured mathematics and IT sessions for international (The Netherlands) students with consistent learning outcomes and positive feedback.",
      "Translated complex ideas into practical, understandable lessons that improved confidence and analytical thinking.",
      "Developed adaptive teaching plans based on each student's learning style, pace, and skill growth trajectory."
    ],
    highlights: [
      { label: "Teaching Since", value: "2022" },
      { label: "Focus Areas", value: "Math + IT" },
      { label: "Delivery Mode", value: "Remote" }
    ],
    technologies: ["Online Teaching", "Mathematics", "Problem Solving"],
    current: true
  }
];
