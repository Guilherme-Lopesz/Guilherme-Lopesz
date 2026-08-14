/* ============================================================
   GUILHERME LOPES DIAS — PORTFOLIO SCRIPT
   Theme toggle · Language toggle (EN/PT) · Mobile nav
   Scroll reveal · Active nav highlighting · WhatsApp contact
   ============================================================ */

(function () {
  'use strict';

  /* ---------- i18n dictionary ---------- */
  var translations = {
  "en": {
    "brand.role": "Computer Science Student — AI & Automation",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.badge": "OPEN TO INTERNATIONAL OPPORTUNITIES",
    "hero.headline.role": "Computer Science Student & Developer",
    "hero.headline.pre": "Building practical systems with",
    "hero.headline.accent": "AI and automation",
    "hero.headline.dot": ".",
    "hero.sub": "Computer Science student in Brazil who builds and ships real projects — a voice-driven AI agent, an encrypted chat platform, an AI-assisted transaction classifier — and is looking for a remote, international junior software engineering role.",
    "hero.ctaPrimary": "View Projects",
    "hero.ctaResume": "Resume",
    "hero.ctaTertiary": "GitHub",
    "hero.stackLabel": "CORE STACK",
    "hero.profileEyebrow": "// developer & problem solver",
    "hero.profileBio": "Computer Science student turning what I learn into practical, working software — currently deepening my work in neural networks and multimodal AI agents.",
    "hero.focusLabel": "FOCUS AREAS",
    "hero.focusValue": "Software Development · AI · Automation",
    "hero.roleLabel": "ROLE",
    "hero.roleValue": "Computer Science Student · Developer",
    "hero.baseLabel": "BASED IN",
    "hero.baseValue": "Brazil — remote-ready",
    "hero.openToLabel": "OPEN TO",
    "hero.openToValue": "Remote junior software engineering · AI-focused roles",

    "trust.label": "CERTIFIED & TRAINED WITH",

    "projects.title": "Selected Work",
    "projects.viewAll": "View all projects on GitHub ↗",

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

    "proj.merlin.title": "Merlin — Voice Agent & Automation",
    "proj.merlin.category": "AI Agents · Automation · Multimodal Systems",
    "proj.merlin.desc": "Multimodal voice agent that integrates real-time AI and automation for hands-free task execution, tuned for low latency.",
    "proj.merlin.imageAlt": "Merlin voice agent cover art",
    "merlin.tech1": "Python",
    "merlin.tech2": "Voice AI",
    "merlin.tech3": "LiveKit",

    "modal.problem": "Problem",
    "modal.solution": "Solution",
    "modal.technologies": "Technologies",
    "modal.howItWorks": "How It Works",
    "modal.decisions": "Key Technical Decisions",
    "modal.results": "Results",
    "modal.limitations": "Limitations",
    "modal.application": "Application",
    "modal.close": "Close",
    "modal.zoomHint": "Click to zoom",
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

    "merlin.problem": "Executing routine tasks through screens and manual input isn't always the fastest or most natural way to get things done.",
    "merlin.solution": "Merlin is a multimodal voice agent that integrates real-time AI with automation workflows to execute tasks hands-free, tuned for low latency.",
    "merlin.arch1": "Voice input",
    "merlin.arch2": "Real-time AI processing",
    "merlin.arch4": "Task execution",
    "merlin.decision2q": "Why prioritize low latency?",
    "merlin.decision2a": "A voice agent only feels natural to use if responses are fast — latency was treated as a core requirement, not an afterthought.",
    "merlin.result1": "Hands-free execution of automated tasks via voice",
    "merlin.result2": "Real-time AI processing integrated with workflow automation",
    "merlin.result3": "Tuned specifically for low-latency interaction",
    "merlin.application": "Fits personal productivity automation, hands-free assistants, or any workflow where voice is a faster interface than a screen.",
    "merlin.limitations": "Built and tuned through personal, hands-on testing rather than a deployed, continuously-running service — reliability under sustained real-world use hasn't been formally measured yet.",

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
    "vidascampo.arch4": "Ranking (LocalStorage)",
    "vidascampo.decision1q": "Why build it with no external dependencies?",
    "vidascampo.decision1a": "Using only native HTML, CSS and JavaScript keeps the game lightweight, fast to load and easy to run anywhere without install steps — important for a tool aimed at students and rural producers.",
    "vidascampo.decision2q": "Why separate 'Bovine' (beginner) and 'Ovine' (advanced) modes?",
    "vidascampo.decision2a": "Structuring difficulty by species lets the game onboard beginners gradually before introducing the more advanced sheep-management content.",
    "vidascampo.result1": "7 complete stages covering the perinatal cycle, from pre-birth to farm indicators",
    "vidascampo.result2": "Adaptive quiz and scoring system with streak multipliers and clinical case bonuses",
    "vidascampo.result3": "Persistent Top 10 ranking stored locally in the browser",
    "vidascampo.application": "Fits veterinary and animal science education, farm-worker training, or any context where practicing neonatal management decisions beats reading about them.",
    "vidascampo.limitations": "Progress and rankings are stored in the browser's LocalStorage rather than a backend database, so results don't sync across devices and are lost if the browser cache is cleared.",

    "about.title": "A little about me.",
    "about.card1.title": "Who I Am & What I Build",
    "about.card1.body": "Computer Science student in Brazil who learns by building, testing and documenting systems — a voice-driven AI agent, an encrypted chat platform, an AI-assisted transaction classifier, an algorithm benchmarking tool and an interactive learning simulation are all things I've <strong>designed, implemented and documented</strong> myself.",
    "about.card2.title": "What I've Explored",
    "about.card2.body": "Hands-on exploration of <strong>penetration testing</strong> and vulnerability analysis, including <strong>NFC/RFID</strong> systems with Proxmark3. Currently deepening my knowledge of <strong>neural networks and multimodal AI agents</strong>, applying what I learn directly to project work.",
    "about.card3.title": "What's Next",
    "about.card3.body": "My professional focus is <strong>software development, AI and automation</strong>. Cybersecurity remains an academic and technical area of interest I keep exploring through projects like Nexus. I'm looking for a remote, international <strong>junior software engineering or AI-focused opportunity</strong> where I can keep building, testing and learning from real feedback.",
    "about.card3.cta": "Explore What's Next →",

    "future.eyebrow": "// future-directions",
    "future.title": "Building for what comes next.",
    "future.body": "These are directions I want to explore next — not a fixed plan, but the areas I'm most curious about right now.",
    "future.item1.title": "Computer Vision",
    "future.item1.body": "Practical, experimental projects involving image processing, neural networks and performance evaluation. I want to explore how vision systems perceive and interpret the world, and get hands-on with building and evaluating my own models.",
    "future.item2.title": "Cybersecurity",
    "future.item2.body": "More hands-on projects and practice in security, architecture, analysis and experimentation. I want to keep sharpening how I think about systems from an attacker's and a defender's perspective.",
    "future.item3.title": "SaaS & Product Engineering",
    "future.item3.body": "Building my own SaaS product and exploring the full product cycle — development, design decisions, and delivery. I want to learn what it takes to ship and maintain something end to end.",
    "future.item4.title": "AI & Intelligent Systems",
    "future.item4.body": "Going deeper into neural networks, multimodal systems and how intelligent systems are evaluated. I want to better understand what makes these systems reliable, not just functional.",
    "future.footer": "The roadmap evolves as I learn, experiment and discover new problems worth solving.",

    "skills.title": "Technical Arsenal",
    "skills.sub": "Skills built in practice — from theory to functional product.",

    "skills.hardTitle": "Hard Skills",
    "skills.blockLang": "Languages",
    "skills.blockLang.tag1": "Python",
    "skills.blockLang.tag2": "TypeScript",
    "skills.blockLang.tag3": "SQL",
    "skills.blockSwe": "Software Engineering",
    "skills.blockSwe.tag1": "Data Structures & Algorithms",
    "skills.blockSwe.tag2": "Git & GitHub",
    "skills.blockSwe.tag3": "Linux (Basics)",
    "skills.block1": "AI & Intelligent Systems",
    "skills.block1.tag1": "Multimodal Voice Agents",
    "skills.block1.tag2": "OpenAI / Gemini / Grok APIs",
    "skills.block1.tag3": "Prompt Engineering",
    "skills.blockAuto": "Automation",
    "skills.blockAuto.tag1": "n8n · Make.io · ManyChat",
    "skills.blockAuto.tag2": "Workflow Automation",
    "skills.blockAdd": "Additional",
    "skills.blockAdd.tag1": "NFC/RFID Pentesting (Mifare 1k/4k)",
    "skills.blockAdd.tag2": "Proxmark3",
    "skills.blockAdd.tag3": "ISO 14443-A Sniffing & Analysis",
    "skills.blockAdd.tag4": "AES-128 Encryption",
    "skills.blockAdd.tag5": "Power BI",
    "skills.blockAdd.tag6": "Excel (Data Analysis)",
    "skills.blockAdd.tag7": "Microsoft Office Suite",
    "skills.cta.text": "This is just the front-end.",
    "skills.cta.link": "Explore the back-end on LinkedIn",

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

    "contact.title": "Contact",
    "contact.sub": "Interested in working together?",
    "contact.form.name": "NAME",
    "contact.form.namePh": "Your name",
    "contact.form.message": "MESSAGE",
    "contact.form.messagePh": "Type your message",
    "contact.form.submit": "Send Email",
    "contact.email.title": "Email",
    "contact.email.body": "Primary contact method.",
    "contact.email.link": "Send an email ↗",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.body": "Professional profile.",
    "contact.linkedin.link": "View profile ↗",
    "contact.github.title": "GitHub",
    "contact.github.body": "Projects & source code.",
    "contact.github.link": "View repositories ↗",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.body": "Direct contact.",
    "contact.whatsapp.link": "Open chat ↗",

    "footer.note": "built with intent, from Brazil to the world.",
    "footer.top": "Back to top ↑",

    "meta.title": "Guilherme Lopes Dias | Computer Science Student | AI & Automation",
    "meta.description": "Computer Science student and early-career software developer building practical projects across AI and automation, with cybersecurity as an area of academic and technical interest. Open to international opportunities."
  },
  "pt": {
    "brand.role": "Estudante de Ciência da Computação — IA & Automação",
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.education": "Formação",
    "nav.contact": "Contato",

    "hero.badge": "ABERTO A OPORTUNIDADES INTERNACIONAIS",
    "hero.headline.role": "Estudante de Ciência da Computação & Desenvolvedor",
    "hero.headline.pre": "Construindo sistemas práticos com",
    "hero.headline.accent": "IA e automação",
    "hero.headline.dot": ".",
    "hero.sub": "Estudante de Ciência da Computação no Brasil que constrói e publica projetos reais — um agente de voz com IA, uma plataforma de chat criptografada, um classificador de transações com IA — e busca uma vaga júnior remota e internacional em engenharia de software.",
    "hero.ctaPrimary": "Ver Projetos",
    "hero.ctaResume": "Currículo",
    "hero.ctaTertiary": "GitHub",
    "hero.stackLabel": "STACK PRINCIPAL",
    "hero.profileEyebrow": "// desenvolvedor & solucionador de problemas",
    "hero.profileBio": "Estudante de Ciência da Computação transformando aprendizado em software funcional — atualmente aprofundando meu trabalho em redes neurais e agentes de IA multimodais.",
    "hero.focusLabel": "ÁREAS DE FOCO",
    "hero.focusValue": "Desenvolvimento de Software · IA · Automação",
    "hero.roleLabel": "PAPEL",
    "hero.roleValue": "Estudante de Ciência da Computação · Desenvolvedor",
    "hero.baseLabel": "LOCALIZAÇÃO",
    "hero.baseValue": "Brasil — pronto para remoto",
    "hero.openToLabel": "ABERTO A",
    "hero.openToValue": "Engenharia de software júnior remota · Vagas focadas em IA",

    "trust.label": "CERTIFICADO E TREINADO POR",

    "projects.title": "Projetos Selecionados",
    "projects.viewAll": "Ver todos os projetos no GitHub ↗",

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

    "proj.merlin.title": "Merlin — Agente de Voz e Automação",
    "proj.merlin.category": "Agentes de IA · Automação · Sistemas Multimodais",
    "proj.merlin.desc": "Agente de voz multimodal que integra IA em tempo real e automação para execução de tarefas hands-free, otimizado para baixa latência.",
    "proj.merlin.imageAlt": "Capa do agente de voz Merlin",
    "merlin.tech1": "Python",
    "merlin.tech2": "IA de Voz",
    "merlin.tech3": "n8n",

    "modal.problem": "Problema",
    "modal.solution": "Solução",
    "modal.technologies": "Tecnologias",
    "modal.howItWorks": "Como Funciona",
    "modal.decisions": "Decisões Técnicas Chave",
    "modal.results": "Resultados",
    "modal.limitations": "Limitações",
    "modal.application": "Aplicação",
    "modal.close": "Fechar",
    "modal.zoomHint": "Clique para ampliar",
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

    "merlin.problem": "Executar tarefas rotineiras por telas e entrada manual nem sempre é a forma mais rápida ou natural de realizar as coisas.",
    "merlin.solution": "O Merlin é um agente de voz multimodal que integra IA em tempo real com fluxos de automação para executar tarefas hands-free, otimizado para baixa latência.",
    "merlin.arch1": "Entrada de voz",
    "merlin.arch2": "Processamento de IA em tempo real",
    "merlin.arch3": "Fluxo de automação (n8n)",
    "merlin.arch4": "Execução da tarefa",
    "merlin.decision1q": "Por que n8n como camada de automação?",
    "merlin.decision1a": "O n8n possibilitou conectar intenções por voz a ações e integrações reais sem construir cada conector do zero.",
    "merlin.decision2q": "Por que priorizar baixa latência?",
    "merlin.decision2a": "Um agente de voz só parece natural de usar se as respostas forem rápidas — a latência foi tratada como requisito central, não um detalhe secundário.",
    "merlin.result1": "Execução de tarefas automatizadas por voz, sem uso das mãos",
    "merlin.result2": "Processamento de IA em tempo real integrado à automação de fluxos",
    "merlin.result3": "Otimizado especificamente para interação de baixa latência",
    "merlin.application": "Serve para automação de produtividade pessoal, assistentes hands-free, ou qualquer fluxo em que a voz seja uma interface mais rápida do que uma tela.",
    "merlin.limitations": "Construído e ajustado por meio de testes pessoais e práticos, não como um serviço implantado em produção contínua — a confiabilidade sob uso real sustentado ainda não foi medida formalmente.",

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
    "vidascampo.arch4": "Ranking (LocalStorage)",
    "vidascampo.decision1q": "Por que construir sem dependências externas?",
    "vidascampo.decision1a": "Usar apenas HTML, CSS e JavaScript nativos mantém o jogo leve, rápido de carregar e fácil de rodar em qualquer lugar sem etapas de instalação — importante para uma ferramenta voltada a estudantes e produtores rurais.",
    "vidascampo.decision2q": "Por que separar os modos 'Bovinos' (iniciante) e 'Ovinos' (avançado)?",
    "vidascampo.decision2a": "Estruturar a dificuldade por espécie permite introduzir o jogador aos poucos antes de apresentar o conteúdo mais avançado de manejo ovino.",
    "vidascampo.result1": "7 etapas completas cobrindo o ciclo perinatal, da pré-parição aos indicadores da fazenda",
    "vidascampo.result2": "Sistema de quiz adaptativo e pontuação com multiplicador de streak e bônus por casos clínicos",
    "vidascampo.result3": "Ranking Top 10 persistente, armazenado localmente no navegador",
    "vidascampo.application": "Serve para educação em Medicina Veterinária e Zootecnia, capacitação de trabalhadores rurais, ou qualquer contexto em que praticar decisões de manejo neonatal seja mais eficaz do que apenas ler sobre elas.",
    "vidascampo.limitations": "O progresso e o ranking são armazenados no LocalStorage do navegador, não em um banco de dados — os resultados não sincronizam entre dispositivos e são perdidos se o cache do navegador for limpo.",

    "about.title": "Um pouco sobre mim.",
    "about.card1.title": "Quem Sou & O Que Construo",
    "about.card1.body": "Estudante de Ciência da Computação no Brasil que aprende construindo, testando e documentando sistemas — um agente de voz com IA, uma plataforma de chat criptografada, um classificador de transações com IA, uma ferramenta de benchmarking de algoritmos e uma simulação interativa de aprendizagem são projetos que <strong>projetei, implementei e documentei</strong> sozinho.",
    "about.card2.title": "O Que Já Explorei",
    "about.card2.body": "Atuação prática em <strong>testes de intrusão (pentest)</strong> e análise de vulnerabilidades, incluindo sistemas <strong>NFC/RFID</strong> com Proxmark3. Atualmente aprofundo meu conhecimento em <strong>redes neurais e agentes de IA multimodais</strong>, aplicando o que aprendo diretamente em projetos.",
    "about.card3.title": "Próximos Passos",
    "about.card3.body": "Meu foco profissional é <strong>desenvolvimento de software, IA e automação</strong>. Cibersegurança segue como uma área de interesse acadêmico e técnico que continuo explorando em projetos como o Nexus. Estou em busca de uma oportunidade remota e internacional em <strong>engenharia de software júnior ou vagas focadas em IA</strong> onde eu possa continuar construindo, testando e aprendendo com feedback real.",
    "about.card3.cta": "Ver Próximos Passos →",

    "future.eyebrow": "// future-directions",
    "future.title": "Construindo o que vem a seguir.",
    "future.body": "Estas são direções que quero explorar a seguir — não um plano fixo, mas as áreas que mais despertam minha curiosidade agora.",
    "future.item1.title": "Visão Computacional",
    "future.item1.body": "Projetos práticos e experimentais envolvendo processamento de imagens, redes neurais e avaliação de desempenho. Quero explorar como sistemas de visão percebem e interpretam o mundo, e colocar a mão na massa construindo e avaliando meus próprios modelos.",
    "future.item2.title": "Cibersegurança",
    "future.item2.body": "Mais projetos e prática hands-on em segurança, arquitetura, análise e experimentação. Quero continuar aprimorando como penso sobre sistemas tanto da perspectiva de ataque quanto de defesa.",
    "future.item3.title": "SaaS & Engenharia de Produto",
    "future.item3.body": "Criar meu próprio SaaS e explorar o ciclo completo de produto — desenvolvimento, decisões de design e entrega. Quero aprender o que é preciso para lançar e manter algo do início ao fim.",
    "future.item4.title": "IA & Sistemas Inteligentes",
    "future.item4.body": "Aprofundar redes neurais, sistemas multimodais e como sistemas inteligentes são avaliados. Quero entender melhor o que torna esses sistemas confiáveis, não apenas funcionais.",
    "future.footer": "O roadmap evolui conforme eu aprendo, experimento e descubro novos problemas que valem a pena resolver.",

    "skills.title": "Arsenal Técnico",
    "skills.sub": "Competências construídas na prática — da teoria ao produto funcional.",

    "skills.hardTitle": "Hard Skills",
    "skills.blockLang": "Linguagens",
    "skills.blockLang.tag1": "Python",
    "skills.blockLang.tag2": "TypeScript",
    "skills.blockLang.tag3": "SQL",
    "skills.blockSwe": "Engenharia de Software",
    "skills.blockSwe.tag1": "Estruturas de Dados & Algoritmos",
    "skills.blockSwe.tag2": "Git & GitHub",
    "skills.blockSwe.tag3": "Linux (Básico)",
    "skills.block1": "IA & Sistemas Inteligentes",
    "skills.block1.tag1": "Agentes de Voz Multimodais",
    "skills.block1.tag2": "APIs OpenAI / Gemini / Grok",
    "skills.block1.tag3": "Engenharia de Prompt",
    "skills.blockAuto": "Automação",
    "skills.blockAuto.tag1": "n8n · Make.io · ManyChat",
    "skills.blockAuto.tag2": "Automação de Fluxos",
    "skills.blockAdd": "Adicional",
    "skills.blockAdd.tag1": "Pentest NFC/RFID (Mifare 1k/4k)",
    "skills.blockAdd.tag2": "Proxmark3",
    "skills.blockAdd.tag3": "Sniffing & Análise ISO 14443-A",
    "skills.blockAdd.tag4": "Criptografia AES-128",
    "skills.blockAdd.tag5": "Power BI",
    "skills.blockAdd.tag6": "Excel (Análise de Dados)",
    "skills.blockAdd.tag7": "Pacote Microsoft Office",
    "skills.cta.text": "Isso é apenas o front-end.",
    "skills.cta.link": "Explore o back-end no LinkedIn",

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

    "contact.title": "Contato",
    "contact.sub": "Interessado em trabalharmos juntos?",
    "contact.form.name": "NOME",
    "contact.form.namePh": "Seu nome",
    "contact.form.message": "MENSAGEM",
    "contact.form.messagePh": "Digite sua mensagem",
    "contact.form.submit": "Enviar Email",
    "contact.email.title": "Email",
    "contact.email.body": "Principal forma de contato.",
    "contact.email.link": "Enviar um email ↗",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.body": "Perfil profissional.",
    "contact.linkedin.link": "Ver perfil ↗",
    "contact.github.title": "GitHub",
    "contact.github.body": "Projetos e código-fonte.",
    "contact.github.link": "Ver repositórios ↗",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.body": "Contato direto.",
    "contact.whatsapp.link": "Abrir conversa ↗",

    "footer.note": "construído com intenção, do Brasil para o mundo.",
    "footer.top": "Voltar ao topo ↑",

    "meta.title": "Guilherme Lopes Dias | Estudante de Ciência da Computação | IA & Automação",
    "meta.description": "Estudante de Ciência da Computação e desenvolvedor em início de carreira, construindo projetos práticos em IA e automação, com cibersegurança como área de interesse acadêmico e técnico. Aberto a oportunidades internacionais."
  }
};

  var htmlKeys = ['about.card1.body', 'about.card2.body', 'about.card3.body'];

  /* ============================================================
     SAFE DOM-BUILDING HELPERS
     Every function below that renders content pulled from the
     `translations` dictionary or the `projects` array (further down)
     builds real DOM nodes through these helpers instead of assembling
     HTML strings and assigning them via innerHTML. All of that content
     is static and developer-authored today, but going through
     createElement/textContent/setAttribute means it stays safe even if
     a future edit ever pipes in a URL parameter, a CMS field, or any
     other string that isn't fully trusted — the browser will always
     treat it as literal text, never as markup to parse.
     ============================================================ */

  /* Creates an element, applies attributes via setAttribute (className
     for `class`), and appends children. String children become text
     nodes — never parsed as HTML — so this is safe to call with any
     translation or project-data value. */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (attrs[key] == null) return;
        if (key === 'class') node.className = attrs[key];
        else node.setAttribute(key, attrs[key]);
      });
    }
    (children || []).forEach(function (child) {
      if (child == null) return;
      node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
    });
    return node;
  }

  /* Parses a FIXED, hardcoded markup string — the sprite-icon constants
     defined below (ICON_LINK, PROJECT_ICONS, etc.) — into a real node.
     Must only ever be called with one of those constants, never with a
     translation string, a project field, or anything else that isn't
     literally written in this file, since <template> parsing does not
     distinguish trusted from untrusted markup. */
  var _trustedTemplate = document.createElement('template');
  function trustedNode(svgString) {
    _trustedTemplate.innerHTML = svgString;
    var node = _trustedTemplate.content.firstElementChild
      ? _trustedTemplate.content.firstElementChild.cloneNode(true)
      : document.createTextNode('');
    _trustedTemplate.innerHTML = '';
    return node;
  }

  /* Renders a translation string that may contain a single <strong>
     span (the "about" bios are the only case) without ever handing
     that string to innerHTML. Only the literal <strong>...</strong>
     wrapper is recognized; everything else — including a stray "<" or
     ">" a future translation edit might introduce — is inserted as
     plain text instead of being parsed as markup. */
  var STRONG_TAG_RE = /<strong>([\s\S]*?)<\/strong>/g;
  function renderRichText(targetEl, text) {
    targetEl.textContent = '';
    var lastIndex = 0;
    var match;
    STRONG_TAG_RE.lastIndex = 0;
    while ((match = STRONG_TAG_RE.exec(text)) !== null) {
      if (match.index > lastIndex) {
        targetEl.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }
      targetEl.appendChild(el('strong', null, [match[1]]));
      lastIndex = STRONG_TAG_RE.lastIndex;
    }
    if (lastIndex < text.length) {
      targetEl.appendChild(document.createTextNode(text.slice(lastIndex)));
    }
  }

  /* ---------- Theme ---------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var THEME_KEY = 'guilherme-portfolio-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (saved === 'dark-green' || saved === 'dark-minimal') {
      applyTheme(saved);
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') || 'dark-green';
      applyTheme(current === 'dark-green' ? 'dark-minimal' : 'dark-green');
    });
  }
  initTheme();

  /* ---------- Language ---------- */
  var LANG_KEY = 'guilherme-portfolio-lang';
  var langButtons = document.querySelectorAll('.lang-btn');

  function setLanguage(lang) {
    var dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      if (dict[key] === undefined) return;
      if (htmlKeys.indexOf(key) !== -1) {
        renderRichText(node, dict[key]);
      } else {
        node.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (node) {
      var key = node.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) node.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (node) {
      var key = node.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) node.setAttribute('aria-label', dict[key]);
    });

    langButtons.forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}

    if (dict['meta.title']) document.title = dict['meta.title'];
    if (dict['meta.description']) {
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', dict['meta.description']);
    }

    /* Dynamic, data-driven content (project grid + open modal, if any)
       is re-rendered here so it stays in sync with the selected language. */
    if (typeof renderProjectGrid === 'function') renderProjectGrid(lang);
    if (typeof refreshOpenModal === 'function') refreshOpenModal(lang);
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  (function initLanguage() {
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
    if (saved === 'en' || saved === 'pt') {
      setLanguage(saved);
    }
  })();

  /* ---------- Mobile nav ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');

  function closeMenu() {
    if (!mainNav) return;
    mainNav.classList.remove('open');
    if (menuToggle) {
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = document.querySelectorAll('main section[id], main[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (sec) { navObserver.observe(sec); });
  }

  /* ---------- Scroll reveal ----------
     Skipped when the user prefers reduced motion: the CSS already
     neutralizes the transition itself in that case (see the
     prefers-reduced-motion block in styles_copy.css), but there's no
     reason to still pay for an observer per element — elements are
     just marked visible immediately instead, same as the no-
     IntersectionObserver-support fallback below. */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length && !prefersReducedMotion()) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (item, i) {
      item.style.transitionDelay = ((i % 3) * 70) + 'ms';
      revealObserver.observe(item);
    });
  } else {
    revealEls.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* ---------- Contact form -> Email ---------- */
  var contactForm = document.getElementById('contactForm');
  var CONTACT_EMAIL = 'guilhermelopes.dias07@outlook.com';

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var nome = document.getElementById('nome').value.trim();
      var mensagem = document.getElementById('mensagem').value.trim();
      if (!nome || !mensagem) return;

      var currentLang = document.documentElement.lang === 'pt-br' ? 'pt' : 'en';
      var subject = currentLang === 'pt'
        ? 'Contato via portfólio — ' + nome
        : 'Portfolio contact — ' + nome;
      var body = mensagem + '\n\n— ' + nome;

      var url = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = url;
    });
  }

  /* ============================================================
     PROJECTS DATA
     Single source of truth for the project grid and the case
     study modal — both render from this array. To add a future
     project (e.g. once "Vidas no Campo" or "GraphRout Analyzer"
     have real, verified details):
       1. Add an entry below with its real title/category/description/
          technologies/links (see giro/nexus/merlin for the shape).
       2. Add the matching translation keys (en + pt) to the
          `translations` dictionary above.
       3. Optionally add a small icon for it to PROJECT_ICONS.
     No other file needs to change.
     ============================================================ */
  var projects = [
    {
      id: 'merlin',
      titleKey: 'proj.merlin.title',
      categoryKey: 'proj.merlin.category',
      descKey: 'proj.merlin.desc',
      image: 'img/merlim.mae1.jpeg',
      imageAltKey: 'proj.merlin.imageAlt',
      techKeys: ['merlin.tech1', 'merlin.tech2', 'merlin.tech3'],
      github: 'https://github.com/Guilherme-Lopesz/Merlin-voice-agent',
      demo: null,
      caseStudy: {
        problemKey: 'merlin.problem',
        solutionKey: 'merlin.solution',
        architectureKeys: ['merlin.arch1', 'merlin.arch2', 'merlin.arch3', 'merlin.arch4'],
        decisions: [
          { qKey: 'merlin.decision1q', aKey: 'merlin.decision1a' },
          { qKey: 'merlin.decision2q', aKey: 'merlin.decision2a' }
        ],
        resultKeys: ['merlin.result1', 'merlin.result2', 'merlin.result3'],
        applicationKey: 'merlin.application',
        limitationsKey: 'merlin.limitations',
        media: [{ src: 'video/merlin-em-breve.mp4', altKey: 'proj.merlin.imageAlt' }]
      }
    },
    {
      id: 'nexus',
      titleKey: 'proj.nexus.title',
      categoryKey: 'proj.nexus.category',
      descKey: 'proj.nexus.desc',
      image: 'img/nexus-interface.png',
      imageAltKey: 'proj.nexus.imageAlt',
      techKeys: ['nexus.tech1', 'nexus.tech2', 'nexus.tech3', 'nexus.tech4'],
      github: 'https://github.com/Guilherme-Lopesz/Nexus',
      /* No Live Demo button: the only demo available is served over an
         unencrypted IP:port (http://147.15.106.168:8080), which reads as
         unpolished on a security-focused portfolio. Set this to a real
         https:// domain once a stable one exists. */
      demo: null,
      caseStudy: {
        problemKey: 'nexus.problem',
        solutionKey: 'nexus.solution',
        architectureKeys: ['nexus.arch1', 'nexus.arch2', 'nexus.arch3', 'nexus.arch4'],
        decisions: [
          { qKey: 'nexus.decision1q', aKey: 'nexus.decision1a' },
          { qKey: 'nexus.decision2q', aKey: 'nexus.decision2a' }
        ],
        resultKeys: ['nexus.result1', 'nexus.result2', 'nexus.result3'],
        applicationKey: 'nexus.application',
        limitationsKey: 'nexus.limitations',
        media: [{ src: 'video/nexus-video2.mp4', altKey: 'proj.nexus.imageAlt' }]
      }
    },
    {
      id: 'graphroute',
      titleKey: 'proj.graphroute.title',
      categoryKey: 'proj.graphroute.category',
      descKey: 'proj.graphroute.desc',
      image: 'img/grafos.png',
      imageAltKey: 'proj.graphroute.imageAlt',
      techKeys: ['graphroute.tech1', 'graphroute.tech2', 'graphroute.tech3', 'graphroute.tech4'],
      github: 'https://github.com/Guilherme-Lopesz/graphroute-analyzer',
      demo: null,
      caseStudy: {
        problemKey: 'graphroute.problem',
        solutionKey: 'graphroute.solution',
        architectureKeys: ['graphroute.arch1', 'graphroute.arch2', 'graphroute.arch3', 'graphroute.arch4'],
        decisions: [
          { qKey: 'graphroute.decision1q', aKey: 'graphroute.decision1a' },
          { qKey: 'graphroute.decision2q', aKey: 'graphroute.decision2a' }
        ],
        resultKeys: ['graphroute.result1', 'graphroute.result2', 'graphroute.result3'],
        applicationKey: 'graphroute.application',
        limitationsKey: 'graphroute.limitations',
        media: [{ src: 'video/rotas.mp4', altKey: 'proj.graphroute.imageAlt' }]
      }
    },
    {
      id: 'giro',
      titleKey: 'proj.giro.title',
      categoryKey: 'proj.giro.category',
      descKey: 'proj.giro.desc',
      image: 'img/Giro-tela-inicial.png',
      imageAltKey: 'proj.giro.imageAlt',
      techKeys: ['giro.tech1', 'giro.tech2', 'giro.tech3'],
      github: 'https://github.com/Guilherme-Lopesz/Classificador-Inteligente-de-Transa-es',
      demo: null,
      caseStudy: {
        problemKey: 'giro.problem',
        solutionKey: 'giro.solution',
        architectureKeys: ['giro.arch1', 'giro.arch2', 'giro.arch3'],
        decisions: [
          { qKey: 'giro.decision1q', aKey: 'giro.decision1a' },
          { qKey: 'giro.decision2q', aKey: 'giro.decision2a' }
        ],
        resultKeys: ['giro.result1', 'giro.result2', 'giro.result3'],
        applicationKey: 'giro.application',
        limitationsKey: 'giro.limitations',
        media: [{ src: 'video/Giro-Readme-github.mp4', altKey: 'proj.giro.imageAlt', type: 'video' }]
      }
    },
    {
      id: 'vidascampo',
      titleKey: 'proj.vidascampo.title',
      categoryKey: 'proj.vidascampo.category',
      descKey: 'proj.vidascampo.desc',
      image: 'img/vidas-do-campo.png',
      imageAltKey: 'proj.vidascampo.imageAlt',
      techKeys: ['vidascampo.tech1', 'vidascampo.tech2', 'vidascampo.tech3', 'vidascampo.tech4'],
      github: 'https://github.com/Guilherme-Lopesz/vidas-do-campo2',
      demo: null,
      caseStudy: {
        problemKey: 'vidascampo.problem',
        solutionKey: 'vidascampo.solution',
        architectureKeys: ['vidascampo.arch1', 'vidascampo.arch2', 'vidascampo.arch3', 'vidascampo.arch4'],
        decisions: [
          { qKey: 'vidascampo.decision1q', aKey: 'vidascampo.decision1a' },
          { qKey: 'vidascampo.decision2q', aKey: 'vidascampo.decision2a' }
        ],
        resultKeys: ['vidascampo.result1', 'vidascampo.result2', 'vidascampo.result3'],
        applicationKey: 'vidascampo.application',
        limitationsKey: 'vidascampo.limitations',
        media: [{ src: 'video/merlin-em-breve.mp4', altKey: 'proj.vidascampo.imageAlt' }]
      }
    }
  ];

  var PROJECT_ICONS = {
    giro: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-5 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-5 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/></svg>',
    nexus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.033.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39q-1.286-.445-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.531 0-1.552.223-2.662.524z"/></svg>',
    merlin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 3a5 5 0 0 0-5 5 .5.5 0 0 1-1 0 6 6 0 1 1 12 0 .5.5 0 0 1-1 0 5 5 0 0 0-5-5m0 2a3 3 0 0 0-3 3 .5.5 0 0 1-1 0 4 4 0 1 1 8 0 .5.5 0 0 1-1 0 3 3 0 0 0-3-3m1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg>',
    graphroute: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="3" cy="3.2" r="1.8" fill="currentColor" stroke="none"/><circle cx="13" cy="3.2" r="1.8" fill="currentColor" stroke="none"/><circle cx="8" cy="13" r="1.8" fill="currentColor" stroke="none"/><line x1="4.6" y1="3.6" x2="11.4" y2="3.6"/><line x1="4" y1="4.4" x2="7.3" y2="11.4"/><line x1="12" y1="4.4" x2="8.7" y2="11.4"/></svg>',
    vidascampo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>'
  };

  /* Icon constants reference the sprite defined in index.html (see the
     hidden <svg><defs> block right after <body>), instead of carrying
     full inline path data on every render call. */
  var ICON_LINK = '<svg aria-hidden="true"><use href="#icon-external-link"></use></svg>';
  var ICON_ARROW_LEFT = '<svg aria-hidden="true"><use href="#icon-arrow-left"></use></svg>';
  var ICON_ARROW_RIGHT = '<svg aria-hidden="true"><use href="#icon-arrow-right"></use></svg>';
  var ICON_CHECK = '<svg aria-hidden="true"><use href="#icon-check"></use></svg>';
  var ICON_PLAY = '<svg aria-hidden="true"><use href="#icon-play"></use></svg>';

  function t(key, lang) {
    var dict = translations[lang] || translations.en;
    return dict[key] !== undefined ? dict[key] : (translations.en[key] || '');
  }

  function currentLangCode() {
    return document.documentElement.lang === 'pt-br' ? 'pt' : 'en';
  }

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function findProject(id) {
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].id === id) return projects[i];
    }
    return null;
  }

  /* ---------- Project grid: render ----------
     Renders every project directly as a static grid (see #projectsGrid
     in index.html) so recruiters can see all featured work at a glance,
     with no interaction required to browse projects. "View Case Study"
     opens the modal defined further down. */
  var projectsGrid = document.getElementById('projectsGrid');

  function buildProjectCard(project, lang) {
    var tags = buildTechTagsNode(project.techKeys, lang);

    var iconMarkup = PROJECT_ICONS[project.id];
    var media = el('div', { class: 'project-media' }, [
      el('img', { src: project.image, alt: t(project.imageAltKey, lang), loading: 'lazy' }),
      el('div', { class: 'project-media-overlay', 'aria-hidden': 'true' }),
      el('span', { class: 'project-icon', 'aria-hidden': 'true' }, iconMarkup ? [trustedNode(iconMarkup)] : null)
    ]);

    var links = [
      el('a', { href: project.github, target: '_blank', rel: 'noopener noreferrer', class: 'project-link' }, [
        el('span', null, [t('proj.viewGithub', lang)]),
        trustedNode(ICON_LINK)
      ])
    ];
    if (project.demo) {
      links.push(el('a', { href: project.demo, target: '_blank', rel: 'noopener noreferrer', class: 'project-link' }, [
        el('span', null, [t('proj.liveDemo', lang)]),
        trustedNode(ICON_LINK)
      ]));
    }
    links.push(el('button', { type: 'button', class: 'project-link', 'data-open-modal': project.id }, [
      el('span', null, [t('proj.viewCaseStudy', lang)]),
      trustedNode(ICON_ARROW_RIGHT)
    ]));

    var body = el('div', { class: 'project-body' }, [
      el('h3', null, [t(project.titleKey, lang)]),
      el('p', null, [t(project.descKey, lang)]),
      el('div', { class: 'project-tags' }, tags),
      el('div', { class: 'project-links' }, links)
    ]);

    return el('article', { class: 'project-card', 'data-project-id': project.id }, [media, body]);
  }

  function renderProjectGrid(lang) {
    if (!projectsGrid) return;
    lang = lang || currentLangCode();
    var fragment = document.createDocumentFragment();
    projects.forEach(function (project) {
      fragment.appendChild(buildProjectCard(project, lang));
    });
    // A single replaceChildren + one fragment append means one reflow
    // for the whole grid instead of one per card.
    projectsGrid.replaceChildren(fragment);
  }

  if (projectsGrid) {
    projectsGrid.addEventListener('click', function (event) {
      var trigger = event.target.closest('[data-open-modal]');
      if (trigger) openProjectModal(trigger.getAttribute('data-open-modal'));
    });
  }

  /* ---------- Project case-study modal ---------- */
  var modalOverlay = document.getElementById('projectModal');
  var modalPanel = modalOverlay ? modalOverlay.querySelector('.modal-panel') : null;
  var modalScroll = document.getElementById('modalScroll');
  var modalCloseBtn = document.getElementById('modalClose');
  var currentModalProjectId = null;
  var currentGalleryIndex = 0;
  var modalTriggerEl = null;
  var savedScrollY = 0;
  var FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

  function isVideoMedia(item) {
    if (!item) return false;
    if (item.type === 'video') return true;
    return /\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(item.src || '');
  }

  /* Shared by buildProjectCard (grid) and the case-study modal so tech
     tags render identically in both places from one code path. */
  function buildTechTagsNode(techKeys, lang) {
    return techKeys.map(function (k) { return el('span', { class: 'tag' }, [t(k, lang)]); });
  }

  function buildGalleryMediaNode(item, lang) {
    if (!item) return document.createTextNode('');
    var altText = item.altKey ? t(item.altKey, lang) : '';
    if (isVideoMedia(item)) {
      var videoAttrs = {
        id: 'modalGalleryImg',
        class: 'modal-gallery-video',
        src: item.src,
        controls: '',
        playsinline: '',
        preload: 'metadata'
      };
      if (item.poster) videoAttrs.poster = item.poster;
      if (altText) videoAttrs['aria-label'] = altText;
      return el('video', videoAttrs);
    }
    return el('img', { id: 'modalGalleryImg', src: item.src, alt: altText, loading: 'lazy' });
  }

  function buildModalGalleryNode(project, lang) {
    var media = project.caseStudy.media || [];
    var firstMedia = media[0] || { src: project.image, altKey: project.imageAltKey };
    var firstIsVideo = isVideoMedia(firstMedia);

    var mediaContainer = el('div', { class: 'modal-gallery-media', id: 'modalGalleryMedia' }, [buildGalleryMediaNode(firstMedia, lang)]);

    var mainAttrs = { class: 'modal-gallery-main' + (firstIsVideo ? ' is-video' : ''), id: 'modalGalleryMain' };
    if (!firstIsVideo) mainAttrs.title = t('modal.zoomHint', lang);
    var mainChildren = [mediaContainer];

    if (media.length > 1) {
      mainChildren.push(el('button', { type: 'button', class: 'modal-gallery-nav prev', 'data-gallery-dir': '-1', 'aria-label': t('modal.galleryPrev', lang) }, [trustedNode(ICON_ARROW_LEFT)]));
      mainChildren.push(el('button', { type: 'button', class: 'modal-gallery-nav next', 'data-gallery-dir': '1', 'aria-label': t('modal.galleryNext', lang) }, [trustedNode(ICON_ARROW_RIGHT)]));
    }

    var galleryChildren = [el('div', mainAttrs, mainChildren)];

    if (media.length > 1) {
      var thumbs = media.map(function (m, i) {
        var vid = isVideoMedia(m);
        var thumbChildren = [];
        var thumbImgSrc = vid ? (m.poster || '') : m.src;
        if (thumbImgSrc) thumbChildren.push(el('img', { src: thumbImgSrc, alt: '', loading: 'lazy' }));
        if (vid) thumbChildren.push(el('span', { class: 'modal-thumb-play', 'aria-hidden': 'true' }, [trustedNode(ICON_PLAY)]));
        return el('button', {
          type: 'button',
          class: 'modal-thumb' + (i === 0 ? ' active' : '') + (vid ? ' is-video' : ''),
          'data-gallery-index': String(i)
        }, thumbChildren);
      });
      galleryChildren.push(el('div', { class: 'modal-thumbs' }, thumbs));
    }

    return el('div', { class: 'modal-gallery' }, galleryChildren);
  }

  function buildTextSectionNode(labelKey, bodyText, lang) {
    return el('div', { class: 'modal-section' }, [
      el('h3', { class: 'modal-section-label' }, [t(labelKey, lang)]),
      el('p', null, [bodyText])
    ]);
  }

  function buildFlowNode(architectureKeys, lang) {
    var children = [];
    architectureKeys.forEach(function (k, i) {
      if (i > 0) children.push(el('span', { class: 'modal-flow-arrow', 'aria-hidden': 'true' }, [trustedNode(ICON_ARROW_RIGHT)]));
      children.push(el('div', { class: 'modal-flow-step' }, [t(k, lang)]));
    });
    return el('div', { class: 'modal-flow' }, children);
  }

  function buildDecisionsNode(decisions, lang) {
    var items = decisions.map(function (d) {
      return el('div', { class: 'modal-decision-item' }, [
        el('p', { class: 'modal-decision-q' }, [t(d.qKey, lang)]),
        el('p', { class: 'modal-decision-a' }, [t(d.aKey, lang)])
      ]);
    });
    return el('div', { class: 'modal-decisions' }, items);
  }

  function buildResultsNode(resultKeys, lang) {
    var items = resultKeys.map(function (k) {
      return el('li', null, [trustedNode(ICON_CHECK), el('span', null, [t(k, lang)])]);
    });
    return el('ul', { class: 'modal-results' }, items);
  }

  function buildModalLinksNode(project, lang) {
    var children = [
      el('a', { href: project.github, target: '_blank', rel: 'noopener noreferrer', class: 'btn btn-primary' }, [
        el('span', null, [t('proj.viewGithub', lang)]),
        trustedNode(ICON_LINK)
      ])
    ];
    if (project.demo) {
      children.push(el('a', { href: project.demo, target: '_blank', rel: 'noopener noreferrer', class: 'btn btn-outline' }, [
        el('span', null, [t('proj.liveDemo', lang)]),
        trustedNode(ICON_LINK)
      ]));
    }
    return el('div', { class: 'modal-links' }, children);
  }

  function renderModalContent(project, lang) {
    if (!modalScroll) return;
    var cs = project.caseStudy;
    currentGalleryIndex = 0;

    var sections = [
      el('div', { class: 'modal-header' }, [
        el('span', { class: 'modal-category' }, [t(project.categoryKey, lang)]),
        el('h2', { class: 'modal-title', id: 'modalTitle' }, [t(project.titleKey, lang)])
      ]),
      buildModalGalleryNode(project, lang),
      buildTextSectionNode('modal.problem', t(cs.problemKey, lang), lang),
      buildTextSectionNode('modal.solution', t(cs.solutionKey, lang), lang),
      el('div', { class: 'modal-section' }, [
        el('h3', { class: 'modal-section-label' }, [t('modal.technologies', lang)]),
        el('div', { class: 'modal-tech-tags' }, buildTechTagsNode(project.techKeys, lang))
      ]),
      el('div', { class: 'modal-section' }, [
        el('h3', { class: 'modal-section-label' }, [t('modal.howItWorks', lang)]),
        buildFlowNode(cs.architectureKeys, lang)
      ]),
      el('div', { class: 'modal-section' }, [
        el('h3', { class: 'modal-section-label' }, [t('modal.decisions', lang)]),
        buildDecisionsNode(cs.decisions, lang)
      ]),
      el('div', { class: 'modal-section' }, [
        el('h3', { class: 'modal-section-label' }, [t('modal.results', lang)]),
        buildResultsNode(cs.resultKeys, lang)
      ])
    ];

    if (cs.limitationsKey) {
      sections.push(buildTextSectionNode('modal.limitations', t(cs.limitationsKey, lang), lang));
    }

    sections.push(buildTextSectionNode('modal.application', t(cs.applicationKey, lang), lang));
    sections.push(buildModalLinksNode(project, lang));

    modalScroll.replaceChildren();
    sections.forEach(function (section) { modalScroll.appendChild(section); });
  }

  function setGalleryIndex(index) {
    var project = findProject(currentModalProjectId);
    if (!project || !modalScroll) return;
    var media = project.caseStudy.media || [];
    if (!media.length) return;
    currentGalleryIndex = ((index % media.length) + media.length) % media.length;

    var item = media[currentGalleryIndex];
    var vid = isVideoMedia(item);
    var lang = currentLangCode();

    var mediaContainer = document.getElementById('modalGalleryMedia');
    if (mediaContainer) mediaContainer.replaceChildren(buildGalleryMediaNode(item, lang));

    var mainEl = document.getElementById('modalGalleryMain');
    if (mainEl) {
      mainEl.classList.remove('zoomed');
      mainEl.classList.toggle('is-video', vid);
      if (vid) mainEl.removeAttribute('title');
      else mainEl.setAttribute('title', t('modal.zoomHint', lang));
    }

    modalScroll.querySelectorAll('.modal-thumb').forEach(function (thumb, i) {
      thumb.classList.toggle('active', i === currentGalleryIndex);
    });
  }

  /* ---------- Generic modal infrastructure ----------
     Shared overlay/panel/close/ESC/focus-trap/scroll-lock behavior,
     reused by both the Project Case Study modal and the Future
     Roadmap modal. Each caller supplies its own overlay/panel/close
     elements and an optional onClose callback; content rendering
     stays specific to each modal (renderModalContent for case
     studies, renderFutureModalContent for the roadmap). */
  var activeModal = null; // tracks the currently-open modal's state object

  function trapFocusIn(panel, event) {
    if (event.key !== 'Tab' || !panel) return;
    var focusable = panel.querySelectorAll(FOCUSABLE_SELECTOR);
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  }

  function onGenericModalKeydown(event) {
    if (!activeModal) return;
    if (event.key === 'Escape') { closeGenericModal(activeModal); return; }
    trapFocusIn(activeModal.panel, event);
  }

  function openGenericModal(modal) {
    if (!modal.overlay) return;

    modal.triggerEl = document.activeElement;
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.top = '-' + savedScrollY + 'px';

    modal.overlay.classList.add('open');
    modal.overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onGenericModalKeydown);
    activeModal = modal;

    window.setTimeout(function () { if (modal.closeBtn) modal.closeBtn.focus(); }, 50);
  }

  function closeGenericModal(modal) {
    if (!modal || !modal.overlay || !modal.overlay.classList.contains('open')) return;
    modal.overlay.classList.remove('open');
    modal.overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, savedScrollY);
    document.removeEventListener('keydown', onGenericModalKeydown);
    if (activeModal === modal) activeModal = null;
    if (modal.onClose) modal.onClose();
    if (modal.triggerEl && typeof modal.triggerEl.focus === 'function') modal.triggerEl.focus();
  }

  function openProjectModal(id) {
    var project = findProject(id);
    if (!project || !modalOverlay) return;

    currentModalProjectId = id;
    renderModalContent(project, currentLangCode());
    openGenericModal(projectModalState);
  }

  function closeProjectModal() {
    closeGenericModal(projectModalState);
  }

  function refreshOpenModal(lang) {
    if (currentModalProjectId) {
      var project = findProject(currentModalProjectId);
      if (project) renderModalContent(project, lang);
    }
    if (futureModalOverlay && futureModalOverlay.classList.contains('open')) {
      renderFutureModalContent(lang);
    }
  }

  var projectModalState = {
    overlay: modalOverlay,
    panel: modalPanel,
    closeBtn: modalCloseBtn,
    triggerEl: null,
    onClose: function () { currentModalProjectId = null; }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (event) {
      if (event.target === modalOverlay) closeProjectModal();
    });
  }
  if (modalScroll) {
    modalScroll.addEventListener('click', function (event) {
      var thumb = event.target.closest('[data-gallery-index]');
      var navBtn = event.target.closest('[data-gallery-dir]');
      var mainImg = event.target.closest('#modalGalleryMain');

      if (thumb) { setGalleryIndex(parseInt(thumb.getAttribute('data-gallery-index'), 10)); return; }
      if (navBtn) { setGalleryIndex(currentGalleryIndex + parseInt(navBtn.getAttribute('data-gallery-dir'), 10)); return; }
      if (mainImg && !mainImg.classList.contains('is-video')) { mainImg.classList.toggle('zoomed'); }
    });
  }

  /* ---------- Future Roadmap modal ---------- */
  var FUTURE_ITEM_KEYS = ['future.item1', 'future.item2', 'future.item3', 'future.item4'];

  var futureModalOverlay = document.getElementById('futureModal');
  var futureModalPanel = futureModalOverlay ? futureModalOverlay.querySelector('.modal-panel') : null;
  var futureModalScroll = document.getElementById('futureModalScroll');
  var futureModalCloseBtn = document.getElementById('futureModalClose');
  var openFutureModalBtn = document.getElementById('openFutureModal');

  var futureModalState = {
    overlay: futureModalOverlay,
    panel: futureModalPanel,
    closeBtn: futureModalCloseBtn,
    triggerEl: null,
    onClose: null
  };

  function renderFutureModalContent(lang) {
    if (!futureModalScroll) return;

    var items = FUTURE_ITEM_KEYS.map(function (key, i) {
      var num = String(i + 1).padStart(2, '0');
      return el('div', { class: 'future-item' }, [
        el('div', { class: 'future-item-title' }, [
          el('span', { class: 'future-item-index' }, [num]),
          t(key + '.title', lang)
        ]),
        el('p', { class: 'future-item-body' }, [t(key + '.body', lang)])
      ]);
    });

    var header = el('div', { class: 'modal-header' }, [
      el('span', { class: 'future-eyebrow' }, [t('future.eyebrow', lang)]),
      el('h2', { class: 'future-title', id: 'futureModalTitle' }, [t('future.title', lang)]),
      el('p', { class: 'future-intro' }, [t('future.body', lang)])
    ]);

    var list = el('div', { class: 'future-list' }, items);
    var footer = el('div', { class: 'future-footer' }, [t('future.footer', lang)]);

    futureModalScroll.replaceChildren();
    futureModalScroll.appendChild(header);
    futureModalScroll.appendChild(list);
    futureModalScroll.appendChild(footer);
  }

  function openFutureModal() {
    if (!futureModalOverlay) return;
    renderFutureModalContent(currentLangCode());
    openGenericModal(futureModalState);
  }

  function closeFutureModal() {
    closeGenericModal(futureModalState);
  }

  if (openFutureModalBtn) openFutureModalBtn.addEventListener('click', openFutureModal);
  if (futureModalCloseBtn) futureModalCloseBtn.addEventListener('click', closeFutureModal);
  if (futureModalOverlay) {
    futureModalOverlay.addEventListener('click', function (event) {
      if (event.target === futureModalOverlay) closeFutureModal();
    });
  }

  /* Initial render */
  renderProjectGrid(currentLangCode());

})();
