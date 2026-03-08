export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  role: string;
  repo?: string;
  demo?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "robo-advisor",
    title: "Robo Advisor Platform",
    subtitle: "AI-powered portfolio optimization & wealth management",
    description:
      "A full-stack robo-advisor platform that delivers risk-profiled portfolios, automated rebalancing, and analytics with a production-grade Django backend and React frontend.",
    tech: [
      "Django", "DRF", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Celery", "Redis", "PyTorch"
    ],
    role:
      "Full-stack development (backend API, frontend SPA, Dockerized deployment, DRL optimization workflows, eKYC integration)",
    repo: "https://github.com/seifeldinamr99/robo-advisor"
  },
  {
    id: "ecom-analytics",
    title: "SKU Sales Summary (Ecom Analytics)",
    subtitle: "Excel-based revenue reporting for retail operations",
    description:
      "A FastAPI service that parses SKU-level Excel sales sheets, aggregates revenue by SKU/price, and exposes filtered reporting endpoints for business users.",
    tech: ["FastAPI", "SQLAlchemy", "OpenPyXL", "Python", "Docker"],
    role:
      "Backend API design, Excel data parsing, report aggregation, authentication, and deployment scripting.",
    repo: "https://github.com/seifeltohamy/ecom"
  },
  {
    id: "copilotv2",
    title: "Meta Ads Management Platform (CopilotV2)",
    subtitle: "Campaign sync, recommendations, and creative workflows for Meta ads",
    description:
      "A multi-phase ad management system that syncs campaigns, generates recommendations, and plans creative assets across Meta and Shopify integrations.",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "Redis",
      "Shopify API",
      "Meta API"
    ],
    role:
      "Architecture design, frontend + backend integration, API orchestration, planning docs, and phased feature roadmap.",
    repo: "https://github.com/seifeldinamr99/CopilotV2"
  },
  {
    id: "cis-chatbot",
    title: "CIS Faculty Chatbot",
    subtitle: "Data-driven chatbot for university information",
    description:
      "Developed a chatbot to answer student questions using curated academic handbook data and university resources.",
    tech: ["Scala", "Gemini", "Pinecone"],
    role:
      "Data extraction, knowledge base creation, and chatbot functionality implementation for improved student interaction.",
    tags: ["research", "nlp", "academic"]
  },
  {
    id: "regression-suite",
    title: "Automated Regression Testing Suite",
    subtitle: "Appium-based test automation for mobile marketplace",
    description:
      "Built an automated regression testing suite to validate features in a Flutter marketplace app and integrated it into CI pipelines.",
    tech: ["Appium", "Python", "Azure DevOps"],
    role:
      "Designed test scenarios, wrote automation scripts, and integrated tests with CI to reduce manual testing effort.",
    tags: ["qa", "automation"]
  },
  {
    id: "product-matching",
    title: "Product Matching Pipeline",
    subtitle: "Hybrid ML system for Arabic product name matching",
    description:
      "Built a pipeline combining fuzzy matching and BERT embeddings to match Arabic product names across seller catalogs, handling OCR errors and naming variations.",
    tech: ["Python", "Pandas", "Scikit-learn", "Transformers", "RapidFuzz"],
    role:
      "Designed matching algorithms using TF-IDF, fuzzy logic, and BERT embeddings for semantically accurate product linking.",
    tags: ["nlp", "data-engineering"]
  }
];
