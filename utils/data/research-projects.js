export const researchProjects = [
  {
    id: 1,
    title: "Automated SMS Financial Parser with Embedded NLP",
    tagline: "High-accuracy, lightweight text classification for financial logs",
    description: "Designed and implemented a parsing pipeline that extracts transaction metadata from bank SMS notifications. Utilized lightweight NLP models optimized for mobile environments to perform real-time classification, entity extraction, and automated expense tagging.",
    institution: "ABV-IIITM Gwalior",
    duration: "Jan 2025 - May 2025",
    role: "Lead Researcher",
    techStack: ["Python", "PyTorch", "ONNX", "Regex", "TypeScript"],
    highlights: [
      "Achieved 96.4% classification accuracy across unstructured SMS formats",
      "Optimized parser latency to under 15ms for on-device inference",
      "Integrated successfully with mobile expense tracking applications"
    ],
    githubUrl: "https://github.com/aaryan359/EveryPenny-1"
  },
  {
    id: 2,
    title: "Collaborative Learning Platform Architectures",
    tagline: "Scaling crowdsourced educational curricula via graph representation",
    description: "Researched architectural models for open-source crowdsourced learning. Modeled course curricula as directed acyclic graphs (DAGs) to enable community members to collaboratively expand, branch, and merge educational modules without breaking structural dependencies.",
    institution: "ABV-IIITM Gwalior",
    duration: "Oct 2024 - Dec 2024",
    role: "Graduate Researcher",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    highlights: [
      "Designed DAG-based lesson traversal algorithm for dynamic course mapping",
      "Conducted load testing on nested MongoDB schema representations",
      "Drafted open contribution flow to scale peer-to-peer lesson validations"
    ],
    githubUrl: "https://github.com/aaryan359/opencoursefrontend"
  }
];
