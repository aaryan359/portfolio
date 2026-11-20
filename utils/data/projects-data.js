const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const projects = [
  {
    "id": 1,
    "slug": "xpresspp",
    "name": "Xpress++",
    "tagline": "Express-style C++ web framework on top of Drogon",
    "description": "An Express-style C++20 web framework built on Drogon, with a header-only core and an xp CLI for scaffolding, builds, development reloads, and dependency checks.",
    "role": "Backend Developer",
    "duration": "3 months",
    "team": "Solo",
    "status": "Completed",
    "problem": [
      "Drogon is extremely fast but has complex API",
      "Too much boilerplate for simple routes",
      "Hard for developers to adopt Drogon"
    ],
    "solution": [
      "Wrapped Drogon with request, response, and routing helpers.",
      "Built an xp CLI for project creation, code generation, builds, and dependency diagnostics.",
      "Added composable middleware and centralized typed HTTP error handling."
    ],
    "features": [
      "Express-style routes and route groups",
      "CLI scaffolding and development reloads",
      "CORS, rate limiting, and security middleware",
      "Typed HTTP errors and JSON responses"
    ],
    "techStack": [
      "C++20",
      "Drogon",
      "CMake",
      "jsoncpp"
    ],
    "impact": [
      "Made common HTTP handlers concise through an Express-style API.",
      "Packaged a header-only framework with scaffolded example applications.",
      "Documented routing, configuration, middleware, and error handling."
    ],
    "futurePlans": [
      "Expand examples and framework documentation",
      "Extend middleware integrations",
      "Explore WebSocket support"
    ],
    "images": [
      "/image/projects/xpresspp-0.webp"
    ],
    "liveUrl": null,
    "githubUrl": "https://github.com/aaryan359/xpresspp",
    "sourceUrl": "https://github.com/aaryan359/xpresspp/blob/main/README.md",
    "imageAlt": "Coding photograph illustrating the Xpress++ C++ framework"
  },
  {
    "id": 2,
    "slug": "open-course",
    "name": "Open Course",
    "tagline": "Crowdsourced learning platform for collaborative education",
    "description": "A community-driven React learning interface where people can create, expand, and improve courses together. Includes exploration and contribution views, with backend services and moderation planned.",
    "role": "Frontend Developer",
    "duration": "3 months",
    "team": "Solo",
    "status": "In development",
    "problem": [
      "Learning resources are scattered across platforms",
      "Students cannot easily contribute to course content",
      "No unified system for expanding existing courses"
    ],
    "solution": [
      "Built reusable React components for course exploration and contribution.",
      "Designed a responsive learning interface with Tailwind CSS.",
      "Outlined backend authentication and contribution moderation as next steps."
    ],
    "features": [
      "Community course contribution interface",
      "Course exploration views",
      "Responsive React components",
      "Dark learning interface"
    ],
    "techStack": [
      "React",
      "Tailwind CSS"
    ],
    "impact": [
      "Created a frontend for collaborative course discovery and contribution.",
      "Organized the interface around evolving, community-owned learning resources.",
      "Kept planned backend work distinct from the current frontend."
    ],
    "futurePlans": [
      "Build the Node.js API",
      "Add authentication and authorization",
      "Implement contribution review and moderation"
    ],
    "images": [
      "/image/projects/open-course-0.webp",
      "/image/projects/open-course-1.webp",
      "/image/projects/open-course-2.webp"
    ],
    "liveUrl": "https://opencoursem.netlify.app/",
    "githubUrl": "https://github.com/aaryan359/opencourse",
    "sourceUrl": "https://github.com/aaryan359/opencourse/blob/dev/README.md",
    "imageAlt": "Open Course project preview"
  },
  {
    "id": 3,
    "slug": "pulse",
    "name": "Pulse",
    "tagline": "Mobile-first infrastructure monitoring platform",
    "description": "A React Native and Expo app for checking server health and Docker workloads from a phone. Provides infrastructure metrics, container controls, historical charts, and configurable alerts.",
    "role": "Full Stack Developer",
    "duration": "4 months",
    "team": "Solo",
    "status": "Completed",
    "problem": [
      "Existing monitoring tools are complex and expensive",
      "Need mobile-first visibility for server metrics",
      "Secure, lightweight solution for small teams"
    ],
    "solution": [
      "Built mobile dashboards for infrastructure metrics and historical trends.",
      "Added container health views, logs, and start/stop/restart controls.",
      "Organized multi-server monitoring with JWT authentication and configurable alerts."
    ],
    "features": [
      "CPU, memory, disk, and network metrics",
      "Docker status, controls, and logs",
      "Historical charts and date ranges",
      "Multi-server views and threshold alerts"
    ],
    "techStack": [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Socket.io"
    ],
    "impact": [
      "Brought server and container health into a mobile interface.",
      "Combined metric visualization, container actions, and alert workflows.",
      "Used Redux Toolkit and RTK Query for client state and data access."
    ],
    "futurePlans": [
      "Expand monitoring integrations",
      "Improve reporting workflows",
      "Refine server comparison views"
    ],
    "images": [
      "/image/projects/pulse-0.webp",
      "/image/projects/pulse-1.webp",
      "/image/projects/pulse-2.webp"
    ],
    "liveUrl": "http://aaryan359.github.io/pulse-website/",
    "githubUrl": "https://github.com/aaryan359/pulse",
    "sourceUrl": "https://github.com/aaryan359/pulse/blob/main/README.md",
    "imageAlt": "Pulse project preview"
  },
  {
    "id": 4,
    "slug": "promptx",
    "name": "PromptX",
    "tagline": "Marketplace for AI prompts and task-based chat",
    "description": "A React Native marketplace for discovering and sharing AI prompts, paired with task-specific chat. Includes JWT and Google sign-in, prompt search and categories, and PostgreSQL persistence through Prisma.",
    "role": "Full Stack Developer",
    "duration": "4 months",
    "team": "Solo",
    "status": "Completed",
    "problem": [
      "AI prompts are scattered and hard to reuse",
      "Users struggle with prompt optimization",
      "No structured marketplace for prompts"
    ],
    "solution": [
      "Built prompt discovery with search, filtering, and category selection.",
      "Integrated task-specific system prompts and conversational context.",
      "Connected authentication, user profiles, and prompt data through an Express backend and Prisma."
    ],
    "features": [
      "Prompt search, filters, and categories",
      "Task-specific AI conversations",
      "JWT and Google authentication",
      "Profiles with liked and purchased prompts"
    ],
    "techStack": [
      "React Native",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Cloudinary",
      "Google OAuth"
    ],
    "impact": [
      "Combined reusable prompt discovery with task-specific chat.",
      "Implemented mobile authentication with JWT and Google OAuth.",
      "Modeled prompt and profile data using PostgreSQL and Prisma."
    ],
    "futurePlans": [
      "Paid prompt subscriptions",
      "Creator analytics",
      "Prompt versioning"
    ],
    "images": [
      "/image/projects/promptx-0.webp",
      "/image/projects/promptx-1.webp",
      "/image/projects/promptx-2.webp"
    ],
    "liveUrl": "https://drive.google.com/file/d/1JPOGCUPsh-abcE7WhQtILiSD1r3z8aev/view?usp=sharing",
    "githubUrl": "https://github.com/aaryan359/PromptX",
    "sourceUrl": "https://github.com/aaryan359/PromptX/blob/main/README.md",
    "imageAlt": "PromptX project preview"
  },
  {
    "id": 5,
    "slug": "quick-drop",
    "name": "Quick Drop",
    "tagline": "Private, offline browser sidebar for notes, files, links, and tasks",
    "description": "A local-first Chrome sidebar extension for dropping files, saving links and snippets, writing autosaved notes, and managing a task checklist. Data stays in local extension storage without cloud sync.",
    "role": "Full Stack Developer",
    "duration": "1.5 months",
    "team": "Solo",
    "status": "Completed",
    "problem": [
      "Switching tabs interrupts note-taking and quick capture.",
      "Temporary files, links, and snippets get scattered.",
      "Quick capture should work without a cloud account."
    ],
    "solution": [
      "Built a browser sidebar with a file drop zone and link capture.",
      "Added persistent scratchpad notes and a session task checklist.",
      "Kept extension data in local Chrome storage with light and dark themes."
    ],
    "features": [
      "Drag-and-drop file capture",
      "Autosaved scratchpad notes",
      "Links, text, and code snippets",
      "Offline tasks and light/dark themes"
    ],
    "techStack": [
      "React",
      "Vite",
      "Chrome Extension APIs",
      "Local Storage"
    ],
    "impact": [
      "Centralized quick capture within the active browser workflow.",
      "Kept saved data available offline in extension storage.",
      "Provided a packaged installer and GitHub Actions deployment for the landing page."
    ],
    "futurePlans": [
      "Improve search and organization",
      "Add local export and import",
      "Expand keyboard shortcuts"
    ],
    "images": [
      "/image/projects/quick-drop-0.webp",
      "/image/projects/quick-drop-1.webp",
      "/image/projects/quick-drop-2.webp"
    ],
    "liveUrl": "https://aaryan359.github.io/QuickDrop/",
    "githubUrl": "https://github.com/aaryan359/QuickDrop",
    "sourceUrl": "https://github.com/aaryan359/QuickDrop/blob/main/README.md",
    "imageAlt": "Quick Drop project preview"
  },
  {
    "id": 6,
    "slug": "every-penny",
    "name": "Every Penny",
    "tagline": "Expo personal finance app prototype",
    "description": "A React Native and Expo personal finance prototype with transaction views, income and expense entry screens, authentication flows, and profile settings. Analytics and automated transaction capture remain future work.",
    "role": "Mobile App Developer",
    "duration": "2 months",
    "team": "Solo",
    "status": "Prototype",
    "problem": [
      "Personal finance needs a clear mobile overview.",
      "Income and expense entry should be easy to reach.",
      "Account and transaction screens need consistent navigation."
    ],
    "solution": [
      "Created transaction and income/expense entry interfaces.",
      "Structured authentication, finance, and profile screens with Expo Router.",
      "Used reusable mobile UI elements and Redux state management."
    ],
    "features": [
      "Transaction overview screens",
      "Income and expense entry interface",
      "Login and registration flows",
      "Profile and account settings"
    ],
    "techStack": [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Redux Toolkit",
      "Clerk"
    ],
    "impact": [
      "Built a navigable mobile finance prototype.",
      "Practiced file-based routing and mobile authentication interfaces.",
      "Established screens for future transaction persistence and analytics."
    ],
    "futurePlans": [
      "Connect transaction entry to persistent storage",
      "Implement analytics and summaries",
      "Explore SMS-based transaction capture"
    ],
    "images": [
      "/image/projects/every-penny-0.webp",
      "/image/projects/every-penny-1.webp"
    ],
    "liveUrl": "https://drive.google.com/file/d/1WuC29NH3BPawQrvmq9vHsuShRHj5RxJ-/view",
    "githubUrl": "https://github.com/aaryan359/EveryPenny-1",
    "sourceUrl": "https://github.com/aaryan359/EveryPenny-1/blob/main/README.md",
    "imageAlt": "Every Penny project preview"
  },
  {
    "id": 7,
    "slug": "vehicle-rental-app",
    "name": "GoAmigo — Vehicle Rental App",
    "tagline": "Effortless vehicle renting and invoicing",
    "description": "A mobile vehicle rental project with booking flows, automated invoice generation, customer management, and an admin dashboard for rental operations.",
    "role": "Full Stack Developer",
    "duration": "3 months",
    "team": "Small Team",
    "status": "Completed",
    "problem": [
      "Manual vehicle rental tracking",
      "Inefficient invoice generation",
      "No centralized admin dashboard"
    ],
    "solution": [
      "Built mobile vehicle listing and booking flows.",
      "Added invoice generation and customer management workflows.",
      "Centralized rental operations in an admin dashboard."
    ],
    "features": [
      "Vehicle listing and booking",
      "Automated invoicing",
      "Admin dashboard",
      "Customer management"
    ],
    "techStack": [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript"
    ],
    "impact": [
      "Brought booking, customer, and invoice workflows into one application.",
      "Gained experience building mobile interfaces for rental operations.",
      "Connected customer-facing flows with administrative tools."
    ],
    "futurePlans": [
      "Online payments",
      "Customer ratings",
      "Fleet analytics"
    ],
    "images": [
      "/image/projects/vehicle-rental-app-0.webp",
      "/image/projects/vehicle-rental-app-1.webp",
      "/image/projects/vehicle-rental-app-2.webp"
    ],
    "liveUrl": "https://drive.google.com/file/d/1IvF-0Cptd6FGrzVFFltJM4fRZiqYPKij/view",
    "githubUrl": "https://github.com/aaryan359/GoAmigo-Admin-Frontend",
    "sourceUrl": null,
    "imageAlt": "GoAmigo — Vehicle Rental App project preview"
  },
  {
    "id": 8,
    "slug": "driveshare",
    "name": "DriveShare",
    "tagline": "P2P storage console and transfer simulator",
    "description": "A React and TypeScript console for a decentralized storage concept aimed at Indian users. Includes storage telemetry, node lease views, a WASM/WebRTC transfer simulation, bucket management, and simulated INR wallet billing.",
    "role": "Full Stack Developer",
    "duration": "4 months",
    "team": "Solo",
    "status": "Prototype",
    "problem": [
      "Decentralized storage workflows are difficult to inspect.",
      "Users need visibility into capacity, node leases, and storage buckets.",
      "A storage console needs clear transfer and billing feedback."
    ],
    "solution": [
      "Built a modular console with shared UI and TypeScript models.",
      "Visualized the proposed sharding and P2P transfer lifecycle in a simulator.",
      "Added bucket management, node lease views, and simulated wallet payments."
    ],
    "features": [
      "Storage telemetry and node lease views",
      "WASM/WebRTC transfer simulation",
      "Bucket management interface",
      "Simulated INR wallet and billing"
    ],
    "techStack": [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Vite"
    ],
    "impact": [
      "Made a proposed P2P storage workflow inspectable through a client console.",
      "Organized the frontend into application, UI, and shared-model packages.",
      "Prototyped INR billing and storage management interactions."
    ],
    "futurePlans": [
      "Integrate real storage nodes and transfer services",
      "Replace simulated billing with a payment backend",
      "Validate encryption, recovery, and regional storage guarantees"
    ],
    "images": [
      "/image/projects/driveshare-0.webp"
    ],
    "liveUrl": null,
    "githubUrl": "https://github.com/aaryan359/driveShare",
    "sourceUrl": "https://github.com/aaryan359/driveShare/blob/main/README.md",
    "imageAlt": "DriveShare project preview"
  },
  {
    "id": 9,
    "slug": "pdf-chat-rag",
    "name": "PDF Chat RAG",
    "tagline": "Production-ready PDF document Q&A workspace",
    "description": "A PDF question-answering workspace with asynchronous BullMQ ingestion, Redis queues, Qdrant vector search, and streaming chat. Answers expose source snippets and similarity scores for the selected document.",
    "role": "Full Stack Developer",
    "duration": "2 months",
    "team": "Solo",
    "status": "Completed",
    "problem": [
      "Existing PDF chat apps mix ingestion and chat in one path",
      "No clear document processing states",
      "Retrieval evidence is hidden from users"
    ],
    "solution": [
      "Separated PDF ingestion workers from API and chat request paths.",
      "Generated chunk embeddings and indexed document-scoped vectors in Qdrant.",
      "Streamed grounded answers with source snippets and similarity metadata."
    ],
    "features": [
      "Multi-PDF upload and background indexing",
      "Queued, processing, ready, and failed states",
      "Document-scoped vector retrieval",
      "Streaming answers with source evidence",
      "Configurable top-K retrieval"
    ],
    "techStack": [
      "Next.js",
      "Express",
      "BullMQ",
      "Redis",
      "Qdrant",
      "Gemini",
      "Docker"
    ],
    "impact": [
      "Kept document processing separate from interactive chat.",
      "Made retrieval evidence and processing failures visible to users.",
      "Packaged the frontend, API, worker, Redis, and Qdrant with Docker Compose."
    ],
    "futurePlans": [
      "Add role-based authentication",
      "Add request tracing and queue monitoring",
      "Harden retry policies and metadata backups"
    ],
    "images": [
      "/image/projects/pdf-chat-rag-0.webp"
    ],
    "liveUrl": null,
    "githubUrl": "https://github.com/aaryan359/PDF-chat-RAG",
    "sourceUrl": "https://github.com/aaryan359/PDF-chat-RAG/blob/main/Readme.md",
    "imageAlt": "PDF Chat RAG project preview"
  }
].map((project) => ({
  ...project,
  images: project.images.map((image) => `${basePath}${image}`),
}));
