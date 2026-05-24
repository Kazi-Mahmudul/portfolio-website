export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skills: SkillCategory[] = [
  {
    category: "Core Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
    icon: "code"
  },
  {
    category: "Applied AI Engineering",
    skills: ["LLM Applications", "RAG", "GraphRAG", "Agentic Workflows", "Prompt Engineering", "Evaluation and Guardrails", "Model Integration"],
    icon: "brain"
  },
  {
    category: "Frameworks and Tooling",
    skills: ["LangChain", "LangGraph", "LlamaIndex", "FastAPI", "PyTorch", "Scikit-learn", "n8n"],
    icon: "layers"
  },
  {
    category: "Data and Retrieval",
    skills: ["PostgreSQL", "Neo4j", "Vector Databases", "Redis", "Supabase", "Data Modeling"],
    icon: "database"
  },
  {
    category: "Platform and Integration",
    skills: ["Docker", "GCP", "GitHub Actions", "CI/CD", "Vapi", "HubSpot", "Twilio", "REST APIs"],
    icon: "cloud"
  }
];
