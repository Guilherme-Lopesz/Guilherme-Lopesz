/* ============================================================
   GUILHERME LOPES DIAS — PORTFOLIO SCRIPT
   Theme (light/dark) · Language (EN/PT) · Interactive pipeline demo
   Command menu (Ctrl/⌘ K) · Case-study modal · Résumé via print
   ============================================================ */

(function () {
  'use strict';

  var root = document.documentElement;
  var CONTACT_EMAIL = 'guilhermelopes.dias07@outlook.com';
  var LANG_KEY = 'guilherme-portfolio-lang';
  var THEME_KEY = 'guilherme-portfolio-theme';

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function reducedMotion() { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }

  /* ---------- i18n dictionary ---------- */
  var translations = {
    "en": {
      "brand.role": "AI Agents · Automation",
      "nav.about": "About",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "hero.badge": "Open to remote international roles",
      "hero.sub": "Computer Science student from Brazil. I design AI agents and automation pipelines — from a real-time voice agent to a personal server that runs agents locally — and keep a person in control of the decisions that matter.",
      "trust.label": "CERTIFIED & TRAINED WITH",
      "proj.viewCaseStudy": "View Case Study",
      "proj.viewGithub": "View on GitHub",
      "proj.liveDemo": "Live Demo",
      "proj.giro.title": "Giro — Intelligent Transaction Classifier",
      "proj.giro.category": "AI · Automation · Data",
      "proj.giro.desc": "AI-powered financial auditing tool that combines hybrid classification logic with AI to cut manual errors and speed up expense categorization.",
      "proj.giro.imageAlt": "Giro dashboard — expense categories and totals",
      "giro.tech1": "Python",
      "giro.tech2": "AI Classification",
      "giro.tech3": "Automation",
      "proj.nexus.title": "Nexus — Secure Communication Platform",
      "proj.nexus.category": "Security · Architecture · Real-Time Systems",
      "proj.nexus.desc": "Real-time chat platform on a client-server architecture that applies AES-128 encryption to protect message content, built to explore secure-by-design system architecture.",
      "proj.nexus.imageAlt": "Nexus encrypted chat interface",
      "nexus.tech1": "TypeScript",
      "nexus.tech2": "AES-128",
      "nexus.tech3": "Client-Server Architecture",
      "nexus.tech4": "Real-Time",
      "proj.merlin.title": "Merlin — Real-Time Voice Agent",
      "proj.merlin.category": "AI Agents · Real-Time Voice · WebRTC",
      "proj.merlin.desc": "Multimodal voice agent built with WebRTC and native generative-AI audio (Gemini Realtime), skipping the traditional STT→LLM→TTS pipeline for near-instant, natural conversation.",
      "proj.merlin.imageAlt": "Merlin voice agent cover art",
      "merlin.tech1": "Next.js",
      "merlin.tech2": "FastAPI",
      "merlin.tech3": "LiveKit",
      "merlin.tech4": "Gemini Live",
      "modal.problem": "Problem",
      "modal.solution": "Solution",
      "modal.technologies": "Technologies",
      "modal.howItWorks": "How It Works",
      "modal.decisions": "Key Technical Decisions",
      "modal.results": "Results",
      "modal.limitations": "Limitations",
      "modal.application": "Application",
      "modal.close": "Close",
      "modal.galleryPrev": "Previous image",
      "modal.galleryNext": "Next image",
      "giro.problem": "Manually reviewing and categorizing financial transactions is slow and error-prone, especially as transaction volume grows.",
      "giro.solution": "Giro combines rule-based logic with AI classification to automatically categorize transactions and surface totals in a simple dashboard, reducing the manual work involved in financial auditing.",
      "giro.arch1": "Transaction data",
      "giro.arch2": "Hybrid classification (rules + AI)",
      "giro.arch3": "Categorized dashboard",
      "giro.decision1q": "Why a hybrid approach instead of pure ML?",
      "giro.decision1a": "Combining rule-based logic with AI balances the predictability of rules with the flexibility of AI classification, reducing the risk of misclassifying edge cases.",
      "giro.decision2q": "Why focus on expense categorization first?",
      "giro.decision2a": "Categorization is one of the most repetitive, time-consuming parts of financial auditing — a clear place to demonstrate measurable value from automation.",
      "giro.result1": "Designed to cut manual review time in financial categorization",
      "giro.result2": "Consistent, rule-backed classification with AI assistance for edge cases",
      "giro.result3": "Simple dashboard view of categorized transactions and totals",
      "giro.application": "Useful for personal finance tracking, small-business expense auditing, or any workflow where transactions need consistent categorization without full manual review.",
      "giro.limitations": "Built and tested as a personal project rather than against a large, real-world transaction dataset. Classification accuracy has not been formally benchmarked, and edge-case handling would need further testing before any production use.",
      "nexus.problem": "Many chat tools aren't built with privacy as a first-class requirement, which is a problem in environments where message confidentiality matters.",
      "nexus.solution": "Nexus is an end-to-end encrypted chat platform on a client-server architecture, using AES-128 encryption to keep message content protected in privacy-critical environments.",
      "nexus.arch1": "Client",
      "nexus.arch2": "AES-128 encrypted channel",
      "nexus.arch3": "Server",
      "nexus.arch4": "Real-time delivery to recipient",
      "nexus.decision1q": "Why a client-server architecture?",
      "nexus.decision1a": "Centralizing message routing through a server made real-time delivery and connection management simpler to reason about and secure.",
      "nexus.decision2q": "Why AES-128 for encryption?",
      "nexus.decision2a": "AES-128 offers a practical balance between strong, well-vetted encryption and performance for real-time messaging.",
      "nexus.result1": "Functional real-time encrypted messaging between clients",
      "nexus.result2": "Hands-on implementation of applied cryptography in a working system",
      "nexus.result3": "Demonstrates secure-by-design thinking in system architecture",
      "nexus.application": "Applicable to internal team communication or any context where message privacy needs to be built in from the start, not added later.",
      "nexus.limitations": "AES-128 protects message content, but that alone doesn't make the system secure end to end — key management, user authentication and transport-layer hardening are not yet documented as part of the project, and it hasn't been through an independent security review. It should be treated as a learning and architecture project, not a production-ready secure messaging system.",
      "merlin.problem": "Traditional voice assistants chain speech-to-text, an LLM and text-to-speech together, which adds latency at every hop and loses tone and intent in the text round-trip.",
      "merlin.solution": "Merlin is a real-time voice agent split into three services — a Next.js frontend, a FastAPI token-issuing backend and a LiveKit Agents worker — that streams audio straight to and from Gemini's Realtime API over WebRTC, so the model hears and speaks natively instead of going through text.",
      "merlin.arch1": "Token request (FastAPI)",
      "merlin.arch2": "WebRTC room (LiveKit Cloud)",
      "merlin.arch3": "Agent worker ↔ Gemini Realtime",
      "merlin.arch4": "Live audio response",
      "merlin.decision1q": "Why Gemini's native audio API instead of a classic STT → LLM → TTS pipeline?",
      "merlin.decision1a": "Gemini Realtime accepts and generates audio directly, preserving tone and intent that a text round-trip would lose, and responds close to instantly instead of chaining three separate models together.",
      "merlin.decision2q": "Why LiveKit Cloud instead of a self-hosted WebRTC server?",
      "merlin.decision2a": "LiveKit Cloud removes the work of running and scaling an SFU myself, handling voice-activity detection, natural interruptions (barge-in) and room lifecycle while keeping latency low globally.",
      "merlin.result1": "Working end-to-end pipeline: Next.js frontend → FastAPI token service → LiveKit Cloud → Gemini Realtime agent worker",
      "merlin.result2": "Native audio in and out through Gemini Realtime, without a separate STT/TTS step",
      "merlin.result3": "Live demo deployed and publicly reachable",
      "merlin.application": "Fits hands-free assistants, customer-facing voice interfaces, or any product where natural, low-latency spoken conversation matters more than a chat window.",
      "merlin.limitations": "Runs on free-tier infrastructure today: the Render backend cold-starts after inactivity (up to ~50s for the first token), Gemini's Realtime API carries meaningful daily and per-minute quotas under continuous audio streaming, and the agent worker still needs a dedicated always-on environment rather than a fully managed 24/7 deployment.",
      "proj.graphroute.title": "GraphRoute — Graph Algorithm Benchmarker",
      "proj.graphroute.category": "Algorithms · Data Structures · Benchmarking",
      "proj.graphroute.desc": "Desktop app that benchmarks BFS, DFS and Dijkstra over a real geographic road network, running 100 trials per algorithm and visualizing the results.",
      "proj.graphroute.imageAlt": "GraphRoute graph visualization and benchmark dashboard",
      "graphroute.tech1": "Python",
      "graphroute.tech2": "NetworkX",
      "graphroute.tech3": "CustomTkinter",
      "graphroute.tech4": "Benchmarking",
      "proj.vidascampo.title": "Vidas do Campo — Veterinary Decision-Making Simulation",
      "proj.vidascampo.category": "Education · Simulation · Web",
      "proj.vidascampo.desc": "Interactive browser-based learning platform that teaches neonatal cattle and sheep management through 7 stages, clinical case scenarios, quizzes and mini-games with scoring and progression.",
      "proj.vidascampo.imageAlt": "Vidas do Campo veterinary simulation game interface",
      "vidascampo.tech1": "HTML",
      "vidascampo.tech2": "CSS",
      "vidascampo.tech3": "JavaScript",
      "vidascampo.tech4": "Web Audio API",
      "vidascampo.tech5": "Firebase",
      "graphroute.problem": "Comparing graph search algorithms usually stays theoretical — it's hard to see how BFS, DFS and Dijkstra actually perform, and differ, on a real network.",
      "graphroute.solution": "GraphRoute runs BFS, DFS and Dijkstra over a weighted graph of municipalities in the Bahia countryside, executing 100 runs per algorithm and per route, then presents statistical metrics, rankings and an interactive map view of the graph and the path found.",
      "graphroute.arch1": "Origin & destination input",
      "graphroute.arch2": "100 runs per algorithm",
      "graphroute.arch3": "Statistical processing",
      "graphroute.arch4": "Comparative dashboard",
      "graphroute.decision1q": "Why benchmark with 100 runs instead of one?",
      "graphroute.decision1a": "A single run can be noisy; averaging 100 executions per algorithm gives a more reliable picture of real performance, including mean, median and standard deviation.",
      "graphroute.decision2q": "Why include Dijkstra alongside BFS and DFS if it's the only one with optimality guarantees?",
      "graphroute.decision2a": "Showing all three side by side makes the trade-off between speed and correctness concrete — BFS and DFS can be faster but don't guarantee the lowest-cost path in a weighted graph.",
      "graphroute.result1": "Working benchmark comparing BFS, DFS and Dijkstra with 5 statistical metrics per run",
      "graphroute.result2": "Interactive graph visualization with real geographic coordinates and hover details",
      "graphroute.result3": "Exportable results in JSON and CSV for further analysis",
      "graphroute.application": "Useful for studying and teaching graph algorithms, benchmarking search strategies, or visualizing real-world network routing problems.",
      "graphroute.limitations": "Benchmarks were run on a single machine, so absolute timing numbers are hardware-dependent — the value is in the relative comparison between algorithms, not the raw times. The graph models a fixed set of Bahia countryside municipalities rather than a general-purpose routing engine.",
      "vidascampo.problem": "Neonatal management decisions for cattle and sheep matter a lot for animal survival, but the clinical content is usually taught passively, without letting students practice decision-making.",
      "vidascampo.solution": "Vidas do Campo turns the perinatal care protocol into a 7-stage simulation game where the player acts as a farm's technical manager, answering adaptive quizzes, solving mini-games and handling narrative clinical cases, with immediate feedback after each decision.",
      "vidascampo.arch1": "Stage & quiz engine",
      "vidascampo.arch2": "Scoring & streak system",
      "vidascampo.arch3": "Clinical feedback",
      "vidascampo.arch4": "Ranking (Firebase Realtime DB)",
      "vidascampo.decision1q": "Why build the gameplay with no external dependencies?",
      "vidascampo.decision1a": "Using native HTML, CSS and JavaScript for the whole gameplay loop keeps the game lightweight, fast to load and easy to run anywhere without install steps — important for a tool aimed at students and rural producers. The only external service is Firebase, used solely to sync the online ranking.",
      "vidascampo.decision2q": "Why offer separate 'Bovine' and 'Ovine' management tracks?",
      "vidascampo.decision2a": "Cattle and sheep neonatal care follow different clinical protocols, so splitting them into their own tracks lets each one use content that's actually specific to that species instead of generic advice. Difficulty is handled separately, through the player's chosen profile (layperson, student or veterinarian).",
      "vidascampo.result1": "7 complete stages covering the perinatal cycle, from pre-birth to farm indicators",
      "vidascampo.result2": "Adaptive quiz and scoring system with streak multipliers and clinical case bonuses",
      "vidascampo.result3": "Persistent Top 10 ranking synced in real time through Firebase",
      "vidascampo.application": "Fits veterinary and animal science education, farm-worker training, or any context where practicing neonatal management decisions beats reading about them.",
      "vidascampo.limitations": "The Top 10 ranking is synced through Firebase, but in-progress checkpoints are still saved to the browser's LocalStorage, so an unfinished run doesn't carry over between devices — only the final score does.",
      "about.title": "Building end to end.",
      "skills.blockLang": "Languages",
      "skills.blockSwe": "Software Engineering",
      "skills.blockSwe.tag1": "Data Structures & Algorithms",
      "skills.blockSwe.tag2": "Git & GitHub",
      "skills.blockSwe.tag3": "Linux (Basics)",
      "skills.block1": "AI & Intelligent Systems",
      "skills.block1.tag1": "Multimodal Voice Agents",
      "skills.block1.tag2": "OpenAI / Gemini / Grok APIs",
      "skills.block1.tag3": "Prompt Engineering",
      "skills.blockAuto": "Automation",
      "skills.blockAuto.tag2": "Workflow Automation",
      "skills.blockAdd": "Additional",
      "skills.blockAdd.tag1": "NFC/RFID Pentesting (Mifare 1k/4k)",
      "skills.blockAdd.tag2": "Proxmark3",
      "skills.blockAdd.tag3": "ISO 14443-A Sniffing & Analysis",
      "skills.blockAdd.tag4": "AES-128 Encryption",
      "skills.blockAdd.tag5": "Power BI",
      "skills.blockAdd.tag6": "Excel (Data Analysis)",
      "skills.blockAdd.tag7": "Microsoft Office Suite",
      "edu.title": "Education & Credentials",
      "edu.sub": "Training focused on Computer Science fundamentals, Artificial Intelligence, and cybersecurity as an area of study.",
      "edu.education.title": "Education",
      "edu.degree.title": "Computer Science",
      "edu.degree.sub": "UNIFACS — Universidade Salvador",
      "edu.degree.meta": "2025.2 – Present · Expected graduation: 2029.2",
      "edu.completed": "Certifications & Training",
      "edu.inProgress": "Currently Learning",
      "edu.statusDone": "Completed",
      "edu.statusProgress": "In Progress",
      "edu.viewCert": "View Certificate",
      "edu.cert1.title": "Endpoint Security",
      "edu.cert1.sub": "Cisco Networking Academy · Ânima Educação",
      "edu.cert1.meta": "Cybersecurity · Instructor Luciano Sávio · Nov 2025",
      "edu.cert2.title": "Computer Systems Analyst",
      "edu.cert2.sub": "UNIFACS · Computer Systems & Security",
      "edu.cert2.meta": "Security · 160h · Dec 2025",
      "edu.cert3.title": "Computing Environments & Connectivity",
      "edu.cert3.sub": "UNIFACS · Professional Qualification",
      "edu.cert3.meta": "Networking · 160h · Dec 2025",
      "edu.cert4.title": "Leading 25.2 — Computer Systems & Security",
      "edu.cert4.sub": "UNIFACS",
      "edu.cert4.meta": "Leadership & Security · 40h · Dec 2025",
      "edu.cert5.title": "Digital Exploration & Technology Fundamentals",
      "edu.cert5.sub": "UNIFACS · Universidade Salvador",
      "edu.cert5.meta": "Technology · 160h · Jul 2026",
      "edu.cert6.title": "Applied Computational Mathematics",
      "edu.cert6.sub": "UNIFACS · Universidade Salvador",
      "edu.cert6.meta": "Mathematics · 160h · Jul 2026",
      "edu.prog1.title": "CDPro — Professional Data Scientist",
      "edu.prog1.sub": "Full Data Science track",
      "edu.prog1.meta": "Data · Certification included on completion",
      "edu.prog2.title": "AI Specialist Program",
      "edu.prog2.sub": "Focus on modern Artificial Intelligence",
      "edu.prog2.meta": "Artificial Intelligence",
      "edu.prog3.title": "NFC/RFID Pentest",
      "edu.prog3.sub": "Hands-on protocol exploitation — Penegui",
      "edu.prog3.meta": "Cybersecurity · Practical",
      "edu.leadership.title": "Leadership & Activities",
      "edu.leadership.role": "Class Representative — Computer Science",
      "edu.leadership.desc": "Elected to represent and coordinate communication for a class of 60 students.",
      "contact.title": "Let's build something.",
      "contact.sub": "Hiring, freelance or just a good idea — send me a message.",
      "contact.form.name": "NAME",
      "contact.form.namePh": "Your name",
      "contact.form.message": "MESSAGE",
      "contact.form.messagePh": "Type your message",
      "contact.form.submit": "Send Email",
      "contact.email.title": "Email",
      "contact.email.body": "Primary contact method.",
      "contact.linkedin.title": "LinkedIn",
      "contact.linkedin.body": "Professional profile.",
      "contact.github.title": "GitHub",
      "contact.github.body": "Projects & source code.",
      "contact.whatsapp.title": "WhatsApp",
      "contact.whatsapp.body": "Direct contact.",
      "footer.note": "built with intent, from Brazil to the world.",
      "footer.top": "Back to top ↑",
      "meta.title": "Guilherme Lopes Dias | AI Agents & Automation | Computer Science Student",
      "meta.description": "Guilherme Lopes Dias — Computer Science student from Brazil building AI agents, automation pipelines and software with a human in the loop. Open to remote international junior roles.",
      "a11y.skip": "Skip to content",
      "nav.systems": "Systems",
      "nav.work": "Work",
      "nav.freelance": "Freelance",
      "nav.search": "Search",
      "print.role": "Computer Science student · AI agents & automation",
      "hero.h1.pre": "I build AI systems that",
      "hero.h1.machine": "work on their own",
      "hero.h1.and": "and",
      "hero.h1.human": "ask before they act",
      "hero.h1.post": ".",
      "hero.cta.demo": "Try the pipeline demo",
      "hero.cta.work": "Selected work",
      "hero.cta.resume": "Résumé (PDF)",
      "card.role": "Computer Science student · Developer",
      "card.baseLabel": "Based in",
      "card.baseValue": "Brazil · UTC−3, overlaps US & European hours",
      "card.timeLabel": "Local time",
      "card.openLabel": "Open to",
      "card.openValue": "Remote junior software engineering & AI-focused roles",
      "stat.shipped": "Projects shipped",
      "stat.dev": "In development",
      "stat.freelance": "Freelance projects",
      "stat.certs": "Certifications",
      "sys.kicker": "Systems",
      "sys.title": "Human in the loop, by design.",
      "sys.sub": "Two systems I'm building right now. Both automate the repeatable work — and keep a person in charge of what matters.",
      "sys.tab.engine": "Content engine",
      "sys.tab.server": "Personal AI server",
      "chip.dev": "In development",
      "sys.engine.desc": "An end-to-end content flow: research, scripts, carousels and video, all the way to posting on social media — automatically. Nothing goes live until a human approves it.",
      "sys.engine.c1": "Built with n8n, each stage tested on its own",
      "sys.engine.c2": "A human approval gate before anything is published",
      "sys.engine.c3": "Modular: research, scripts, images and video evolve independently",
      "sys.server.title": "Personal AI server",
      "sys.server.desc": "A personal server that runs AI agents locally and feeds a second brain — a personal knowledge base that grows with the work I do.",
      "sys.server.c1": "Local-first: the agents run on a server of my own",
      "sys.server.c2": "The agents feed a second brain, and read from it",
      "sys.server.c3": "Early stage — the architecture is still evolving",
      "legend.auto": "Automated step",
      "legend.human": "Human decision",
      "demo.note": "Interactive simulation of the flow design — no real posts are made.",
      "pipe.n1.t": "Research",
      "pipe.n1.s": "Finds what to talk about",
      "pipe.n2.t": "Scripts",
      "pipe.n2.s": "Writes hooks and scripts",
      "pipe.n3.t": "Carousels",
      "pipe.n3.s": "Designs the images",
      "pipe.n4.t": "Video",
      "pipe.n4.s": "Produces short videos",
      "pipe.n5.t": "Approval",
      "pipe.n5.s": "A person reviews it",
      "pipe.n6.t": "Publish",
      "pipe.n6.s": "Posts to social media",
      "pipe.auto": "Automated",
      "pipe.human": "Human",
      "pipe.s.idle": "Ready. Run it to watch a piece of content move through the flow.",
      "pipe.s.research": "Researching topics…",
      "pipe.s.scripts": "Writing scripts…",
      "pipe.s.carousels": "Designing carousels…",
      "pipe.s.video": "Producing the video…",
      "pipe.s.gate": "Waiting for human approval — nothing is published without it.",
      "pipe.s.publish": "Approved. Publishing to social media…",
      "pipe.s.done": "Done. Published (simulated) — a person made the call.",
      "pipe.s.revise": "Sent back for changes. Rewriting from the scripts stage…",
      "pipe.gate": "The content is ready. It only moves forward if you say so.",
      "pipe.approve": "Approve",
      "pipe.revise": "Request changes",
      "pipe.run": "Run the pipeline",
      "pipe.runAgain": "Run again",
      "pipe.reset": "Reset",
      "topo.n1.t": "Inputs",
      "topo.n1.s": "Notes, research and the output of my projects",
      "topo.n2.t": "Local agents",
      "topo.n2.s": "Run on my own server",
      "topo.n3.t": "Second brain",
      "topo.n3.s": "A personal knowledge base",
      "topo.return": "context flows back to the agents",
      "work.kicker": "Work",
      "work.title": "Selected work",
      "work.all": "All projects on GitHub",
      "work.sub": "Every project is documented as a case study: the problem, the solution, the architecture, the decisions, the results and the limitations.",
      "work.dev": "On the workbench",
      "proj.cleo.title": "Cleo Quest",
      "proj.cleo.category": "Game · Personal project",
      "proj.cleo.desc": "A game inspired by my cat, Cleo — a personal passion project currently in production.",
      "cleo.tech1": "Game",
      "cleo.tech2": "Personal project",
      "proj.payroll.title": "Payroll system",
      "proj.payroll.category": "Java · Business software",
      "proj.payroll.desc": "A payroll management system built in Java, currently in development.",
      "payroll.tech1": "Java",
      "payroll.tech2": "Payroll",
      "proj.bicho.title": "Bichometria",
      "proj.bicho.category": "Computer vision · Team project",
      "proj.bicho.desc": "A team project in applied computer vision (PetSalvo). I work on the computer vision front: building with TensorFlow, training artificial neural networks and fine-tuning models for biometric matching.",
      "bicho.tech1": "Computer vision",
      "bicho.tech2": "TensorFlow",
      "bicho.tech3": "Neural networks",
      "bicho.tech4": "Fine-tuning",
      "proj.bicho.link": "Project site",
      "nexus.roomAlt": "Nexus chat room",
      "giro.loginAlt": "Giro login screen",
      "free.kicker": "Freelance",
      "free.title": "Built for real clients.",
      "free.sub": "Projects I've built as an independent developer.",
      "free.zeh.title": "Karaokê do Zé",
      "free.zeh.desc": "A freelance project built for a real client.",
      "free.nosf.title": "Nosferata — Landing page",
      "free.nosf.desc": "A landing page built for a real client.",
      "tag.freelance": "Freelance",
      "tag.client": "Client work",
      "tag.landing": "Landing page",
      "free.cta.title": "Need a landing page, an automation or an AI workflow?",
      "free.cta.sub": "I take on freelance projects — landing pages, n8n automations, AI agents and integrations. Let's talk about yours.",
      "free.cta.wa": "WhatsApp",
      "free.cta.mail": "Email",
      "about.kicker": "About",
      "about.lead": "I'm a Computer Science student at UNIFACS who learns by <strong>building complete systems</strong> — a real-time voice agent, an encrypted chat, an AI transaction classifier, and now a personal AI server and a full content pipeline.",
      "about.body": "My focus is <strong>software, AI agents and automation</strong>, with cybersecurity as an area I keep exploring in practice. I'm looking for a remote, international junior role where I can keep shipping and learning from real feedback.",
      "about.p1.t": "Build, then document",
      "about.p1.d": "Every project ships with a case study: the problem, the decisions and the limitations.",
      "about.p2.t": "Automate the routine, keep people on the decisions",
      "about.p2.d": "AI should remove repetitive work, not accountability.",
      "about.p3.t": "Ship early, learn from what breaks",
      "about.p3.d": "Small, testable steps — and honest notes about what doesn't work yet.",
      "skills.localAgents": "Local AI agents",
      "skills.cv": "Computer vision & fine-tuning",
      "skills.hitl": "Human-in-the-loop flows",
      "skills.legend": "Learning / building right now",
      "edu.kicker": "Education",
      "edu.colegiado.role": "Course Council (Colegiado) Member — Computer Science",
      "edu.colegiado.desc": "Part of the collegiate body where faculty and student representatives discuss and decide on the Computer Science program.",
      "edu.prog4.title": "Computer Vision — Biometric Matching",
      "edu.prog4.sub": "Bichometria (PetSalvo) · Applied Computer Vision",
      "edu.prog4.meta": "On the computer vision front of a team project: TensorFlow, training artificial neural networks and fine-tuning, alongside Google Cloud Vision API integration, image preprocessing pipelines and visual similarity and matching logic.",
      "edu.prog4.link": "Learn more about the project",
      "contact.kicker": "Contact",
      "av.open": "Change profile photo",
      "av.title": "Profile photo",
      "av.carousel": "Profile photos",
      "av.prev": "Previous photo",
      "av.next": "Next photo",
      "av.s1.name": "Classic",
      "av.s1.desc": "The default look of the portfolio.",
      "av.s2.name": "War mode",
      "av.s2.desc": "Something is hiding under this photo. Saving it turns the portfolio into war mode: a battlefield in dark, the quiet field after the battle in light.",
      "av.tag": "Interactive photo",
      "av.hint.mouse": "Move your cursor over the photo",
      "av.hint.touch": "Drag your finger over the photo",
      "av.peek": "Reveal what is underneath",
      "av.inuse": "In use",
      "av.save": "Save",
      "av.cancel": "Cancel",
      "av.savedWar": "War mode on.",
      "av.savedDefault": "Classic look restored.",
      "pal.profile": "Change profile photo",
      "pal.placeholder": "Type a command or search…",
      "pal.hint1": "↑↓ navigate",
      "pal.hint2": "↵ select",
      "pal.hint3": "esc close",
      "pal.g.nav": "Go to",
      "pal.g.projects": "Case studies",
      "pal.g.actions": "Actions",
      "pal.g.links": "Links",
      "pal.empty": "No results",
      "pal.toEn": "Switch to English",
      "pal.toPt": "Mudar para Português",
      "pal.open": "Open command menu",
      "theme.toLight": "Switch to light theme",
      "theme.toDark": "Switch to dark theme",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "doc.resumeTitle": "Guilherme Lopes Dias — Resume"
    },
    "pt": {
      "brand.role": "Agentes de IA · Automação",
      "nav.about": "Sobre",
      "nav.education": "Formação",
      "nav.contact": "Contato",
      "hero.badge": "Aberto a vagas remotas internacionais",
      "hero.sub": "Estudante de Ciência da Computação no Brasil. Projeto agentes de IA e pipelines de automação — de um agente de voz em tempo real a um servidor pessoal que roda agentes localmente — e mantenho uma pessoa no controle das decisões que importam.",
      "trust.label": "CERTIFICADO E TREINADO POR",
      "proj.viewCaseStudy": "Ver Estudo de Caso",
      "proj.viewGithub": "Ver no GitHub",
      "proj.liveDemo": "Demo ao Vivo",
      "proj.giro.title": "Giro — Classificador Inteligente de Transações",
      "proj.giro.category": "IA · Automação · Dados",
      "proj.giro.desc": "Ferramenta de auditoria financeira que combina lógica híbrida com IA para reduzir erros manuais e acelerar a categorização de gastos.",
      "proj.giro.imageAlt": "Dashboard do Giro — categorias e totais de gastos",
      "giro.tech1": "Python",
      "giro.tech2": "Classificação por IA",
      "giro.tech3": "Automação",
      "proj.nexus.title": "Nexus — Plataforma de Comunicação Segura",
      "proj.nexus.category": "Segurança · Arquitetura · Sistemas em Tempo Real",
      "proj.nexus.desc": "Plataforma de chat em tempo real com arquitetura cliente-servidor que aplica criptografia AES-128 para proteger o conteúdo das mensagens, construída para explorar arquitetura de sistemas segura desde a concepção.",
      "proj.nexus.imageAlt": "Interface de chat criptografado do Nexus",
      "nexus.tech1": "TypeScript",
      "nexus.tech2": "AES-128",
      "nexus.tech3": "Arquitetura Cliente-Servidor",
      "nexus.tech4": "Tempo Real",
      "proj.merlin.title": "Merlin — Agente de Voz em Tempo Real",
      "proj.merlin.category": "Agentes de IA · Voz em Tempo Real · WebRTC",
      "proj.merlin.desc": "Agente de voz multimodal construído com WebRTC e IA generativa nativa em áudio (Gemini Realtime), sem o pipeline tradicional STT→LLM→TTS, para uma conversa quase instantânea e natural.",
      "proj.merlin.imageAlt": "Capa do agente de voz Merlin",
      "merlin.tech1": "Next.js",
      "merlin.tech2": "FastAPI",
      "merlin.tech3": "LiveKit",
      "merlin.tech4": "Gemini Live",
      "modal.problem": "Problema",
      "modal.solution": "Solução",
      "modal.technologies": "Tecnologias",
      "modal.howItWorks": "Como Funciona",
      "modal.decisions": "Decisões Técnicas Chave",
      "modal.results": "Resultados",
      "modal.limitations": "Limitações",
      "modal.application": "Aplicação",
      "modal.close": "Fechar",
      "modal.galleryPrev": "Imagem anterior",
      "modal.galleryNext": "Próxima imagem",
      "giro.problem": "Revisar e categorizar transações financeiras manualmente é lento e sujeito a erros, especialmente à medida que o volume de transações cresce.",
      "giro.solution": "O Giro combina lógica baseada em regras com classificação por IA para categorizar transações automaticamente e apresentar totais em um dashboard simples, reduzindo o trabalho manual da auditoria financeira.",
      "giro.arch1": "Dados de transações",
      "giro.arch2": "Classificação híbrida (regras + IA)",
      "giro.arch3": "Dashboard categorizado",
      "giro.decision1q": "Por que uma abordagem híbrida em vez de ML puro?",
      "giro.decision1a": "Combinar lógica baseada em regras com IA equilibra a previsibilidade das regras com a flexibilidade da classificação por IA, reduzindo o risco de erros em casos de borda.",
      "giro.decision2q": "Por que focar primeiro na categorização de gastos?",
      "giro.decision2a": "A categorização é uma das partes mais repetitivas e demoradas da auditoria financeira — um ponto claro para demonstrar valor mensurável com automação.",
      "giro.result1": "Projetado para reduzir o tempo de revisão manual na categorização financeira",
      "giro.result2": "Classificação consistente, apoiada em regras, com IA para casos de borda",
      "giro.result3": "Visão simples em dashboard das transações categorizadas e totais",
      "giro.application": "Útil para controle financeiro pessoal, auditoria de gastos de pequenas empresas, ou qualquer fluxo em que transações precisem de categorização consistente sem revisão manual completa.",
      "giro.limitations": "Construído e testado como projeto pessoal, não com um grande volume de dados reais. A precisão da classificação ainda não foi medida formalmente, e o tratamento de casos de borda exigiria mais testes antes de qualquer uso em produção.",
      "nexus.problem": "Muitas ferramentas de chat não são construídas com privacidade como requisito de primeira classe, o que é um problema em ambientes onde a confidencialidade das mensagens importa.",
      "nexus.solution": "O Nexus é uma plataforma de chat com criptografia ponta a ponta em arquitetura cliente-servidor, usando criptografia AES-128 para proteger o conteúdo das mensagens em ambientes que exigem privacidade.",
      "nexus.arch1": "Cliente",
      "nexus.arch2": "Canal criptografado AES-128",
      "nexus.arch3": "Servidor",
      "nexus.arch4": "Entrega em tempo real ao destinatário",
      "nexus.decision1q": "Por que uma arquitetura cliente-servidor?",
      "nexus.decision1a": "Centralizar o roteamento de mensagens em um servidor tornou a entrega em tempo real e o gerenciamento de conexões mais simples de projetar e proteger.",
      "nexus.decision2q": "Por que AES-128 para criptografia?",
      "nexus.decision2a": "AES-128 oferece um equilíbrio prático entre criptografia robusta e testada e desempenho para mensagens em tempo real.",
      "nexus.result1": "Mensagens criptografadas em tempo real funcionais entre clientes",
      "nexus.result2": "Implementação prática de criptografia aplicada em um sistema funcional",
      "nexus.result3": "Demonstra pensamento de design seguro na arquitetura do sistema",
      "nexus.application": "Aplicável à comunicação interna de equipes ou qualquer contexto em que a privacidade das mensagens precise ser parte do design desde o início, não adicionada depois.",
      "nexus.limitations": "O AES-128 protege o conteúdo das mensagens, mas isso sozinho não torna o sistema seguro de ponta a ponta — gerenciamento de chaves, autenticação de usuários e reforço da camada de transporte ainda não estão documentados como parte do projeto, que também não passou por uma revisão de segurança independente. Deve ser tratado como um projeto de aprendizado e arquitetura, não um sistema de mensagens seguro pronto para produção.",
      "merlin.problem": "Assistentes de voz tradicionais encadeiam conversão de fala em texto, um LLM e conversão de texto em fala, o que adiciona latência a cada etapa e perde entonação e intenção na ida e volta pelo texto.",
      "merlin.solution": "O Merlin é um agente de voz em tempo real dividido em três serviços — um frontend em Next.js, um backend em FastAPI que emite tokens e um worker do LiveKit Agents — que transmite áudio diretamente de e para a API Realtime do Gemini via WebRTC, permitindo que o modelo ouça e fale de forma nativa, sem passar por texto.",
      "merlin.arch1": "Solicitação de token (FastAPI)",
      "merlin.arch2": "Sala WebRTC (LiveKit Cloud)",
      "merlin.arch3": "Worker do agente ↔ Gemini Realtime",
      "merlin.arch4": "Resposta em áudio ao vivo",
      "merlin.decision1q": "Por que a API de áudio nativo do Gemini em vez do pipeline clássico STT → LLM → TTS?",
      "merlin.decision1a": "O Gemini Realtime recebe e gera áudio diretamente, preservando entonação e intenção que se perderiam numa ida e volta por texto, e responde quase instantaneamente em vez de encadear três modelos separados.",
      "merlin.decision2q": "Por que LiveKit Cloud em vez de um servidor WebRTC próprio?",
      "merlin.decision2a": "O LiveKit Cloud elimina o trabalho de manter e escalar um SFU próprio, cuidando de detecção de atividade de voz, interrupções naturais de fala (barge-in) e do ciclo de vida das salas, mantendo baixa latência globalmente.",
      "merlin.result1": "Pipeline ponta a ponta funcional: frontend Next.js → serviço de token FastAPI → LiveKit Cloud → worker do agente com Gemini Realtime",
      "merlin.result2": "Áudio nativo de entrada e saída via Gemini Realtime, sem etapa separada de STT/TTS",
      "merlin.result3": "Demo ao vivo implantada e publicamente acessível",
      "merlin.application": "Serve para assistentes hands-free, interfaces de voz voltadas ao cliente, ou qualquer produto em que uma conversa falada natural e de baixa latência importe mais do que uma janela de chat.",
      "merlin.limitations": "Hoje roda em infraestrutura de camada gratuita: o backend no Render entra em repouso após inatividade (até ~50s para o primeiro token), a API Realtime do Gemini tem cotas relevantes de uso diário e por minuto sob streaming contínuo de áudio, e o worker do agente ainda precisa de um ambiente dedicado sempre ativo em vez de uma implantação totalmente gerenciada 24/7.",
      "proj.graphroute.title": "GraphRoute — Comparador de Algoritmos em Grafos",
      "proj.graphroute.category": "Algoritmos · Estruturas de Dados · Benchmarking",
      "proj.graphroute.desc": "Aplicação desktop que compara BFS, DFS e Dijkstra sobre uma rede geográfica real de estradas, executando 100 rodadas por algoritmo e visualizando os resultados.",
      "proj.graphroute.imageAlt": "Visualização do grafo e painel de benchmark do GraphRoute",
      "graphroute.tech1": "Python",
      "graphroute.tech2": "NetworkX",
      "graphroute.tech3": "CustomTkinter",
      "graphroute.tech4": "Benchmarking",
      "proj.vidascampo.title": "Vidas do Campo — Simulação de Tomada de Decisão Veterinária",
      "proj.vidascampo.category": "Educação · Simulação · Web",
      "proj.vidascampo.desc": "Plataforma interativa de aprendizagem no navegador que ensina manejo neonatal de bovinos e ovinos por meio de 7 etapas, casos clínicos, quizzes e minijogos com pontuação e progressão.",
      "proj.vidascampo.imageAlt": "Interface do jogo de simulação veterinária Vidas do Campo",
      "vidascampo.tech1": "HTML",
      "vidascampo.tech2": "CSS",
      "vidascampo.tech3": "JavaScript",
      "vidascampo.tech4": "Web Audio API",
      "vidascampo.tech5": "Firebase",
      "graphroute.problem": "Comparar algoritmos de busca em grafos costuma ficar só na teoria — é difícil visualizar como BFS, DFS e Dijkstra realmente se comportam e se diferenciam em uma rede real.",
      "graphroute.solution": "O GraphRoute executa BFS, DFS e Dijkstra sobre um grafo ponderado de municípios do interior da Bahia, rodando 100 execuções por algoritmo e por rota, e apresenta métricas estatísticas, ranking e uma visualização interativa do grafo com o caminho encontrado.",
      "graphroute.arch1": "Origem e destino",
      "graphroute.arch2": "100 execuções por algoritmo",
      "graphroute.arch3": "Processamento estatístico",
      "graphroute.arch4": "Painel comparativo",
      "graphroute.decision1q": "Por que rodar o benchmark 100 vezes em vez de uma?",
      "graphroute.decision1a": "Uma única execução pode ser ruidosa; fazer a média de 100 execuções por algoritmo dá um retrato mais confiável do desempenho real, incluindo média, mediana e desvio padrão.",
      "graphroute.decision2q": "Por que incluir o Dijkstra junto com BFS e DFS se ele é o único com garantia de otimalidade?",
      "graphroute.decision2a": "Mostrar os três lado a lado torna concreto o trade-off entre velocidade e corretude — BFS e DFS podem ser mais rápidos, mas não garantem o caminho de menor custo em um grafo ponderado.",
      "graphroute.result1": "Benchmark funcional comparando BFS, DFS e Dijkstra com 5 métricas estatísticas por execução",
      "graphroute.result2": "Visualização interativa do grafo com coordenadas geográficas reais e detalhes ao passar o mouse",
      "graphroute.result3": "Resultados exportáveis em JSON e CSV para análise posterior",
      "graphroute.application": "Útil para estudar e ensinar algoritmos de grafos, comparar estratégias de busca ou visualizar problemas reais de roteamento em redes.",
      "graphroute.limitations": "Os benchmarks foram executados em uma única máquina, então os tempos absolutos dependem do hardware usado — o valor está na comparação relativa entre algoritmos, não nos tempos brutos. O grafo modela um conjunto fixo de municípios do interior da Bahia, não um motor de roteamento de propósito geral.",
      "vidascampo.problem": "As decisões de manejo neonatal em bovinos e ovinos são determinantes para a sobrevivência dos animais, mas o conteúdo clínico costuma ser ensinado de forma passiva, sem espaço para praticar a tomada de decisão.",
      "vidascampo.solution": "O Vidas do Campo transforma o protocolo de manejo perinatal em um jogo de simulação com 7 etapas, no qual o jogador atua como responsável técnico da fazenda, respondendo quizzes adaptativos, resolvendo minijogos e enfrentando casos clínicos narrativos, com feedback imediato após cada decisão.",
      "vidascampo.arch1": "Motor de etapas e quiz",
      "vidascampo.arch2": "Sistema de pontuação e streak",
      "vidascampo.arch3": "Feedback clínico",
      "vidascampo.arch4": "Ranking (Firebase Realtime DB)",
      "vidascampo.decision1q": "Por que construir a jogabilidade sem dependências externas?",
      "vidascampo.decision1a": "Usar apenas HTML, CSS e JavaScript nativos para todo o loop de jogo mantém o jogo leve, rápido de carregar e fácil de rodar em qualquer lugar sem etapas de instalação — importante para uma ferramenta voltada a estudantes e produtores rurais. O único serviço externo é o Firebase, usado apenas para sincronizar o ranking online.",
      "vidascampo.decision2q": "Por que oferecer trilhas separadas para 'Bovinos' e 'Ovinos'?",
      "vidascampo.decision2a": "O manejo neonatal de bovinos e ovinos segue protocolos clínicos diferentes, então separar as trilhas por espécie permite usar conteúdo realmente específico para cada uma, em vez de orientações genéricas. A dificuldade é tratada separadamente, pelo perfil escolhido pelo jogador (leigo, estudante ou veterinário).",
      "vidascampo.result1": "7 etapas completas cobrindo o ciclo perinatal, da pré-parição aos indicadores da fazenda",
      "vidascampo.result2": "Sistema de quiz adaptativo e pontuação com multiplicador de streak e bônus por casos clínicos",
      "vidascampo.result3": "Ranking Top 10 persistente, sincronizado em tempo real pelo Firebase",
      "vidascampo.application": "Serve para educação em Medicina Veterinária e Zootecnia, capacitação de trabalhadores rurais, ou qualquer contexto em que praticar decisões de manejo neonatal seja mais eficaz do que apenas ler sobre elas.",
      "vidascampo.limitations": "O ranking Top 10 é sincronizado pelo Firebase, mas o checkpoint da partida em andamento ainda é salvo no LocalStorage do navegador, então uma partida não finalizada não é transferida entre dispositivos — apenas a pontuação final é.",
      "about.title": "Construindo de ponta a ponta.",
      "skills.blockLang": "Linguagens",
      "skills.blockSwe": "Engenharia de Software",
      "skills.blockSwe.tag1": "Estruturas de Dados & Algoritmos",
      "skills.blockSwe.tag2": "Git & GitHub",
      "skills.blockSwe.tag3": "Linux (Básico)",
      "skills.block1": "IA & Sistemas Inteligentes",
      "skills.block1.tag1": "Agentes de Voz Multimodais",
      "skills.block1.tag2": "APIs OpenAI / Gemini / Grok",
      "skills.block1.tag3": "Engenharia de Prompt",
      "skills.blockAuto": "Automação",
      "skills.blockAuto.tag2": "Automação de Fluxos",
      "skills.blockAdd": "Adicional",
      "skills.blockAdd.tag1": "Pentest NFC/RFID (Mifare 1k/4k)",
      "skills.blockAdd.tag2": "Proxmark3",
      "skills.blockAdd.tag3": "Sniffing & Análise ISO 14443-A",
      "skills.blockAdd.tag4": "Criptografia AES-128",
      "skills.blockAdd.tag5": "Power BI",
      "skills.blockAdd.tag6": "Excel (Análise de Dados)",
      "skills.blockAdd.tag7": "Pacote Microsoft Office",
      "edu.title": "Formação & Credenciais",
      "edu.sub": "Formação com base em fundamentos de Ciência da Computação e Inteligência Artificial, com cibersegurança como área de estudo.",
      "edu.education.title": "Formação Acadêmica",
      "edu.degree.title": "Ciência da Computação",
      "edu.degree.sub": "UNIFACS — Universidade Salvador",
      "edu.degree.meta": "2025.2 – Atual · Previsão de conclusão: 2029.2",
      "edu.completed": "Certificações & Formação",
      "edu.inProgress": "Aprendendo Atualmente",
      "edu.statusDone": "Concluído",
      "edu.statusProgress": "Em andamento",
      "edu.viewCert": "Ver Certificado",
      "edu.cert1.title": "Segurança de Endpoint",
      "edu.cert1.sub": "Cisco Networking Academy · Ânima Educação",
      "edu.cert1.meta": "Cibersegurança · Instrutor Luciano Sávio · Nov 2025",
      "edu.cert2.title": "Analista de Sistemas Computacionais",
      "edu.cert2.sub": "UNIFACS · Sistemas Computacionais e Segurança",
      "edu.cert2.meta": "Segurança · 160h · Dez 2025",
      "edu.cert3.title": "Ambientes Computacionais e Conectividade",
      "edu.cert3.sub": "UNIFACS · Qualificação Profissional",
      "edu.cert3.meta": "Redes · 160h · Dez 2025",
      "edu.cert4.title": "Liderando 25.2 — Sistemas Computacionais e Segurança",
      "edu.cert4.sub": "UNIFACS",
      "edu.cert4.meta": "Liderança & Segurança · 40h · Dez 2025",
      "edu.cert5.title": "Exploração Digital e Fundamentos Tecnológicos",
      "edu.cert5.sub": "UNIFACS · Universidade Salvador",
      "edu.cert5.meta": "Tecnologia · 160h · Jul 2026",
      "edu.cert6.title": "Matemática Computacional Aplicada",
      "edu.cert6.sub": "UNIFACS · Universidade Salvador",
      "edu.cert6.meta": "Matemática · 160h · Jul 2026",
      "edu.prog1.title": "CDPro — Cientista de Dados Profissional",
      "edu.prog1.sub": "Formação completa em Data Science",
      "edu.prog1.meta": "Dados · Certificação incluída na conclusão",
      "edu.prog2.title": "Formação Especialista em IA",
      "edu.prog2.sub": "Foco em Inteligência Artificial moderna",
      "edu.prog2.meta": "Inteligência Artificial",
      "edu.prog3.title": "Pentest NFC/RFID",
      "edu.prog3.sub": "Exploração prática de protocolos — Penegui",
      "edu.prog3.meta": "Cibersegurança · Prático",
      "edu.leadership.title": "Liderança & Atividades",
      "edu.leadership.role": "Representante de Turma — Ciência da Computação",
      "edu.leadership.desc": "Eleito para representar e coordenar a comunicação de uma turma de 60 alunos.",
      "contact.title": "Vamos construir algo juntos.",
      "contact.sub": "Contratação, freela ou só uma boa ideia — me mande uma mensagem.",
      "contact.form.name": "NOME",
      "contact.form.namePh": "Seu nome",
      "contact.form.message": "MENSAGEM",
      "contact.form.messagePh": "Digite sua mensagem",
      "contact.form.submit": "Enviar Email",
      "contact.email.title": "Email",
      "contact.email.body": "Principal forma de contato.",
      "contact.linkedin.title": "LinkedIn",
      "contact.linkedin.body": "Perfil profissional.",
      "contact.github.title": "GitHub",
      "contact.github.body": "Projetos e código-fonte.",
      "contact.whatsapp.title": "WhatsApp",
      "contact.whatsapp.body": "Contato direto.",
      "footer.note": "construído com intenção, do Brasil para o mundo.",
      "footer.top": "Voltar ao topo ↑",
      "meta.title": "Guilherme Lopes Dias | Agentes de IA e Automação | Estudante de Ciência da Computação",
      "meta.description": "Guilherme Lopes Dias — estudante de Ciência da Computação no Brasil que constrói agentes de IA, pipelines de automação e software com humano no circuito. Aberto a vagas júnior remotas internacionais.",
      "a11y.skip": "Pular para o conteúdo",
      "nav.systems": "Sistemas",
      "nav.work": "Projetos",
      "nav.freelance": "Freelas",
      "nav.search": "Buscar",
      "print.role": "Estudante de Ciência da Computação · Agentes de IA e automação",
      "hero.h1.pre": "Construo sistemas de IA que",
      "hero.h1.machine": "trabalham sozinhos",
      "hero.h1.and": "e",
      "hero.h1.human": "pedem aprovação antes de agir",
      "hero.h1.post": ".",
      "hero.cta.demo": "Testar a demo do pipeline",
      "hero.cta.work": "Projetos",
      "hero.cta.resume": "Currículo (PDF)",
      "card.role": "Estudante de Ciência da Computação · Desenvolvedor",
      "card.baseLabel": "Localização",
      "card.baseValue": "Brasil · UTC−3, sobrepõe horários dos EUA e da Europa",
      "card.timeLabel": "Horário local",
      "card.openLabel": "Aberto a",
      "card.openValue": "Vagas remotas júnior em engenharia de software e IA",
      "stat.shipped": "Projetos entregues",
      "stat.dev": "Em desenvolvimento",
      "stat.freelance": "Projetos freelance",
      "stat.certs": "Certificações",
      "sys.kicker": "Sistemas",
      "sys.title": "Humano no circuito, desde o projeto.",
      "sys.sub": "Dois sistemas que estou construindo agora. Ambos automatizam o trabalho repetitivo — e mantêm uma pessoa no comando do que importa.",
      "sys.tab.engine": "Motor de conteúdo",
      "sys.tab.server": "Servidor pessoal de IA",
      "chip.dev": "Em desenvolvimento",
      "sys.engine.desc": "Um fluxo completo de criação de conteúdo: pesquisa, roteiros, carrosséis e vídeo, até a postagem nas redes sociais — de forma automática. Nada vai ao ar sem a aprovação de uma pessoa.",
      "sys.engine.c1": "Feito com n8n, cada etapa testada isoladamente",
      "sys.engine.c2": "Uma etapa de aprovação humana antes de qualquer publicação",
      "sys.engine.c3": "Modular: pesquisa, roteiros, imagens e vídeo evoluem de forma independente",
      "sys.server.title": "Servidor pessoal de IA",
      "sys.server.desc": "Um servidor pessoal que roda agentes de IA localmente e alimenta um second brain — uma base de conhecimento pessoal que cresce com o trabalho que faço.",
      "sys.server.c1": "Local-first: os agentes rodam em um servidor meu",
      "sys.server.c2": "Os agentes alimentam um second brain e também consultam o que há nele",
      "sys.server.c3": "Fase inicial — a arquitetura ainda está evoluindo",
      "legend.auto": "Etapa automática",
      "legend.human": "Decisão humana",
      "demo.note": "Simulação interativa do desenho do fluxo — nenhuma publicação real é feita.",
      "pipe.n1.t": "Pesquisa",
      "pipe.n1.s": "Descobre sobre o que falar",
      "pipe.n2.t": "Roteiros",
      "pipe.n2.s": "Escreve ganchos e roteiros",
      "pipe.n3.t": "Carrosséis",
      "pipe.n3.s": "Cria as imagens",
      "pipe.n4.t": "Vídeo",
      "pipe.n4.s": "Produz vídeos curtos",
      "pipe.n5.t": "Aprovação",
      "pipe.n5.s": "Uma pessoa revisa",
      "pipe.n6.t": "Publicação",
      "pipe.n6.s": "Posta nas redes sociais",
      "pipe.auto": "Automático",
      "pipe.human": "Humano",
      "pipe.s.idle": "Pronto. Execute para ver um conteúdo percorrer o fluxo.",
      "pipe.s.research": "Pesquisando temas…",
      "pipe.s.scripts": "Escrevendo roteiros…",
      "pipe.s.carousels": "Criando carrosséis…",
      "pipe.s.video": "Produzindo o vídeo…",
      "pipe.s.gate": "Aguardando aprovação humana — nada é publicado sem ela.",
      "pipe.s.publish": "Aprovado. Publicando nas redes sociais…",
      "pipe.s.done": "Concluído. Publicado (simulado) — uma pessoa tomou a decisão.",
      "pipe.s.revise": "Devolvido para ajustes. Reescrevendo a partir dos roteiros…",
      "pipe.gate": "O conteúdo está pronto. Ele só avança se você aprovar.",
      "pipe.approve": "Aprovar",
      "pipe.revise": "Pedir ajustes",
      "pipe.run": "Executar o pipeline",
      "pipe.runAgain": "Executar de novo",
      "pipe.reset": "Reiniciar",
      "topo.n1.t": "Entradas",
      "topo.n1.s": "Anotações, pesquisas e o resultado dos meus projetos",
      "topo.n2.t": "Agentes locais",
      "topo.n2.s": "Rodam no meu próprio servidor",
      "topo.n3.t": "Second brain",
      "topo.n3.s": "Uma base de conhecimento pessoal",
      "topo.return": "o contexto volta para os agentes",
      "work.kicker": "Projetos",
      "work.title": "Projetos selecionados",
      "work.all": "Todos os projetos no GitHub",
      "work.sub": "Cada projeto é documentado como um estudo de caso: o problema, a solução, a arquitetura, as decisões, os resultados e as limitações.",
      "work.dev": "Na bancada",
      "proj.cleo.title": "Cleo Quest",
      "proj.cleo.category": "Jogo · Projeto pessoal",
      "proj.cleo.desc": "Um jogo inspirado na minha gata, a Cleo — um projeto pessoal em produção.",
      "cleo.tech1": "Jogo",
      "cleo.tech2": "Projeto pessoal",
      "proj.payroll.title": "Sistema de folha de pagamento",
      "proj.payroll.category": "Java · Software de gestão",
      "proj.payroll.desc": "Um sistema de folha de pagamento em Java, em desenvolvimento.",
      "payroll.tech1": "Java",
      "payroll.tech2": "Folha de pagamento",
      "proj.bicho.title": "Bichometria",
      "proj.bicho.category": "Visão computacional · Projeto em equipe",
      "proj.bicho.desc": "Um projeto em equipe de visão computacional aplicada (PetSalvo). Atuo na frente de visão computacional: desenvolvo com TensorFlow, treino redes neurais artificiais e faço fine-tuning de modelos para correspondência biométrica.",
      "bicho.tech1": "Visão computacional",
      "bicho.tech2": "TensorFlow",
      "bicho.tech3": "Redes neurais",
      "bicho.tech4": "Fine-tuning",
      "proj.bicho.link": "Site do projeto",
      "nexus.roomAlt": "Sala de chat do Nexus",
      "giro.loginAlt": "Tela de login do Giro",
      "free.kicker": "Freelas",
      "free.title": "Feito para clientes reais.",
      "free.sub": "Projetos que desenvolvi como desenvolvedor independente.",
      "free.zeh.title": "Karaokê do Zé",
      "free.zeh.desc": "Projeto freelance desenvolvido para um cliente real.",
      "free.nosf.title": "Nosferata — Landing page",
      "free.nosf.desc": "Landing page desenvolvida para um cliente real.",
      "tag.freelance": "Freelance",
      "tag.client": "Projeto para cliente",
      "tag.landing": "Landing page",
      "free.cta.title": "Precisa de uma landing page, uma automação ou um fluxo com IA?",
      "free.cta.sub": "Aceito projetos freelance — landing pages, automações em n8n, agentes de IA e integrações. Vamos conversar sobre o seu.",
      "free.cta.wa": "WhatsApp",
      "free.cta.mail": "E-mail",
      "about.kicker": "Sobre",
      "about.lead": "Sou estudante de Ciência da Computação na UNIFACS e aprendo <strong>construindo sistemas completos</strong> — um agente de voz em tempo real, um chat criptografado, um classificador de transações com IA e, agora, um servidor pessoal de IA e um pipeline completo de conteúdo.",
      "about.body": "Meu foco é <strong>software, agentes de IA e automação</strong>, com cibersegurança como uma área que continuo explorando na prática. Busco uma vaga júnior remota e internacional onde eu possa continuar entregando e aprendendo com feedback real.",
      "about.p1.t": "Construir e depois documentar",
      "about.p1.d": "Todo projeto tem um estudo de caso: o problema, as decisões e as limitações.",
      "about.p2.t": "Automatizar a rotina, manter pessoas nas decisões",
      "about.p2.d": "A IA deve remover o trabalho repetitivo, não a responsabilidade.",
      "about.p3.t": "Entregar cedo, aprender com o que quebra",
      "about.p3.d": "Passos pequenos e testáveis — e notas honestas sobre o que ainda não funciona.",
      "skills.localAgents": "Agentes de IA locais",
      "skills.cv": "Visão computacional e fine-tuning",
      "skills.hitl": "Fluxos com humano no circuito",
      "skills.legend": "Aprendendo / construindo agora",
      "edu.kicker": "Formação",
      "edu.colegiado.role": "Membro do Colegiado do Curso — Ciência da Computação",
      "edu.colegiado.desc": "Integro o colegiado onde docentes e representantes discentes discutem e deliberam sobre o curso de Ciência da Computação.",
      "edu.prog4.title": "Visão Computacional — Biometria",
      "edu.prog4.sub": "Bichometria (PetSalvo) · Visão Computacional aplicada",
      "edu.prog4.meta": "Na frente de visão computacional de um projeto em equipe: TensorFlow, treinamento de redes neurais artificiais e fine-tuning, além da integração com a Google Cloud Vision API, pipelines de pré-processamento de imagens e lógica de similaridade e correspondência visual.",
      "edu.prog4.link": "Saiba mais sobre o projeto",
      "contact.kicker": "Contato",
      "av.open": "Trocar foto de perfil",
      "av.title": "Foto de perfil",
      "av.carousel": "Fotos de perfil",
      "av.prev": "Foto anterior",
      "av.next": "Próxima foto",
      "av.s1.name": "Clássico",
      "av.s1.desc": "O visual padrão do portfólio.",
      "av.s2.name": "Modo guerra",
      "av.s2.desc": "Tem algo escondido sob esta foto. Ao salvar, o portfólio entra no modo guerra: um campo de batalha no escuro e o campo silencioso depois da batalha no claro.",
      "av.tag": "Foto interativa",
      "av.hint.mouse": "Passe o mouse sobre a foto",
      "av.hint.touch": "Arraste o dedo sobre a foto",
      "av.peek": "Revelar o que está por baixo",
      "av.inuse": "Em uso",
      "av.save": "Salvar",
      "av.cancel": "Cancelar",
      "av.savedWar": "Modo guerra ativado.",
      "av.savedDefault": "Visual clássico restaurado.",
      "pal.profile": "Trocar foto de perfil",
      "pal.placeholder": "Digite um comando ou busque…",
      "pal.hint1": "↑↓ navegar",
      "pal.hint2": "↵ selecionar",
      "pal.hint3": "esc fechar",
      "pal.g.nav": "Ir para",
      "pal.g.projects": "Estudos de caso",
      "pal.g.actions": "Ações",
      "pal.g.links": "Links",
      "pal.empty": "Nenhum resultado",
      "pal.toEn": "Switch to English",
      "pal.toPt": "Mudar para Português",
      "pal.open": "Abrir menu de comandos",
      "theme.toLight": "Mudar para o tema claro",
      "theme.toDark": "Mudar para o tema escuro",
      "menu.open": "Abrir menu",
      "menu.close": "Fechar menu",
      "doc.resumeTitle": "Guilherme Lopes Dias — Currículo"
    }
  };

  var currentLang = 'en';
  function lang() { return currentLang; }
  function t(key, l) {
    var dict = translations[l || currentLang] || translations.en;
    return dict[key] !== undefined ? dict[key] : (translations.en[key] || '');
  }

  /* Subscribers that need to re-render when the language changes */
  var langListeners = [];
  function onLang(fn) { langListeners.push(fn); }

  function setLanguage(l) {
    if (l !== 'pt') l = 'en';
    currentLang = l;
    var dict = translations[l];

    $$('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v !== undefined) el.textContent = v;
    });
    $$('[data-i18n-html]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-html')];
      if (v !== undefined) el.innerHTML = v;
    });
    $$('[data-i18n-placeholder]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-placeholder')];
      if (v !== undefined) el.setAttribute('placeholder', v);
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-aria')];
      if (v !== undefined) el.setAttribute('aria-label', v);
    });
    $$('.lang-btn').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === l;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', String(on));
    });

    root.lang = l === 'pt' ? 'pt-BR' : 'en';
    store(LANG_KEY, l);
    document.title = dict['meta.title'];
    var md = $('meta[name="description"]');
    if (md) md.setAttribute('content', dict['meta.description']);

    langListeners.forEach(function (fn) { fn(l); });
  }

  $$('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLanguage(btn.getAttribute('data-lang')); });
  });

  /* ---------- Theme ---------- */
  var themeBtn = $('#themeToggle');
  function currentTheme() { return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }

  function applyTheme(theme, animate) {
    if (animate && !reducedMotion()) {
      root.classList.add('theme-anim');
      window.setTimeout(function () { root.classList.remove('theme-anim'); }, 450);
    }
    root.setAttribute('data-theme', theme);
    var m = $('meta[name="theme-color"]');
    if (m) m.setAttribute('content', metaColor(theme, currentProfile()));
    refreshThemeLabel();
  }
  function refreshThemeLabel() {
    if (themeBtn) themeBtn.setAttribute('aria-label', t(currentTheme() === 'light' ? 'theme.toDark' : 'theme.toLight'));
  }
  function toggleTheme() {
    var next = currentTheme() === 'light' ? 'dark' : 'light';
    applyTheme(next, true);
    store(THEME_KEY, next);
  }
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  onLang(function () {
    refreshThemeLabel();
    if (menuToggle) menuToggle.setAttribute('aria-label', t(mainNav && mainNav.classList.contains('open') ? 'menu.close' : 'menu.open'));
    var pb = $('#paletteBtn');
    if (pb) pb.setAttribute('aria-label', t('pal.open'));
  });
  /* Follow the system theme until the visitor picks one */
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: light)');
    var onSystemTheme = function (e) { if (!read(THEME_KEY)) applyTheme(e.matches ? 'light' : 'dark', true); };
    if (mq.addEventListener) mq.addEventListener('change', onSystemTheme);
    else if (mq.addListener) mq.addListener(onSystemTheme);
  }

  /* ---------- Mobile nav ---------- */
  var menuToggle = $('#menuToggle');
  var mainNav = $('#mainNav');

  function setMenu(open) {
    if (!mainNav || !menuToggle) return;
    mainNav.classList.toggle('open', open);
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
  }
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () { setMenu(!mainNav.classList.contains('open')); });
    $$('.nav-link', mainNav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* ---------- Active nav link on scroll ---------- */
  var navLinks = $$('.nav-link');
  var sectionEls = $$('main section[id]');
  if ('IntersectionObserver' in window && sectionEls.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + id); });
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sectionEls.forEach(function (s) { navObserver.observe(s); });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('is-visible'); }); return; }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Local time (UTC−3) ---------- */
  var timeEl = $('#localTime');
  function tickTime() {
    if (!timeEl) return;
    try {
      var f = new Intl.DateTimeFormat(lang() === 'pt' ? 'pt-BR' : 'en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Bahia' });
      timeEl.textContent = f.format(new Date()) + ' · UTC−3';
    } catch (e) { timeEl.textContent = 'UTC−3'; }
  }
  tickTime();
  window.setInterval(tickTime, 30000);
  onLang(tickTime);

  /* ---------- Systems: tabs ---------- */
  var tabs = $$('[role="tab"]');
  function selectTab(tab, focus) {
    tabs.forEach(function (tb) {
      var on = tb === tab;
      tb.setAttribute('aria-selected', String(on));
      tb.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(tb.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab, false); });
    tab.addEventListener('keydown', function (e) {
      var n = tabs.length, to = null;
      if (e.key === 'ArrowRight') to = tabs[(i + 1) % n];
      else if (e.key === 'ArrowLeft') to = tabs[(i - 1 + n) % n];
      else if (e.key === 'Home') to = tabs[0];
      else if (e.key === 'End') to = tabs[n - 1];
      if (to) { e.preventDefault(); selectTab(to, true); }
    });
  });

  /* ============================================================
     PIPELINE DEMO — a small state machine.
     Four automated steps run on their own, the flow stops at the
     human gate, and only moves on when the visitor approves.
     "Request changes" sends it back to the scripts stage.
     ============================================================ */
  (function pipelineDemo() {
    var nodes = $$('#pipe .node');
    if (!nodes.length) return;

    var GATE = 4;                       // index of the human-approval node
    var STEP_KEYS = ['pipe.s.research', 'pipe.s.scripts', 'pipe.s.carousels', 'pipe.s.video'];
    var statusEl = $('#pipeStatus');
    var statusText = $('#pipeStatusText');
    var gateEl = $('#gate');
    var btnRun = $('#btnRun');
    var btnReset = $('#btnReset');
    var btnApprove = $('#btnApprove');
    var btnRevise = $('#btnRevise');
    var runLabel = btnRun.querySelector('span');

    var state = 'idle';                 // idle | run | gate | done
    var step = -1;
    var timer = null;
    var statusKey = 'pipe.s.idle';

    function delay() { return reducedMotion() ? 450 : 1150; }
    function setStatus(key, st) {
      statusKey = key;
      statusText.textContent = t(key);
      statusEl.setAttribute('data-state', st);
    }
    function render() {
      nodes.forEach(function (n, i) {
        n.classList.toggle('is-done', state === 'done' || i < step);
        n.classList.toggle('is-active', state !== 'done' && i === step);
      });
      gateEl.hidden = state !== 'gate';
      btnRun.disabled = state === 'run' || state === 'gate';
      runLabel.textContent = t(state === 'done' ? 'pipe.runAgain' : 'pipe.run');
      runLabel.setAttribute('data-i18n', state === 'done' ? 'pipe.runAgain' : 'pipe.run');
    }
    function clear() { if (timer) { window.clearTimeout(timer); timer = null; } }

    function runStep() {
      state = 'run';
      if (step === GATE) {
        state = 'gate';
        setStatus('pipe.s.gate', 'gate');
        render();
        btnApprove.focus({ preventScroll: true });
        return;
      }
      if (step === 5) {
        setStatus('pipe.s.publish', 'run');
        render();
        timer = window.setTimeout(function () {
          state = 'done';
          step = nodes.length;
          setStatus('pipe.s.done', 'done');
          render();
        }, delay());
        return;
      }
      setStatus(STEP_KEYS[step], 'run');
      render();
      timer = window.setTimeout(function () { step += 1; runStep(); }, delay());
    }

    function start() { clear(); step = 0; runStep(); }
    function reset() {
      clear();
      state = 'idle'; step = -1;
      setStatus('pipe.s.idle', 'idle');
      render();
    }
    function approve() { if (state !== 'gate') return; step = 5; runStep(); btnRun.focus({ preventScroll: true }); }
    function revise() {
      if (state !== 'gate') return;
      setStatus('pipe.s.revise', 'run');
      step = 1;
      state = 'run';
      render();
      clear();
      timer = window.setTimeout(runStep, delay());
    }

    btnRun.addEventListener('click', start);
    btnReset.addEventListener('click', reset);
    btnApprove.addEventListener('click', approve);
    btnRevise.addEventListener('click', revise);
    onLang(function () { statusText.textContent = t(statusKey); render(); });
    render();
  })();

  /* ============================================================
     PROJECTS DATA — single source for the grid, the modal and
     the command menu. To add a project: add an entry here and its
     translation keys (en + pt) in the dictionary above.
     ============================================================ */
  var projects = [
    {
      id: 'merlin',
      titleKey: 'proj.merlin.title', categoryKey: 'proj.merlin.category', descKey: 'proj.merlin.desc',
      image: 'img/merlin - interface2.jpeg', imageAltKey: 'proj.merlin.imageAlt',
      techKeys: ['merlin.tech1', 'merlin.tech2', 'merlin.tech3', 'merlin.tech4'],
      github: 'https://github.com/Guilherme-Lopesz/Merlin-voice-agent',
      demo: 'https://merlin-voice-agent.vercel.app',
      caseStudy: {
        problemKey: 'merlin.problem', solutionKey: 'merlin.solution',
        architectureKeys: ['merlin.arch1', 'merlin.arch2', 'merlin.arch3', 'merlin.arch4'],
        decisions: [{ qKey: 'merlin.decision1q', aKey: 'merlin.decision1a' }, { qKey: 'merlin.decision2q', aKey: 'merlin.decision2a' }],
        resultKeys: ['merlin.result1', 'merlin.result2', 'merlin.result3'],
        applicationKey: 'merlin.application', limitationsKey: 'merlin.limitations',
        media: [
          { src: 'video/merlin-em-breve.mp4', poster: 'img/merlin - interface2.jpeg', altKey: 'proj.merlin.imageAlt' },
          { src: 'img/merlin - interface2.jpeg', altKey: 'proj.merlin.imageAlt' }
        ]
      }
    },
    {
      id: 'nexus',
      titleKey: 'proj.nexus.title', categoryKey: 'proj.nexus.category', descKey: 'proj.nexus.desc',
      image: 'img/nexus-interface.png', imageAltKey: 'proj.nexus.imageAlt',
      techKeys: ['nexus.tech1', 'nexus.tech2', 'nexus.tech3', 'nexus.tech4'],
      github: 'https://github.com/Guilherme-Lopesz/Nexus', demo: null,
      caseStudy: {
        problemKey: 'nexus.problem', solutionKey: 'nexus.solution',
        architectureKeys: ['nexus.arch1', 'nexus.arch2', 'nexus.arch3', 'nexus.arch4'],
        decisions: [{ qKey: 'nexus.decision1q', aKey: 'nexus.decision1a' }, { qKey: 'nexus.decision2q', aKey: 'nexus.decision2a' }],
        resultKeys: ['nexus.result1', 'nexus.result2', 'nexus.result3'],
        applicationKey: 'nexus.application', limitationsKey: 'nexus.limitations',
        media: [
          { src: 'video/nexus-video2.mp4', poster: 'img/nexus-interface.png', altKey: 'proj.nexus.imageAlt' },
          { src: 'img/nexus-interface.png', altKey: 'proj.nexus.imageAlt' },
          { src: 'img/nexus-sala.png', altKey: 'nexus.roomAlt' }
        ]
      }
    },
    {
      id: 'giro',
      titleKey: 'proj.giro.title', categoryKey: 'proj.giro.category', descKey: 'proj.giro.desc',
      image: 'img/Giro-tela-inicial.png', imageAltKey: 'proj.giro.imageAlt',
      techKeys: ['giro.tech1', 'giro.tech2', 'giro.tech3'],
      github: 'https://github.com/Guilherme-Lopesz/Classificador-Inteligente-de-Transa-es', demo: null,
      caseStudy: {
        problemKey: 'giro.problem', solutionKey: 'giro.solution',
        architectureKeys: ['giro.arch1', 'giro.arch2', 'giro.arch3'],
        decisions: [{ qKey: 'giro.decision1q', aKey: 'giro.decision1a' }, { qKey: 'giro.decision2q', aKey: 'giro.decision2a' }],
        resultKeys: ['giro.result1', 'giro.result2', 'giro.result3'],
        applicationKey: 'giro.application', limitationsKey: 'giro.limitations',
        media: [
          { src: 'video/Giro-Readme-github.mp4', poster: 'img/Giro-tela-inicial.png', altKey: 'proj.giro.imageAlt' },
          { src: 'img/Giro-tela-inicial.png', altKey: 'proj.giro.imageAlt' },
          { src: 'img/Giro-Login.png', altKey: 'giro.loginAlt' }
        ]
      }
    },
    {
      id: 'graphroute',
      titleKey: 'proj.graphroute.title', categoryKey: 'proj.graphroute.category', descKey: 'proj.graphroute.desc',
      image: 'img/grafos.png', imageAltKey: 'proj.graphroute.imageAlt',
      techKeys: ['graphroute.tech1', 'graphroute.tech2', 'graphroute.tech3', 'graphroute.tech4'],
      github: 'https://github.com/Guilherme-Lopesz/graphroute-analyzer', demo: null,
      caseStudy: {
        problemKey: 'graphroute.problem', solutionKey: 'graphroute.solution',
        architectureKeys: ['graphroute.arch1', 'graphroute.arch2', 'graphroute.arch3', 'graphroute.arch4'],
        decisions: [{ qKey: 'graphroute.decision1q', aKey: 'graphroute.decision1a' }, { qKey: 'graphroute.decision2q', aKey: 'graphroute.decision2a' }],
        resultKeys: ['graphroute.result1', 'graphroute.result2', 'graphroute.result3'],
        applicationKey: 'graphroute.application', limitationsKey: 'graphroute.limitations',
        media: [
          { src: 'video/606588497-400b4e7d-9fb0-4d39-b434-221c4d7c48de.mp4', poster: 'img/grafos.png', altKey: 'proj.graphroute.imageAlt' },
          { src: 'img/grafos.png', altKey: 'proj.graphroute.imageAlt' }
        ]
      }
    },
    {
      id: 'vidascampo',
      titleKey: 'proj.vidascampo.title', categoryKey: 'proj.vidascampo.category', descKey: 'proj.vidascampo.desc',
      image: 'img/vidas-do-campo.png', imageAltKey: 'proj.vidascampo.imageAlt',
      techKeys: ['vidascampo.tech1', 'vidascampo.tech2', 'vidascampo.tech3', 'vidascampo.tech4', 'vidascampo.tech5'],
      github: 'https://github.com/Guilherme-Lopesz/vidas-do-campo2',
      demo: 'https://guilherme-lopesz.github.io/vidas-do-campo2/',
      caseStudy: {
        problemKey: 'vidascampo.problem', solutionKey: 'vidascampo.solution',
        architectureKeys: ['vidascampo.arch1', 'vidascampo.arch2', 'vidascampo.arch3', 'vidascampo.arch4'],
        decisions: [{ qKey: 'vidascampo.decision1q', aKey: 'vidascampo.decision1a' }, { qKey: 'vidascampo.decision2q', aKey: 'vidascampo.decision2a' }],
        resultKeys: ['vidascampo.result1', 'vidascampo.result2', 'vidascampo.result3'],
        applicationKey: 'vidascampo.application', limitationsKey: 'vidascampo.limitations',
        media: [{ src: 'img/vidas-do-campo.png', altKey: 'proj.vidascampo.imageAlt' }]
      }
    }
  ];

  /* Projects still being built (no case study yet) */
  var inDev = [
    { id: 'bichometria', icon: 'i-eye', wide: true, link: 'https://bichometria.vercel.app', titleKey: 'proj.bicho.title', categoryKey: 'proj.bicho.category', descKey: 'proj.bicho.desc', techKeys: ['bicho.tech1', 'bicho.tech2', 'bicho.tech3', 'bicho.tech4'] },
    { id: 'cleo', icon: 'i-game', titleKey: 'proj.cleo.title', categoryKey: 'proj.cleo.category', descKey: 'proj.cleo.desc', techKeys: ['cleo.tech1', 'cleo.tech2'] },
    { id: 'payroll', icon: 'i-code', titleKey: 'proj.payroll.title', categoryKey: 'proj.payroll.category', descKey: 'proj.payroll.desc', techKeys: ['payroll.tech1', 'payroll.tech2'] }
  ];

  var ICON_LINK = '<svg aria-hidden="true"><use href="#icon-external-link"></use></svg>';
  var ICON_ARROW_LEFT = '<svg aria-hidden="true"><use href="#icon-arrow-left"></use></svg>';
  var ICON_ARROW_RIGHT = '<svg aria-hidden="true"><use href="#icon-arrow-right"></use></svg>';
  var ICON_CHECK = '<svg aria-hidden="true"><use href="#icon-check"></use></svg>';
  var ICON_PLAY = '<svg aria-hidden="true"><use href="#icon-play"></use></svg>';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function src(p) { return encodeURI(p); }
  function findProject(id) { for (var i = 0; i < projects.length; i++) if (projects[i].id === id) return projects[i]; return null; }

  /* ---------- Project grid + workbench ---------- */
  var projectsGrid = $('#projectsGrid');
  var devGrid = $('#devGrid');

  function tagsHtml(keys, l) {
    return keys.map(function (k) { return '<span class="tag">' + esc(t(k, l)) + '</span>'; }).join('');
  }

  function buildProjectCard(p, l) {
    var demo = p.demo
      ? '<a href="' + p.demo + '" target="_blank" rel="noopener" class="project-link"><span>' + esc(t('proj.liveDemo', l)) + '</span>' + ICON_LINK + '</a>' : '';
    return (
      '<article class="project-card" data-project-id="' + p.id + '">' +
        '<div class="project-media"><img src="' + src(p.image) + '" alt="' + esc(t(p.imageAltKey, l)) + '" loading="lazy" width="800" height="500"></div>' +
        '<div class="project-body">' +
          '<span class="project-cat">' + esc(t(p.categoryKey, l)) + '</span>' +
          '<h3>' + esc(t(p.titleKey, l)) + '</h3>' +
          '<p>' + esc(t(p.descKey, l)) + '</p>' +
          '<div class="project-tags">' + tagsHtml(p.techKeys, l) + '</div>' +
          '<div class="project-links">' +
            '<button type="button" class="project-link is-primary" data-open-modal="' + p.id + '"><span>' + esc(t('proj.viewCaseStudy', l)) + '</span>' + ICON_ARROW_RIGHT + '</button>' +
            '<a href="' + p.github + '" target="_blank" rel="noopener" class="project-link"><span>' + esc(t('proj.viewGithub', l)) + '</span>' + ICON_LINK + '</a>' +
            demo +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function buildDevCard(p, l) {
    return (
      '<article class="dev-card' + (p.wide ? ' dev-card--wide' : '') + '">' +
        '<div class="dev-top"><span class="dev-icon" aria-hidden="true"><svg><use href="#' + p.icon + '"></use></svg></span>' +
          '<span class="chip chip--human">' + esc(t('chip.dev', l)) + '</span></div>' +
        '<span class="project-cat">' + esc(t(p.categoryKey, l)) + '</span>' +
        '<h3>' + esc(t(p.titleKey, l)) + '</h3>' +
        '<p>' + esc(t(p.descKey, l)) + '</p>' +
        '<div class="project-tags">' + tagsHtml(p.techKeys, l) + '</div>' +
        (p.link ? '<div class="project-links"><a href="' + p.link + '" target="_blank" rel="noopener" class="project-link is-primary"><span>' + esc(t('proj.bicho.link', l)) + '</span>' + ICON_LINK + '</a></div>' : '') +
      '</article>'
    );
  }

  function renderProjects(l) {
    if (projectsGrid) projectsGrid.innerHTML = projects.map(function (p) { return buildProjectCard(p, l); }).join('');
    if (devGrid) devGrid.innerHTML = inDev.map(function (p) { return buildDevCard(p, l); }).join('');
  }
  if (projectsGrid) {
    projectsGrid.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-open-modal]');
      if (trigger) openProjectModal(trigger.getAttribute('data-open-modal'));
    });
  }
  onLang(renderProjects);

  /* ---------- Hero stats (computed from the page itself) ---------- */
  function fillStats() {
    var values = {
      shipped: projects.length,
      dev: inDev.length + $$('.panel').length,                 // workbench projects + the two systems
      freelance: $$('.free-card').length,
      certs: $$('#education .cert-card:not(.in-progress)').length
    };
    $$('[data-stat]').forEach(function (el) { el.textContent = values[el.getAttribute('data-stat')]; });
  }

  /* ============================================================
     CASE-STUDY MODAL
     ============================================================ */
  var modalOverlay = $('#projectModal');
  var modalPanel = modalOverlay ? $('.modal-panel', modalOverlay) : null;
  var modalScroll = $('#modalScroll');
  var modalCloseBtn = $('#modalClose');
  var currentModalProjectId = null;
  var currentGalleryIndex = 0;
  var modalTriggerEl = null;
  var savedScrollY = 0;
  var FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, video[controls], [tabindex]:not([tabindex="-1"])';

  function isVideo(item) { return !!item && /\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(item.src || ''); }

  function galleryMediaHtml(item, l) {
    if (!item) return '';
    var alt = item.altKey ? esc(t(item.altKey, l)) : '';
    if (isVideo(item)) {
      return '<video class="modal-gallery-video" src="' + src(item.src) + '"' + (item.poster ? ' poster="' + src(item.poster) + '"' : '') +
        ' controls playsinline preload="metadata"' + (alt ? ' aria-label="' + alt + '"' : '') + '></video>';
    }
    return '<img src="' + src(item.src) + '" alt="' + alt + '" loading="lazy">';
  }

  function renderModalContent(project, l) {
    if (!modalScroll) return;
    var cs = project.caseStudy;

    var arch = cs.architectureKeys.map(function (k, i) {
      var step = '<div class="modal-flow-step">' + esc(t(k, l)) + '</div>';
      return i === 0 ? step : '<span class="modal-flow-arrow" aria-hidden="true">' + ICON_ARROW_RIGHT + '</span>' + step;
    }).join('');
    var decisions = cs.decisions.map(function (d) {
      return '<div class="modal-decision-item"><p class="modal-decision-q">' + esc(t(d.qKey, l)) + '</p><p class="modal-decision-a">' + esc(t(d.aKey, l)) + '</p></div>';
    }).join('');
    var results = cs.resultKeys.map(function (k) { return '<li>' + ICON_CHECK + '<span>' + esc(t(k, l)) + '</span></li>'; }).join('');

    var media = cs.media || [];
    currentGalleryIndex = 0;
    var thumbs = media.length > 1
      ? '<div class="modal-thumbs">' + media.map(function (m, i) {
          var vid = isVideo(m);
          var img = vid ? m.poster : m.src;
          return '<button type="button" class="modal-thumb' + (i === 0 ? ' active' : '') + '" data-gallery-index="' + i + '" aria-label="' + (i + 1) + '/' + media.length + '">' +
            (img ? '<img src="' + src(img) + '" alt="" loading="lazy">' : '') +
            (vid ? '<span class="modal-thumb-play" aria-hidden="true">' + ICON_PLAY + '</span>' : '') + '</button>';
        }).join('') + '</div>'
      : '';
    var nav = media.length > 1
      ? '<button type="button" class="modal-gallery-nav prev" data-gallery-dir="-1" aria-label="' + esc(t('modal.galleryPrev', l)) + '">' + ICON_ARROW_LEFT + '</button>' +
        '<button type="button" class="modal-gallery-nav next" data-gallery-dir="1" aria-label="' + esc(t('modal.galleryNext', l)) + '">' + ICON_ARROW_RIGHT + '</button>'
      : '';
    var first = media[0] || { src: project.image, altKey: project.imageAltKey };
    var demoBtn = project.demo
      ? '<a href="' + project.demo + '" target="_blank" rel="noopener" class="btn btn-outline"><span>' + esc(t('proj.liveDemo', l)) + '</span>' + ICON_LINK + '</a>' : '';

    function section(label, inner) { return '<div class="modal-section"><h3 class="modal-section-label">' + esc(t(label, l)) + '</h3>' + inner + '</div>'; }

    modalScroll.innerHTML =
      '<div class="modal-header"><span class="modal-category">' + esc(t(project.categoryKey, l)) + '</span>' +
        '<h2 class="modal-title" id="modalTitle">' + esc(t(project.titleKey, l)) + '</h2></div>' +
      '<div class="modal-gallery">' +
        '<div class="modal-gallery-main' + (isVideo(first) ? ' is-video' : '') + '" id="modalGalleryMain">' +
          '<div class="modal-gallery-media" id="modalGalleryMedia">' + galleryMediaHtml(first, l) + '</div>' + nav +
        '</div>' + thumbs +
      '</div>' +
      section('modal.problem', '<p>' + esc(t(cs.problemKey, l)) + '</p>') +
      section('modal.solution', '<p>' + esc(t(cs.solutionKey, l)) + '</p>') +
      section('modal.technologies', '<div class="modal-tech-tags">' + tagsHtml(project.techKeys, l) + '</div>') +
      section('modal.howItWorks', '<div class="modal-flow">' + arch + '</div>') +
      section('modal.decisions', '<div class="modal-decisions">' + decisions + '</div>') +
      section('modal.results', '<ul class="modal-results">' + results + '</ul>') +
      (cs.limitationsKey ? section('modal.limitations', '<p>' + esc(t(cs.limitationsKey, l)) + '</p>') : '') +
      section('modal.application', '<p>' + esc(t(cs.applicationKey, l)) + '</p>') +
      '<div class="modal-links"><a href="' + project.github + '" target="_blank" rel="noopener" class="btn btn-primary"><span>' + esc(t('proj.viewGithub', l)) + '</span>' + ICON_LINK + '</a>' + demoBtn + '</div>';
  }

  function setGalleryIndex(index) {
    var project = findProject(currentModalProjectId);
    if (!project || !modalScroll) return;
    var media = project.caseStudy.media || [];
    if (!media.length) return;
    currentGalleryIndex = ((index % media.length) + media.length) % media.length;
    var item = media[currentGalleryIndex];
    var holder = $('#modalGalleryMedia');
    if (holder) holder.innerHTML = galleryMediaHtml(item, lang());
    var main = $('#modalGalleryMain');
    if (main) { main.classList.remove('zoomed'); main.classList.toggle('is-video', isVideo(item)); }
    $$('.modal-thumb', modalScroll).forEach(function (th, i) { th.classList.toggle('active', i === currentGalleryIndex); });
  }

  function trapFocus(e) {
    if (e.key !== 'Tab' || !modalPanel) return;
    var f = $$(FOCUSABLE, modalPanel);
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function onModalKeydown(e) { if (e.key === 'Escape') closeProjectModal(); else trapFocus(e); }

  function openProjectModal(id) {
    var project = findProject(id);
    if (!project || !modalOverlay) return;
    modalTriggerEl = document.activeElement;
    currentModalProjectId = id;
    renderModalContent(project, lang());
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.top = '-' + savedScrollY + 'px';
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onModalKeydown);
    window.setTimeout(function () { if (modalCloseBtn) modalCloseBtn.focus(); }, 50);
  }
  function closeProjectModal() {
    if (!modalOverlay || !modalOverlay.classList.contains('open')) return;
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    $$('video', modalOverlay).forEach(function (v) { v.pause(); });
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, savedScrollY);
    document.removeEventListener('keydown', onModalKeydown);
    currentModalProjectId = null;
    if (modalTriggerEl && modalTriggerEl.focus) modalTriggerEl.focus();
  }
  onLang(function (l) {
    if (!currentModalProjectId) return;
    var p = findProject(currentModalProjectId);
    if (p) renderModalContent(p, l);
  });
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalOverlay) modalOverlay.addEventListener('click', function (e) { if (e.target === modalOverlay) closeProjectModal(); });
  if (modalScroll) {
    modalScroll.addEventListener('click', function (e) {
      var thumb = e.target.closest('[data-gallery-index]');
      var nav = e.target.closest('[data-gallery-dir]');
      var main = e.target.closest('#modalGalleryMain');
      if (thumb) { setGalleryIndex(parseInt(thumb.getAttribute('data-gallery-index'), 10)); return; }
      if (nav) { setGalleryIndex(currentGalleryIndex + parseInt(nav.getAttribute('data-gallery-dir'), 10)); return; }
      if (main && !main.classList.contains('is-video')) main.classList.toggle('zoomed');
    });
  }

  /* ============================================================
     RÉSUMÉ — the print stylesheet turns the page into a clean PDF
     ============================================================ */
  function printResume() {
    var prev = document.title;
    document.title = t('doc.resumeTitle');
    var restore = function () { document.title = prev; window.removeEventListener('afterprint', restore); };
    window.addEventListener('afterprint', restore);
    window.print();
  }
  $$('[data-action="print"]').forEach(function (b) { b.addEventListener('click', printResume); });

  /* ============================================================
     COMMAND MENU (Ctrl/⌘ + K, or "/")
     ============================================================ */
  var palette = $('#palette');
  var paletteInput = $('#paletteInput');
  var paletteList = $('#paletteList');
  var paletteBtn = $('#paletteBtn');
  var paletteItems = [];      // currently visible, in order
  var paletteIndex = 0;

  function scrollToId(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }

  function paletteCommands() {
    var cmds = [];
    var navWords = {
      systems: 'pipeline n8n agents agentes second brain server servidor content conteudo',
      work: 'projects projetos portfolio case studies bichometria tensorflow computer vision visao computacional neural fine-tuning',
      freelance: 'freelas clients clientes landing page karaoke nosferata',
      about: 'skills stack habilidades tecnologias java python',
      education: 'certificates certificados colegiado leadership faculdade unifacs',
      contact: 'email whatsapp linkedin message mensagem'
    };
    ['systems', 'work', 'freelance', 'about', 'education', 'contact'].forEach(function (id) {
      cmds.push({ group: 'pal.g.nav', label: t('nav.' + id), keywords: navWords[id], icon: 'icon-arrow-right', run: function () { scrollToId(id); } });
    });
    projects.forEach(function (p) {
      cmds.push({ group: 'pal.g.projects', label: t(p.titleKey), keywords: t(p.categoryKey) + ' ' + p.techKeys.map(function (k) { return t(k); }).join(' '), icon: 'icon-badge', run: function () { openProjectModal(p.id); } });
    });
    cmds.push({ group: 'pal.g.actions', label: t(currentTheme() === 'light' ? 'theme.toDark' : 'theme.toLight'), icon: currentTheme() === 'light' ? 'i-moon' : 'i-sun', hint: 'theme', run: toggleTheme });
    cmds.push({ group: 'pal.g.actions', label: t('pal.profile'), keywords: 'profile photo avatar foto perfil war guerra peace paz mode modo', icon: 'i-swap', hint: 'photo', run: openProfilePicker });
    cmds.push({ group: 'pal.g.actions', label: t(lang() === 'pt' ? 'pal.toEn' : 'pal.toPt'), icon: 'i-globe', hint: 'EN / PT', run: function () { setLanguage(lang() === 'pt' ? 'en' : 'pt'); } });
    cmds.push({ group: 'pal.g.actions', label: t('hero.cta.resume'), icon: 'i-print', hint: 'PDF', run: printResume });
    cmds.push({ group: 'pal.g.links', label: 'GitHub', icon: 'icon-github', run: function () { window.open('https://github.com/Guilherme-Lopesz', '_blank', 'noopener'); } });
    cmds.push({ group: 'pal.g.links', label: 'LinkedIn', icon: 'icon-linkedin', run: function () { window.open('https://www.linkedin.com/in/guilhermelopesdias', '_blank', 'noopener'); } });
    cmds.push({ group: 'pal.g.links', label: t('contact.email.title'), icon: 'icon-envelope', run: function () { window.location.href = 'mailto:' + CONTACT_EMAIL; } });
    return cmds;
  }

  function renderPalette(query) {
    var q = (query || '').trim().toLowerCase();
    var all = paletteCommands().filter(function (c) { return !q || (c.label + ' ' + (c.keywords || '')).toLowerCase().indexOf(q) !== -1; });
    paletteItems = all;
    paletteIndex = 0;
    if (!all.length) { paletteList.innerHTML = '<div class="palette-empty">' + esc(t('pal.empty')) + '</div>'; paletteInput.removeAttribute('aria-activedescendant'); return; }
    var html = '', lastGroup = '';
    all.forEach(function (c, i) {
      if (c.group !== lastGroup) { html += '<div class="palette-group" role="presentation">' + esc(t(c.group)) + '</div>'; lastGroup = c.group; }
      html += '<button type="button" class="palette-item" role="option" id="pal-' + i + '" data-i="' + i + '" aria-selected="' + (i === 0) + '" tabindex="-1">' +
        '<svg aria-hidden="true"><use href="#' + c.icon + '"></use></svg><span>' + esc(c.label) + '</span>' + (c.hint ? '<span class="hint">' + esc(c.hint) + '</span>' : '') + '</button>';
    });
    paletteList.innerHTML = html;
    paletteInput.setAttribute('aria-activedescendant', 'pal-0');
  }
  function selectPalette(i, scroll) {
    if (!paletteItems.length) return;
    paletteIndex = (i + paletteItems.length) % paletteItems.length;
    $$('.palette-item', paletteList).forEach(function (el, k) { el.setAttribute('aria-selected', String(k === paletteIndex)); });
    var cur = $('#pal-' + paletteIndex);
    paletteInput.setAttribute('aria-activedescendant', 'pal-' + paletteIndex);
    if (cur && scroll) cur.scrollIntoView({ block: 'nearest' });
  }
  function runPalette(i) {
    var cmd = paletteItems[i];
    if (!cmd) return;
    closePalette();
    window.setTimeout(cmd.run, 30);
  }
  function openPalette() {
    if (!palette || typeof palette.showModal !== 'function' || palette.open) return;
    setMenu(false);
    paletteInput.value = '';
    renderPalette('');
    palette.showModal();
    paletteInput.focus();
  }
  function closePalette() { if (palette && palette.open) palette.close(); }

  if (palette && typeof palette.showModal === 'function') {
    if (paletteBtn) paletteBtn.addEventListener('click', openPalette);
    paletteInput.addEventListener('input', function () { renderPalette(paletteInput.value); });
    paletteInput.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); selectPalette(paletteIndex + 1, true); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); selectPalette(paletteIndex - 1, true); }
      else if (e.key === 'Home') { e.preventDefault(); selectPalette(0, true); }
      else if (e.key === 'End') { e.preventDefault(); selectPalette(paletteItems.length - 1, true); }
      else if (e.key === 'Enter') { e.preventDefault(); runPalette(paletteIndex); }
    });
    paletteList.addEventListener('mousemove', function (e) {
      var el = e.target.closest('.palette-item');
      if (el) { var i = parseInt(el.getAttribute('data-i'), 10); if (i !== paletteIndex) selectPalette(i, false); }
    });
    paletteList.addEventListener('click', function (e) {
      var el = e.target.closest('.palette-item');
      if (el) runPalette(parseInt(el.getAttribute('data-i'), 10));
    });
    palette.addEventListener('click', function (e) { if (e.target === palette) closePalette(); });
    onLang(function () { if (palette.open) renderPalette(paletteInput.value); });

    document.addEventListener('keydown', function (e) {
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || '') || (e.target && e.target.isContentEditable);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette.open ? closePalette() : openPalette(); }
      else if (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); openPalette(); }
    });
  } else if (paletteBtn) {
    paletteBtn.hidden = true;
  }
  var kbd = $('#paletteKbd');
  if (kbd && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) kbd.textContent = '⌘ K';

  /* ---------- Contact form → mailto ---------- */
  var contactForm = $('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = $('#nome').value.trim();
      var mensagem = $('#mensagem').value.trim();
      if (!nome || !mensagem) return;
      var subject = (lang() === 'pt' ? 'Contato via portfólio — ' : 'Portfolio contact — ') + nome;
      window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(mensagem + '\n\n— ' + nome);
    });
  }

  /* ============================================================
     SCENES — battlefield (dark) · quiet field with a sword (light)
     Built from the page's own three color tokens, so they follow
     the palette automatically. Only the war profile shows them.
     ============================================================ */
  var sceneUid = 0;
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function n1(x) { return Math.round(x * 10) / 10; }
  function layerSvg(d, H, inner, top) {
    return '<svg class="layer" style="--d:' + d + '" viewBox="0 0 1600 ' + H + '" preserveAspectRatio="' + (top ? 'xMaxYMin' : 'xMidYMax') + ' slice" aria-hidden="true" focusable="false">' + inner + '</svg>';
  }
  function stop(o, c, a) { return '<stop offset="' + o + '" style="stop-color:var(--' + c + ');stop-opacity:' + a + '"/>'; }

  /* --- WAR --- */
  function warSky(id, v, H, rnd) {
    var ex = { a: 560, b: 1010, c: 760, h: 1330 }[v] || 800, ey = v === 'h' ? 128 : 150;
    var smoke = '';
    for (var i = 0; i < 7; i++) {
      smoke += '<ellipse cx="' + n1(rnd() * 1600) + '" cy="' + n1(H * (0.3 + rnd() * 0.4)) + '" rx="' + n1(130 + rnd() * 150) + '" ry="' + n1(28 + rnd() * 34) + '" style="fill:var(--text-3);fill-opacity:' + n1(0.1 + rnd() * 0.08) + '"/>';
    }
    return '<defs><linearGradient id="' + id + 'g" x1="0" y1="0" x2="0" y2="1">' + stop(0, 'signal', 0) + stop(0.5, 'signal', 0.22) + stop(1, 'human', 0.16) + '</linearGradient>' +
      '<radialGradient id="' + id + 'h">' + stop(0, 'signal', 0.6) + stop(0.28, 'signal', 0.6) + stop(0.5, 'signal', 0.2) + stop(1, 'signal', 0) + '</radialGradient>' +
      '<filter id="' + id + 'b" x="-20%" y="-60%" width="140%" height="220%"><feGaussianBlur stdDeviation="16"/></filter></defs>' +
      '<rect width="1600" height="' + H + '" fill="url(#' + id + 'g)"/>' +
      '<g filter="url(#' + id + 'b)">' + smoke + '</g>' +
      '<circle cx="' + ex + '" cy="' + ey + '" r="220" fill="url(#' + id + 'h)" class="sun-pulse"/>' +
      '<circle cx="' + ex + '" cy="' + ey + '" r="58" style="fill:var(--bg);stroke:var(--signal);stroke-width:2;stroke-opacity:.85"/>';
  }
  function skyline(rnd, base, hmax) {
    var d = 'M0 420', x = 0, win = '';
    while (x < 1600) {
      var w = 36 + rnd() * 84, h = 26 + rnd() * hmax, k = rnd();
      d += ' L' + n1(x) + ' ' + base;
      if (k < 0.28) {
        d += ' L' + n1(x) + ' ' + n1(base - h) + ' L' + n1(x + w * 0.5) + ' ' + n1(base - h - 10 - rnd() * 18) + '
