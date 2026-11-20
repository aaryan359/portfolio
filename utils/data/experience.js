export const experiences = [
  {
    "company": "Alchemyst AI",
    "role": "DevOps Engineer Intern",
    "start": "June 2026",
    "end": "Present",
    "location": "Remote",
    "status": "Active",
    "tools": [
      "AWS",
      "GKE",
      "Amazon EKS",
      "Kubernetes",
      "Terraform",
      "Docker",
      "CodePipeline",
      "CodeBuild",
      "Amazon ECR",
      "Probo",
      "n8n",
      "Listmonk"
    ],
    "points": [
      "Deployed self-hosted Probo, an open-source compliance platform, to manage security controls and audit evidence supporting Digital Personal Data Protection (DPDP) Act compliance efforts.",
      "Optimized Kubernetes clusters and VMs by removing unused resources and right-sizing node pools, reducing infrastructure costs by 40% while maintaining approximately 99.9% uptime.",
      "Contributed to the migration from Google Kubernetes Engine (GKE) to Amazon EKS by configuring workloads, custom VPCs, IAM roles, and GPU node groups, with infrastructure provisioned through Terraform.",
      "Built 18 CI/CD pipelines using AWS CodePipeline and CodeBuild to build Docker images, publish to Amazon ECR, and deploy to EC2 and Lambda, accelerating releases by 25%.",
      "Deployed n8n and Listmonk on VMs using Docker Compose to automate newsletter workflows and internal operations."
    ]
  },
  {
    "company": "C4GT - The Apprentice Project",
    "role": "Software Engineering Intern",
    "start": "June 2026",
    "end": "September 2026",
    "location": "Remote",
    "status": "Completed",
    "tools": [
      "Flutter",
      "Dart",
      "PWA",
      "Cloudflare Workers",
      "Cloudflare R2",
      "Hive",
      "JWT"
    ],
    "points": [
      "Developed a Flutter progressive web app (PWA) for a white-label learning platform used by 100,000+ students across 3,167 schools, secured by a Cloudflare Workers gateway (JWT, CORS, rate limiting).",
      "Eliminated up to 1.4M API requests per curriculum cycle by bundling course content (14 courses, 137 units, 5 languages) into each school’s app build and caching login data in Hive, so the app contacts the backend only when content changes.",
      "Reduced API calls by storing each unit’s video, submission, and quiz progress locally and syncing it once per unit.",
      "Cut backend load by 50% by serving precomputed weekly leaderboards from Cloudflare R2, refreshed by a nightly job."
    ]
  },
  {
    "company": "MIDAS Healthcare",
    "role": "AI Application Intern",
    "start": "May 2026",
    "end": "August 2026",
    "location": "Delhi, India (Remote)",
    "status": "Completed",
    "tools": [
      "Python",
      "FastAPI",
      "OCR",
      "Semantic Search",
      "RAG"
    ],
    "points": [
      "Extracted 692 oncology protocols from BC Cancer and normalized them to the MIDAS internal schema, achieving 98.9% coverage of 700 target protocols in the production database.",
      "Automated PDF ingestion, OCR-assisted parsing, and structured extraction from CT and radiology reports, eliminating 15 minutes of manual data entry per report.",
      "Developed a FastAPI semantic search and RAG service that matched patient records against 700+ oncology protocols and returned the top 5 recommendations."
    ]
  },
  {
    "company": "Freelance Developer",
    "role": "Fullstack & Mobile Developer",
    "start": "August 2025",
    "end": "Present",
    "location": "Remote",
    "tools": [
      "Next.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Figma"
    ],
    "points": [
      "Crafting responsive web applications and cross-platform mobile apps with pixel-perfect designs and intuitive UX.",
      "Developing modular API structures, optimizing database transactions, and implementing secure user authentication.",
      "Guiding projects from client ideation, system design, to continuous integration and cloud deployment."
    ],
    "status": "Active"
  },
  {
    "company": "ABV IIITM Gwalior",
    "role": "ML Engineer (Embedded Systems)",
    "start": "June 2025",
    "end": "July 2025",
    "location": "Gwalior, India (On-site)",
    "tools": [
      "Raspberry Pi 5",
      "Python",
      "TensorFlow Lite",
      "OpenCV",
      "Flask"
    ],
    "points": [
      "Developed and optimized resource-constrained Machine Learning models for real-time edge computing on Raspberry Pi 5.",
      "Implemented low-latency image processing pipelines using OpenCV to enable real-time detection on the hardware.",
      "Integrated edge models with local web interfaces using lightweight Python frameworks."
    ],
    "status": "Completed"
  },
  {
    "company": "Infrawave Technologies",
    "role": "React Native Developer Intern",
    "website": "https://www.infrawavesolutions.com/",
    "start": "March 2025",
    "end": "May 2025",
    "location": "Jaipur, India (Remote)",
    "tools": [
      "React Native",
      "Redux",
      "TypeScript",
      "API Caching"
    ],
    "points": [
      "Created an invoice generation system with rule-based pricing logic, tax computation, and customizable templates, cutting manual processing time by 90% and increasing billing accuracy by 30%.",
      "Optimized Redux state, API caching, lazy loading, and TypeScript components to lower app latency by 40% and deliver 2.5 times faster screen transitions."
    ],
    "status": "Completed"
  }
];
