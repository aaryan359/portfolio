export const projects = [
	{
		id: 1,
		slug: "xpresspp",
		name: "Xpress++",
		tagline: "Express-style C++ web framework on top of Drogon",
		description:
			"A C++ web framework that gives you Express-style simplicity on top of Drogon — one of the fastest HTTP servers ever benchmarked. Wraps complex Drogon API in a familiar minimal interface.",

		role: "Backend Developer",
		duration: "3 months",
		team: "Solo",
		status: "Completed",

		problem: [
			"Drogon is extremely fast but has complex API",
			"Too much boilerplate for simple routes",
			"Hard for developers to adopt Drogon",
		],

		solution: [
			"Built Express-like routing interface for Drogon",
			"Added middleware support (logger, CORS, etc.)",
			"Simplified server setup with minimal code",
		],

		features: [
			"Express-style routing syntax",
			"Built-in middleware chain",
			"Path parameter support",
			"JSON response helpers",
			"One-line server bootstrapping"
		],

		techStack: [
			"C++",
			"Drogon",
		],

		impact: [
			"Reduced C++ web boilerplate by 80%",
			"Learned high-performance HTTP server internals",
			"Made Drogon accessible to more developers"
		],

		futurePlans: [
			"Add middleware ecosystem",
			"Implement WebSockets support",
			"Create template engine integration",
		],

		images: [
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/Xpresspp/xpresspp1.png?updatedAt=1751228228100",
		],
		liveUrl: "https://github.com/aaryan359/xpresspp",
		githubUrl: "https://github.com/aaryan359/xpresspp",
	},
	{
		id: 2,
		slug: "open-course",
		name: "Open Course",
		tagline: "Crowdsourced learning platform for collaborative education",
		description:
			"A crowdsourced learning platform where anyone can create or expand courses by adding videos or lessons to existing curricula.",

		role: "Frontend Developer",
		duration: "3 months",
		team: "Solo",
		status: "Completed",

		problem: [
			"Learning resources are scattered across platforms",
			"Students cannot easily contribute to course content",
			"No unified system for expanding existing courses"
		],

		solution: [
			"Built a modular course architecture",
			"Enabled user-generated lessons and videos",
			"Designed a scalable content contribution flow"
		],

		features: [
			"Course creation & expansion",
			"Video + lesson based curriculum",
			"Community-driven contributions",
			"Responsive UI for learners"
		],

		techStack: [
			"React",
			"Node.js",
			"MongoDB",
			"Redux"
		],

		impact: [
			"Improved content discoverability",
			"Enabled collaborative learning",
			"Learned scalable state management"
		],

		futurePlans: [
			"Add instructor verification",
			"Introduce course ratings",
			"Implement progress tracking"
		],

		images: [
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/OpenCourse/Screenshot%20from%202025-06-15%2017-10-31.png?updatedAt=1749987668179&tr=w-1104%2Ch-736%2Cfo-auto",
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/OpenCourse/image.png?updatedAt=1749987652155&tr=w-1104%2Ch-736%2Cfo-auto",
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/OpenCourse/Screenshot%20from%202025-06-15%2016-42-46.png?updatedAt=1749987470570&tr=w-1104%2Ch-736%2Cfo-auto",
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/OpenCourse/Screenshot%20from%202025-06-15%2016-43-07.png?updatedAt=1749987180334&tr=w-1104%2Ch-736%2Cfo-auto",
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/OpenCourse/Screenshot%20from%202025-06-15%2016-43-16.png?updatedAt=1749986793791&tr=w-1104%2Ch-736%2Cfo-auto",
		],
		liveUrl: "https://opencoursem.netlify.app/",
		githubUrl: "https://github.com/aaryan359/opencoursefrontend",
	},
	{
		id: 3,
		slug: "pulse",
		name: "Pulse",
		tagline: "Mobile-first infrastructure monitoring platform",
		description:
			"Open-source monitoring platform providing real-time visibility into Linux servers and Docker workloads through a lightweight Go agent, centralized backend, and modern client interface.",

		role: "Full Stack Developer",
		duration: "4 months",
		team: "Solo",
		status: "Completed",

		problem: [
			"Existing monitoring tools are complex and expensive",
			"Need mobile-first visibility for server metrics",
			"Secure, lightweight solution for small teams",
		],

		solution: [
			"Built lightweight Go agent for metric collection",
			"Created centralized Node.js/TypeScript backend",
			"Developed mobile-first UI for real-time monitoring",
		],

		features: [
			"CPU, memory, disk monitoring",
			"Docker container metrics",
			"Historical metrics & trends",
			"Secure API key authentication"
		],

		techStack: [
			"Go",
			"Node.js",
			"TypeScript",
			"PostgreSQL"
		],

		impact: [
			"Simplified server monitoring for teams",
			"Learned distributed system design",
			"Built production-ready agent architecture"
		],

		futurePlans: [
			"Alert notifications",
			"Custom dashboard widgets",
			"Multi-server comparison"
		],

		images: [
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/Pulse/pulse1.png?updatedAt=1751228228100",
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/Pulse/pulse2.png?updatedAt=1751228228100",
		],
		liveUrl: "http://aaryan359.github.io/pulse-website/",
		githubUrl: "https://github.com/aaryan359/pulse",
	},
	{
		id: 4,
		slug: "promptx",
		name: "PromptX",
		tagline: "Marketplace for AI prompts and task-based chat",
		description:
			"A marketplace for AI system and user prompts combined with a chatbot offering task-specific actions.",

		role: "Full Stack Developer",
		duration: "4 months",
		team: "Solo",
		status: "Completed",

		problem: [
			"AI prompts are scattered and hard to reuse",
			"Users struggle with prompt optimization",
			"No structured marketplace for prompts",
		],

		solution: [
			"Built a prompt marketplace",
			"Integrated task-based chatbot actions",
			"Implemented authentication and payments-ready architecture",
		],

		features: [
			"Prompt marketplace",
			"Task-specific chatbot buttons",
			"Google OAuth authentication",
			"Prompt categorization and search",
		],

		techStack: [
			"React Native",
			"Express",
			"Deepseek-R1",
			"Postgress",
			"Prisma",
			"Typescript",
			"Javascript",
			"Nodejs",
			"redux",
			"Redux toolkit",
			"Google-Oauth"
		],

		impact: [
			"Improved prompt reuse efficiency",
			"Hands-on experience with LLM integration",
			"Built scalable backend architecture",
		],

		futurePlans: [
			"Paid prompt subscriptions",
			"Creator analytics",
			"Prompt versioning",
		],

		images: [
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219792.png?updatedAt=1751227865413',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219783.png?updatedAt=1751227863497',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219879.png?updatedAt=1751227865815',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219821.png?updatedAt=1751227872546',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219909.png?updatedAt=1751227884738',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219929.png?updatedAt=1751227883795',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219942.png?updatedAt=1751227880693',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219936.png?updatedAt=1751227878779',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219904.png?updatedAt=1751227877873',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219869.png?updatedAt=1751227867512',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219848.png?updatedAt=1751227862689',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219798.png?updatedAt=1751227862436',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot_1751219855.png?updatedAt=1751227861938',
			'https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PromptX/Screenshot%20from%202025-06-30%2001-44-49.png?updatedAt=1751228228100'
		],
		liveUrl: "https://drive.google.com/file/d/1JPOGCUPsh-abcE7WhQtILiSD1r3z8aev/view?usp=sharing",
		githubUrl: "https://github.com/aaryan359/PromptX",
	},
	{
		id: 5,
		slug: "quick-drop",
		name: "Quick Drop",
		tagline: "Quick access notes, images, and tasks",
		description:
			"A Chrome extension that lets users quickly save images, links, notes, and manage daily tasks.",

		role: "Full Stack Developer",
		duration: "1.5 months",
		team: "Solo",
		status: "Completed",

		problem: [
			"Users lose important links and images",
			"Too many tools for simple note-taking",
			"Task tracking is fragmented",
		],

		solution: [
			"Built a lightweight Chrome extension",
			"Centralized notes, links, and images",
			"Integrated simple task management",
		],

		features: [
			"Quick image and link saving",
			"Notes and bookmarks",
			"Task management",
			"Fast and minimal UI",
		],

		techStack: [
			"React",
			"Node.js",
			"Express",
			"MongoDB",
			"TypeScript",
		],

		impact: [
			"Improved personal productivity",
			"Learned Chrome extension APIs",
			"Optimized lightweight UI performance",
		],

		futurePlans: [
			"Cloud sync",
			"Cross-device support",
			"Tag-based organization",
		],
		images: [
			'https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Quick%20Drop/Screenshot%20from%202025-08-23%2001-44-26.png?updatedAt=1756230582960',
			'https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Quick%20Drop/Screenshot%20from%202025-08-23%2001-43-51.png?updatedAt=1756230582926',
			'https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Quick%20Drop/Screenshot%20from%202025-08-23%2001-43-43.png?updatedAt=1756230582954',
			'https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Quick%20Drop/Screenshot%20from%202025-08-23%2001-44-12.png?updatedAt=1756230582890'
		],
		liveUrl: "https://github.com/aaryan359/QuickDrop",
		githubUrl: "https://github.com/aaryan359/QuickDrop",
	},
	{
		id: 6,
		slug: "every-penny",
		name: "Every Penny",
		tagline: "Smart expense tracking via SMS & custom labels",
		description:
			"A mobile app built with Expo that extracts transaction details from SMS and allows users to label expenses at payment time.",

		role: "Mobile App Developer",
		duration: "2 months",
		team: "Solo",
		status: "Completed",

		problem: [
			"Users forget where money is spent",
			"Bank apps lack contextual labeling",
			"Manual expense tracking is tedious"
		],

		solution: [
			"SMS parsing for automatic transactions",
			"Custom labels during payment",
			"Simple, focused mobile UI"
		],

		features: [
			"Automatic SMS parsing",
			"Custom expense titles",
			"Daily & monthly summaries",
			"Offline-friendly storage"
		],

		techStack: [
			"React Native",
			"Express",
			"MongoDB",
			"TypeScript"
		],

		impact: [
			"Improved personal finance awareness",
			"Hands-on experience with SMS parsing",
			"Learned mobile UX constraints"
		],

		futurePlans: [
			"Cloud sync",
			"Category analytics",
			"Export to CSV"
		],

		images: [
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/EveryPenny/everypenney.jpeg?updatedAt=1749988519859",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/EveryPenny/evreryPenny5.jpeg?updatedAt=1749988525437",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/EveryPenny/everyPenny.jpeg?updatedAt=1749988521298",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/EveryPenny/everypenny3.jpeg?updatedAt=1749988521247",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/EveryPenny/everyPenny6.jpeg?updatedAt=1749988521251",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/EveryPenny/everypenny4.jpeg?updatedAt=1749988521221",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/EveryPenny/everrypenny2.jpeg?updatedAt=1749988521036",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/EveryPenny/everyPenny7.jpeg?updatedAt=1749988520974",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/EveryPenny/everyPenny1.jpeg?updatedAt=1749988520735"
		],
		liveUrl: "hhttps://drive.google.com/file/d/1WuC29NH3BPawQrvmq9vHsuShRHj5RxJ-/view",
		githubUrl: "https://github.com/aaryan359/EveryPenny-1",
	},
	{
		id: 7,
		slug: "vehicle-rental-app",
		name: "Vehicle Rental App",
		tagline: "Effortless vehicle renting and invoicing",
		description:
			"A mobile application that enables vehicle rentals with integrated invoicing and admin management.",

		role: "Full Stack Developer",
		duration: "3 months",
		team: "Small Team",
		status: "Completed",

		problem: [
			"Manual vehicle rental tracking",
			"Inefficient invoice generation",
			"No centralized admin dashboard",
		],

		solution: [
			"Built a mobile-first rental flow",
			"Automated invoice generation",
			"Centralized admin management system",
		],

		features: [
			"Vehicle listing and booking",
			"Automated invoicing",
			"Admin dashboard",
			"Customer management",
		],

		techStack: [
			"React Native",
			"Node.js",
			"Express",
			"MongoDB",
			"TypeScript",
		],

		impact: [
			"Simplified vehicle rental operations",
			"Reduced manual paperwork",
			"Improved admin efficiency",
		],

		futurePlans: [
			"Online payments",
			"Customer ratings",
			"Fleet analytics",
		],

		images: [
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Go-amigo/WhatsApp%20Image%202025-06-15%20at%209.03.32%20PM.jpeg?updatedAt=1750001977148",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Go-amigo/WhatsApp%20Image%202025-06-15%20at%209.03.32%20PM(1).jpeg?updatedAt=1750001977695",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Go-amigo/WhatsApp%20Image%202025-06-15%20at%209.03.32%20PM(2).jpeg?updatedAt=1750001977551",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Go-amigo/WhatsApp%20Image%202025-06-15%20at%209.03.34%20PM.jpeg?updatedAt=1750001977629",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Go-amigo/WhatsApp%20Image%202025-06-15%20at%209.03.35%20PM.jpeg?updatedAt=1750001977282",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Go-amigo/WhatsApp%20Image%202025-06-15%20at%209.03.34%20PM(1).jpeg?updatedAt=1750001977166",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Go-amigo/WhatsApp%20Image%202025-06-15%20at%209.03.35%20PM(1).jpeg?updatedAt=1750001976731",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Go-amigo/WhatsApp%20Image%202025-06-15%20at%209.03.33%20PM.jpeg?updatedAt=1750001975535",
			"https://ik.imagekit.io/moq2nlye8/tr:w-200,h-400/Portfolio-project-images/Go-amigo/WhatsApp%20Image%202025-06-15%20at%209.03.34%20PM(2).jpeg?updatedAt=1750001972468"
		],
		liveUrl: "https://drive.google.com/file/d/1IvF-0Cptd6FGrzVFFltJM4fRZiqYPKij/view",
		githubUrl: "https://github.com/aaryan359/GoAmigo-Admin-Frontend",
	},
	{
		id: 8,
		slug: "driveshare",
		name: "DriveShare",
		tagline: "Decentralized P2P cloud storage for India",
		description:
			"A decentralized, high-performance, secure Peer-to-Peer storage ledger mesh built for Indian startups, using WASM-based encryption, WebRTC direct tunnels, and geo-fenced Indian node storage.",

		role: "Full Stack Developer",
		duration: "4 months",
		team: "Solo",
		status: "Completed",

		problem: [
			"Traditional storage relies on expensive centralized providers",
			"High egress charges and data compliance issues",
			"Data leaving Indian borders for storage",
		],

		solution: [
			"Built client-side WASM for file encryption & sharding",
			"Implemented WebRTC for P2P data channels",
			"Created geo-fenced storage within India",
		],

		features: [
			"WASM-based encryption & Reed-Solomon sharding",
			"WebRTC P2P data transfer",
			"Geofenced Indian node network",
			"Fault-tolerant reconstruction",
			"Compliance with DPDP laws"
		],

		techStack: [
			"TypeScript",
			"React",
			"WebRTC",
			"WebAssembly",
		],

		impact: [
			"Addressed data sovereignty for Indian startups",
			"Learned WebRTC and WASM integration",
			"Built production P2P architecture"
		],

		futurePlans: [
			"Incentive system for node providers",
			"File versioning support",
			"Audit trail feature",
		],

		images: [
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/DriveShare/driveshare1.png?updatedAt=1751228228100",
		],
		liveUrl: "https://github.com/aaryan359/driveShare",
		githubUrl: "https://github.com/aaryan359/driveShare",
	},
	{
		id: 9,
		slug: "pdf-chat-rag",
		name: "PDF Chat RAG",
		tagline: "Production-ready PDF document Q&A workspace",
		description:
			"Retrieval-Augmented Generation workspace for PDF documents with multi-PDF upload, explicit status lifecycle, streaming chat responses, and source-backed answers.",

		role: "Full Stack Developer",
		duration: "2 months",
		team: "Solo",
		status: "Completed",

		problem: [
			"Existing PDF chat apps mix ingestion and chat in one path",
			"No clear document processing states",
			"Retrieval evidence is hidden from users",
		],

		solution: [
			"Separated ingestion from chat pathways",
			"Implemented status lifecycle: queued, processing, ready, failed",
			"Added source snippets and similarity evidence",
		],

		features: [
			"Multi-PDF upload and indexing",
			"Streamed chat responses",
			"Source citations with answers",
			"Top-K retrieval control",
			"Document-level filtering"
		],

		techStack: [
			"TypeScript",
			"Next.js",
			"Express",
		],

		impact: [
			"Learned RAG architecture fundamentals",
			"Built reliable async document processing",
			"Created inspectable retrieval system"
		],

		futurePlans: [
			"Add user authentication",
			"Implement chat history",
			"Multi-user support",
		],

		images: [
			"https://ik.imagekit.io/moq2nlye8/Portfolio-project-images/PDFChatRAG/pdf1.png?updatedAt=1751228228100",
		],
		liveUrl: "https://github.com/aaryan359/PDF-chat-RAG",
		githubUrl: "https://github.com/aaryan359/PDF-chat-RAG",
	}
];
