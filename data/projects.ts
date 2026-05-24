export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role?: string;
  duration?: string;
  scope?: string[];
  problem: string;
  solution: string;
  architecture?: string[];
  technicalChallenges: string[];
  aiMlPipeline: string;
  metrics: {
    label: string;
    value: string;
  }[];
  deployment: string;
  techStack: {
    category: string;
    technologies: string[];
  }[];
  images: string[];
  architectureDiagram?: string;
  github: string;
  live: string;
  featured: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "erosionkg",
    title: "ErosionKG: GraphRAG Knowledge System",
    description: "GraphRAG-based knowledge system transforming scientific literature into structured knowledge graphs for multi-hop reasoning and semantic retrieval.",
    longDescription: "A sophisticated knowledge graph system that leverages GraphRAG architecture to transform unstructured scientific literature into structured knowledge graphs. The system enables multi-hop reasoning and semantic retrieval, significantly improving context recall and citation accuracy over traditional RAG approaches.",
    problem: "Traditional RAG systems struggle with complex scientific queries requiring multi-hop reasoning and contextual understanding across multiple documents. Vector-only retrieval often misses important relationships and fails to provide accurate citations.",
    solution: "Built a GraphRAG-based system that combines knowledge graphs with vector embeddings. The system extracts entities and relationships from scientific papers, constructs a knowledge graph, and uses hybrid retrieval (graph + vector) for semantic search and multi-hop reasoning.",
    technicalChallenges: [
      "Designing an efficient entity extraction pipeline for scientific literature",
      "Optimizing graph traversal algorithms for multi-hop reasoning",
      "Balancing retrieval precision with computational efficiency",
      "Implementing accurate citation tracking across the knowledge graph"
    ],
    aiMlPipeline: "The pipeline uses LangChain for document processing, spaCy/NER for entity extraction, Neo4j for graph storage, and hybrid retrieval combining graph traversal with vector similarity search using OpenAI embeddings.",
    metrics: [
      { label: "Context Recall Improvement", value: "+102%" },
      { label: "Citation Accuracy", value: "84.6%" },
      { label: "Retrieval Speed", value: "< 500ms" },
      { label: "Documents Processed", value: "30" }
    ],
    deployment: "Deployed on GCP with Neo4j graph database and PostgreSQL for metadata. Used Docker for containerization and FastAPI for the backend API.",
    techStack: [
      { category: "AI/ML", technologies: ["LangChain", "LangGraph", "OpenAI", "Neo4j", "Vector DB"] },
      { category: "Backend", technologies: ["FastAPI", "Python", "PostgreSQL"] },
      { category: "Infrastructure", technologies: ["GCP", "Docker", "Neo4j"] }
    ],
    images: [],
    github: "https://github.com/Kazi-Mahmudul/ErosionKG",
    live: "https://erosionkg.vercel.app",
    featured: true,
    tags: ["LLMOps", "GraphRAG", "Knowledge Graph", "RAG", "LLM", "Neo4j"]
  },
  {
    id: "finshield",
    title: "FinShield: Agentic RAG for Financial Fraud Detection",
    description: "Agentic RAG system using LangGraph with multi-database reasoning for real-time multilingual fraud analysis.",
    longDescription: "An advanced agentic RAG system designed for financial fraud detection. The system uses LangGraph to orchestrate complex reasoning across multiple databases (SQL, Neo4j, vector embeddings) to detect fraudulent patterns in real-time across multiple languages.",
    problem: "Financial fraud detection requires analyzing complex transaction patterns across multiple data sources and languages. Traditional rule-based systems lack flexibility and miss sophisticated fraud patterns.",
    solution: "Built an agentic RAG system using LangGraph that orchestrates multi-database reasoning. The system uses SQL for transaction data, Neo4j for relationship analysis, and vector embeddings for semantic pattern matching across multilingual content.",
    technicalChallenges: [
      "Designing agentic workflows for multi-database reasoning",
      "Implementing real-time fraud detection with low latency",
      "Optimizing LLM pipeline with caching and rate limiting",
      "Handling multilingual fraud analysis efficiently"
    ],
    aiMlPipeline: "Uses LangGraph for agentic orchestration, multi-database querying (SQL + Neo4j + Vector), LLM-based pattern analysis, and real-time inference pipeline with caching and rate limiting.",
    metrics: [
      { label: "Fraud Detection Accuracy", value: "94%" },
      { label: "False Positive Rate", value: "< 3%" },
      { label: "Response Time", value: "< 2s" },
      { label: "Languages Supported", value: "15+" }
    ],
    deployment: "Deployed on GCP with PostgreSQL, Neo4j, and Pinecone for vector storage. Used FastAPI with async processing for real-time analysis.",
    techStack: [
      { category: "AI/ML", technologies: ["LangGraph", "LangChain", "OpenAI", "Pinecone", "Neo4j"] },
      { category: "Backend", technologies: ["FastAPI", "Python", "PostgreSQL"] },
      { category: "Infrastructure", technologies: ["GCP", "Redis", "Docker"] }
    ],
    images: [],
    github: "https://github.com/Kazi-Mahmudul/FinShield---AgenticRAG",
    live: "https://finshield-delta.vercel.app",
    featured: true,
    tags: ["Agentic RAG", "LangGraph", "Fraud Detection", "Multi-Database", "Real-time"]
  },
  {
    id: "peyechi",
    title: "Peyechi: AI Product Recommendation System",
    description: "AI-powered smartphone recommendation platform with natural language search and personalized suggestions using RAG-based pipeline.",
    longDescription: "A comprehensive AI-powered product recommendation system for smartphones. The platform enables users to search using natural language and receive personalized recommendations based on their preferences, requirements, and budget constraints.",
    problem: "E-commerce product search often relies on keyword matching which fails to understand user intent. Users struggle to find products that match their specific needs when they don't know technical specifications.",
    solution: "Built a RAG-based recommendation pipeline with natural language understanding. The system uses vector embeddings for semantic search, collaborative filtering for personalization, and LLM-based reasoning to match user queries with product specifications.",
    technicalChallenges: [
      "Implementing semantic search for product specifications",
      "Building personalized recommendation algorithms",
      "Handling real-time recommendations at scale",
      "Optimizing cold-start problem for new users"
    ],
    aiMlPipeline: "RAG-based pipeline with FastAPI, PostgreSQL (Supabase) for product data, Redis for caching, and vector embeddings for semantic search. Uses collaborative filtering and content-based filtering for recommendations.",
    metrics: [
      { label: "Recommendation Accuracy", value: "89%" },
      { label: "User Satisfaction", value: "4.5/5" },
      { label: "Query Response Time", value: "< 300ms" },
      { label: "Products Indexed", value: "50K+" }
    ],
    deployment: "Deployed on Vercel with Supabase for database and Redis for caching. Used FastAPI for the recommendation engine.",
    techStack: [
      { category: "AI/ML", technologies: ["RAG", "Vector Search", "Collaborative Filtering", "OpenAI"] },
      { category: "Backend", technologies: ["FastAPI", "Python", "PostgreSQL", "Redis"] },
      { category: "Frontend", technologies: ["React", "Next.js", "Tailwind CSS"] },
      { category: "Infrastructure", technologies: ["Supabase", "Vercel", "Redis"] }
    ],
    images: [],
    github: "https://github.com/Kazi-Mahmudul/product-recommender-ai",
    live: "https://www.peyechi.com",
    featured: true,
    tags: ["RAG", "Recommendation System", "Vector Search", "Personalization"]
  },
  {
    id: "ai-calling-platform",
    title: "AI Outbound Calling Platform",
    description: "LLM-based outbound calling platform processing 30K+ leads with Vapi voice agents, HubSpot CRM, and Twilio integration.",
    longDescription: "A production-grade AI outbound calling platform that automates lead qualification and customer outreach. The system processed 30,000+ leads using LLM-based qualification, integrating Vapi voice agents with HubSpot CRM and Twilio for seamless communication.",
    problem: "Manual outbound calling is time-consuming and inefficient. Sales teams struggle to qualify leads at scale, resulting in wasted time on unqualified prospects.",
    solution: "Built an automated outbound calling platform using Vapi voice agents powered by LLMs for lead qualification. Integrated with HubSpot CRM for lead management and Twilio for voice communication, enabling automated, personalized outreach at scale.",
    technicalChallenges: [
      "Designing LLM-based lead qualification logic",
      "Integrating voice agents with CRM systems",
      "Handling high-volume concurrent calls",
      "Ensuring compliance and call quality"
    ],
    aiMlPipeline: "Uses Vapi voice agents with GPT-4 for natural conversations, HubSpot CRM integration for lead data, and Twilio for voice infrastructure. LLM-based scoring for lead qualification.",
    metrics: [
      { label: "Leads Processed", value: "30K+" },
      { label: "Qualification Accuracy", value: "87%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Client Ratings", value: "5/5 (2x)" }
    ],
    deployment: "Deployed on GCP with n8n for workflow orchestration on VPS with Docker. Integrated with HubSpot CRM and Twilio APIs.",
    techStack: [
      { category: "AI/ML", technologies: ["LLM", "Vapi", "GPT-4", "Voice AI"] },
      { category: "Integration", technologies: ["HubSpot", "Twilio", "n8n"] },
      { category: "Infrastructure", technologies: ["GCP", "Docker", "VPS"] }
    ],
    images: [],
    github: "https://github.com/Kazi-Mahmudul/AI-Outbound-VoiceCall-Agent",
    featured: true,
    tags: ["Voice AI", "Automation", "CRM Integration", "LLM"]
  },
  {
    id: "data-pipeline",
    title: "Multi-Source Data Pipeline",
    description: "High-volume data pipeline ingesting POS system data with real-time transformation, deduplication, and REST API integration.",
    longDescription: "A robust multi-source data pipeline designed to ingest and process data from POS systems. The pipeline performs real-time transformation, deduplication, and integrates with REST APIs for downstream applications.",
    problem: "Businesses struggle with data silos and inconsistent data from multiple POS systems. Manual data processing is error-prone and cannot handle real-time requirements.",
    solution: "Built an automated data pipeline that ingests data from multiple POS sources, performs real-time transformation and deduplication, and exposes cleaned data through REST APIs for downstream consumption.",
    technicalChallenges: [
      "Handling heterogeneous data formats from multiple POS systems",
      "Implementing real-time data transformation",
      "Building efficient deduplication algorithms",
      "Ensuring data consistency and reliability"
    ],
    aiMlPipeline: "Uses n8n for workflow orchestration, custom Python scripts for transformation, and PostgreSQL for data storage. Implements ML-based deduplication using similarity matching.",
    metrics: [
      { label: "Data Sources", value: "5+" },
      { label: "Processing Speed", value: "1M+ records/day" },
      { label: "Deduplication Accuracy", value: "96%" },
      { label: "Uptime", value: "99.9%" }
    ],
    deployment: "Deployed on VPS with Docker using n8n for workflow orchestration. PostgreSQL for data storage with REST API endpoints.",
    techStack: [
      { category: "Pipeline", technologies: ["n8n", "Python", "Docker"] },
      { category: "Database", technologies: ["PostgreSQL", "Redis"] },
      { category: "Infrastructure", technologies: ["VPS", "Docker", "REST API"] }
    ],
    images: [],
    github: "https://github.com/Kazi-Mahmudul",
    live: "https://github.com/Kazi-Mahmudul",
    featured: false,
    tags: ["Data Pipeline", "ETL", "Automation", "Real-time"]
  }
];
