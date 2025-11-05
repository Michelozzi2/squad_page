// ============================================
// DONNÉES DES ÉTUDIANTS - À PERSONNALISER ICI
// ============================================

const students = [
    // AI & Data Specialists
    {
        id: 1,
        name: "Hafsa",
        role: "AI & Machine Learning",
        category: "ai",
        emoji: "🤖",
        image: "images/hafsa.png",
        age: 23,
        birthdate: "03/15/2002",
        birthplace: "Paris, France",
        nationality: "🇫🇷",
        projects: 12,
        commits: 1250,
        skills: 15,
        hours: 2400,
        strengths: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
        weaknesses: ["Frontend Design", "DevOps"],
        achievement: "Developed a facial recognition system with 98% accuracy for a security application",
        funFact: "Can recite Pi to 100 decimal places and uses it as password inspiration",
        futurePlans: "Aspires to lead AI research teams in cutting-edge computer vision projects at tech giants"
    },
    {
        id: 2,
        name: "Thomas",
        role: "Data Science & Analytics",
        category: "fullstack",
        emoji: "📊",
        image: "images/thomas.png",
        age: 24,
        birthdate: "07/22/2001",
        birthplace: "Lyon, France",
        nationality: "🇫🇷",
        projects: 10,
        commits: 980,
        skills: 12,
        hours: 2100,
        strengths: ["Python", "R", "SQL", "Tableau"],
        weaknesses: ["Mobile Development", "Game Development"],
        achievement: "Created a predictive sentiment analysis model achieving 95% accuracy for social media monitoring",
        funFact: "Visualized 10 years of weather data to plan the perfect vacation dates",
        futurePlans: "Plans to become a Chief Data Scientist focusing on business intelligence and predictive analytics"
    },
    {
        id: 3,
        name: "Mounia",
        role: "Deep Learning Specialist",
        category: "ai",
        emoji: "🧠",
        image: "images/mounia.png",
        age: 22,
        birthdate: "11/10/2002",
        birthplace: "Marseille, France",
        nationality: "🇫🇷",
        projects: 15,
        commits: 1450,
        skills: 18,
        hours: 2600,
        strengths: ["Keras", "Neural Networks", "MLOps", "Docker"],
        weaknesses: ["UI/UX Design", "Technical Documentation"],
        achievement: "Published a research paper on optimizing convolutional neural networks for edge devices",
        funFact: "Named her cat Gradient and her dog Tensor - they both help debug code by walking on the keyboard",
        futurePlans: "Aims to pursue a PhD in Deep Learning and contribute to open-source AI frameworks"
    },
    {
        id: 4,
        name: "Matthieu",
        role: "Data Engineer & Full Stack Developer",
        category: "ai",
        emoji: "🧠",
        image: "images/matthieu.png",
        age: 24,
        birthdate: "02/02/2001",
        birthplace: "Châtenay-Malabry, France",
        nationality: "🇫🇷",
        projects: 18,
        commits: 2350,
        skills: 22,
        hours: 3200,
        strengths: ["TensorFlow", "PyTorch", "JavaScript", "PHP", "Python", "Data Pipelines"],
        weaknesses: ["Game Development", "Graphics Design", "UI/UX Design"],
        achievement: "Developed multiple modeling projects using DevSimpy interfaced with web visualization platforms for finance and healthcare sectors, created AI-powered automated video generation systems, and led full-stack development initiatives at Sages Informatique",
        funFact: "Bridges the gap between data engineering and web development by coding AI models in the morning and web applications in the afternoon",
        futurePlans: "Aspires to transition into AI development roles, either within current company Sages Informatique or at a major tech corporation, leveraging dual expertise in data engineering and web development",
        detailedDescription: "Matthieu Michelozzi is a 24-year-old data engineer and full-stack developer from Châtenay-Malabry, France, currently pursuing a Master's degree in Data Engineering while working in alternance at Sages Informatique. His unique dual focus gives him a comprehensive understanding of both data science and web development ecosystems. At Sages Informatique, Matthieu works extensively on the Zeendoc software platform, handling diverse missions that span JavaScript, PHP, HTML, and CSS, with a strong emphasis on web development. His technical portfolio includes several sophisticated modeling projects built with DevSimpy, which he has successfully interfaced with custom web visualization platforms. These projects demonstrate his ability to bridge complex data science concepts with user-friendly interfaces, particularly in critical domains such as finance and healthcare. Beyond traditional data engineering, Matthieu has pioneered AI-powered automated video generation systems, showcasing his innovative approach to content creation technology. His professional experience provides him with a rare combination of skills - the analytical rigor of data engineering paired with the practical implementation capabilities of full-stack web development. This versatility allows him to understand projects from end to end, from data pipeline architecture to front-end user experience. Looking toward the future, Matthieu's career aspirations center on artificial intelligence development. He hopes to leverage his diverse skill set to transition into specialized AI roles, either by expanding his responsibilities at Sages Informatique or by joining a larger technology company where he can work on cutting-edge machine learning projects. His background in both data engineering and web development positions him uniquely to build AI solutions that are not only technically sophisticated but also accessible and user-friendly."
    },

    // Full Stack Developers
    {
        id: 5,
        name: "Ahmed",
        role: "Full Stack Developer",
        category: "fullstack",
        emoji: "💻",
        image: "images/ahmed.png",
        age: 23,
        birthdate: "01/05/2002",
        birthplace: "Toulouse, France",
        nationality: "🇫🇷",
        projects: 18,
        commits: 2100,
        skills: 20,
        hours: 2800,
        strengths: ["React", "Node.js", "MongoDB", "AWS"],
        weaknesses: ["Machine Learning", "Statistical Analysis"],
        achievement: "Developed an e-commerce platform handling 10k+ daily transactions with 99.9% uptime",
        funFact: "Codes while listening to heavy metal - claims it helps him debug faster",
        futurePlans: "Dreams of founding his own tech startup focused on innovative e-commerce solutions"
    },
    {
        id: 6,
        name: "Ambroise",
        role: "Frontend Architect",
        category: "ai",
        emoji: "🎨",
        image: "images/ambroise.png",
        age: 22,
        birthdate: "09/18/2002",
        birthplace: "Bordeaux, France",
        nationality: "🇫🇷",
        projects: 16,
        commits: 1880,
        skills: 17,
        hours: 2500,
        strengths: ["Vue.js", "TypeScript", "CSS3", "Figma"],
        weaknesses: ["Backend APIs", "Database Architecture"],
        achievement: "Redesigned an application interface used by 50k+ users, increasing engagement by 40%",
        funFact: "Collects VS Code themes - owns over 200 and switches based on mood",
        futurePlans: "Wants to become a UX/UI design leader specializing in accessibility and inclusive design"
    },
    {
        id: 7,
        name: "Achille",
        role: "Backend Engineer",
        category: "fullstack",
        emoji: "⚙️",
        image: "images/achille.png",
        age: 25,
        birthdate: "04/30/2000",
        birthplace: "Nice, France",
        nationality: "🇫🇷",
        projects: 14,
        commits: 1650,
        skills: 16,
        hours: 2700,
        strengths: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
        weaknesses: ["CSS Styling", "Frontend Design Patterns"],
        achievement: "Architected a REST API serving 1M+ requests per day with sub-100ms response times",
        funFact: "Dreams in code and has solved bugs while sleeping - keeps a notebook by the bed",
        futurePlans: "Aims to become a solutions architect designing scalable enterprise systems"
    },

    // Security & Network Experts
    {
        id: 8,
        name: "Abdou",
        role: "Cybersecurity Expert",
        category: "ai",
        emoji: "🔐",
        image: "images/abdou.png",
        age: 24,
        birthdate: "06/12/2001",
        birthplace: "Strasbourg, France",
        nationality: "🇫🇷",
        projects: 11,
        commits: 890,
        skills: 14,
        hours: 2300,
        strengths: ["Penetration Testing", "Cryptography", "Ethical Hacking", "Firewall Configuration"],
        weaknesses: ["Frontend Development", "Graphic Design"],
        achievement: "Discovered and patched 15 critical vulnerabilities in public sector systems",
        funFact: "Legally hacked his own Facebook account for fun and documented the entire process",
        futurePlans: "Aspires to lead red team operations for major financial institutions"
    },
    {
        id: 9,
        name: "Anthony",
        role: "Network Administrator",
        category: "fullstack",
        emoji: "🌐",
        image: "images/antho.png",
        age: 23,
        birthdate: "08/25/2002",
        birthplace: "Nantes, France",
        nationality: "🇫🇷",
        projects: 9,
        commits: 750,
        skills: 13,
        hours: 2000,
        strengths: ["Cisco Systems", "Linux Administration", "VPN", "Network Security"],
        weaknesses: ["Web Design", "Mobile Applications"],
        achievement: "Configured and secured network infrastructure for 500+ devices across multiple sites",
        funFact: "Can trace a packet's journey through the internet with eyes closed",
        futurePlans: "Plans to obtain CCIE certification and become a network solutions architect"
    },
    {
        id: 10,
        name: "Anthony B.",
        role: "DevSecOps Engineer",
        category: "fullstack",
        emoji: "🛡️",
        image: "images/antho_bis.png",
        age: 24,
        birthdate: "12/03/2001",
        birthplace: "Lille, France",
        nationality: "🇫🇷",
        projects: 13,
        commits: 1420,
        skills: 19,
        hours: 2650,
        strengths: ["Kubernetes", "Jenkins", "Security Automation", "Cloud Security"],
        weaknesses: ["Game Development", "3D Graphics"],
        achievement: "Implemented a zero-incident CI/CD pipeline with automated security scanning for production",
        funFact: "Creates passwords as binary haikus - they're both secure and poetic",
        futurePlans: "Wants to specialize in cloud security architecture for Fortune 500 companies"
    },
    {
        id: 11,
        name: "Badre",
        role: "Cloud Security Specialist",
        category: "fullstack",
        emoji: "🛡️",
        image: "images/badre.png",
        age: 24,
        birthdate: "05/15/2001",
        birthplace: "Marseille, France",
        nationality: "🇫🇷",
        projects: 16,
        commits: 1580,
        skills: 18,
        hours: 2800,
        strengths: ["AWS Security", "Terraform", "Identity Management", "Compliance"],
        weaknesses: ["Mobile Development", "Frontend Frameworks"],
        achievement: "Achieved SOC 2 Type II compliance for entire cloud infrastructure in record time",
        funFact: "Runs security drills on his own home network to stay sharp",
        futurePlans: "Dreams of becoming a CISO for a major cloud service provider"
    },
    {
        id: 12,
        name: "Clem",
        role: "Infrastructure Security Engineer",
        category: "ai",
        emoji: "🛡️",
        image: "images/clem.png",
        age: 24,
        birthdate: "09/28/2001",
        birthplace: "Lyon, France",
        nationality: "🇫🇷",
        projects: 12,
        commits: 1340,
        skills: 17,
        hours: 2450,
        strengths: ["Docker Security", "SIEM Tools", "Incident Response", "Forensics"],
        weaknesses: ["Data Science", "Machine Learning"],
        achievement: "Built a security monitoring system that reduced incident response time by 70%",
        funFact: "Participates in bug bounty programs on weekends and has found vulnerabilities in major platforms",
        futurePlans: "Aims to specialize in digital forensics and incident response for government agencies"
    },
    {
        id: 13,
        name: "Dorian",
        role: "Application Security Engineer",
        category: "fullstack",
        emoji: "🛡️",
        image: "images/dorian.png",
        age: 24,
        birthdate: "03/11/2001",
        birthplace: "Toulouse, France",
        nationality: "🇫🇷",
        projects: 15,
        commits: 1690,
        skills: 20,
        hours: 2900,
        strengths: ["OWASP", "Secure Coding", "Vulnerability Assessment", "API Security"],
        weaknesses: ["Network Hardware", "System Administration"],
        achievement: "Established secure development lifecycle practices adopted company-wide",
        funFact: "Writes security-focused coding tutorials that have helped thousands of developers",
        futurePlans: "Wants to lead application security programs for SaaS companies"
    },
    {
        id: 14,
        name: "Manal",
        role: "Security Compliance Analyst",
        category: "fullstack",
        emoji: "🛡️",
        image: "images/manal.png",
        age: 24,
        birthdate: "07/19/2001",
        birthplace: "Paris, France",
        nationality: "🇫🇷",
        projects: 10,
        commits: 980,
        skills: 15,
        hours: 2200,
        strengths: ["GDPR", "ISO 27001", "Risk Assessment", "Audit Management"],
        weaknesses: ["Low-level Programming", "Embedded Systems"],
        achievement: "Led successful ISO 27001 certification for organization handling sensitive healthcare data",
        funFact: "Reads security compliance frameworks for leisure and can quote GDPR articles from memory",
        futurePlans: "Plans to become a privacy and compliance director for international corporations"
    },
    {
        id: 15,
        name: "Medhi",
        role: "Threat Intelligence Analyst",
        category: "fullstack",
        emoji: "🛡️",
        image: "images/med.png",
        age: 24,
        birthdate: "11/08/2001",
        birthplace: "Bordeaux, France",
        nationality: "🇫🇷",
        projects: 14,
        commits: 1520,
        skills: 16,
        hours: 2700,
        strengths: ["Threat Hunting", "MITRE ATT&CK", "Malware Analysis", "Threat Modeling"],
        weaknesses: ["Web Development", "UI Design"],
        achievement: "Identified and mitigated advanced persistent threat before any damage occurred",
        funFact: "Maintains a personal lab with intentionally vulnerable systems to study attack patterns",
        futurePlans: "Aspires to join elite threat intelligence teams protecting critical infrastructure"
    },
    {
        id: 16,
        name: "Nicolas",
        role: "Security Operations Engineer",
        category: "fullstack",
        emoji: "🛡️",
        image: "images/nico.png",
        age: 24,
        birthdate: "02/14/2001",
        birthplace: "Nice, France",
        nationality: "🇫🇷",
        projects: 13,
        commits: 1450,
        skills: 18,
        hours: 2600,
        strengths: ["SOC Operations", "Log Analysis", "Automation", "Splunk"],
        weaknesses: ["Frontend Development", "Content Management"],
        achievement: "Automated 80% of routine security tasks, freeing team to focus on strategic initiatives",
        funFact: "Created a dashboard that displays security metrics in the style of retro video games",
        futurePlans: "Wants to build and manage a world-class Security Operations Center"
    },
    {
        id: 17,
        name: "Stephane",
        role: "Identity & Access Management Specialist",
        category: "fullstack",
        emoji: "🛡️",
        image: "images/ste.png",
        age: 24,
        birthdate: "10/23/2001",
        birthplace: "Strasbourg, France",
        nationality: "🇫🇷",
        projects: 11,
        commits: 1280,
        skills: 17,
        hours: 2400,
        strengths: ["Active Directory", "SSO", "OAuth", "Zero Trust Architecture"],
        weaknesses: ["Data Analytics", "Business Intelligence"],
        achievement: "Implemented zero-trust identity framework for 5000+ user organization",
        funFact: "Has memorized the OAuth 2.0 specification and explains it using cooking analogies",
        futurePlans: "Plans to specialize in identity security for multi-cloud enterprise environments"
    },
    {
        id: 18,
        name: "Youssouf",
        role: "Wireless Security Engineer",
        category: "ai",
        emoji: "🛡️",
        image: "images/youssouf.png",
        age: 24,
        birthdate: "04/07/2001",
        birthplace: "Nantes, France",
        nationality: "🇫🇷",
        projects: 12,
        commits: 1350,
        skills: 16,
        hours: 2500,
        strengths: ["WiFi Security", "Network Protocols", "Wireless Penetration Testing", "IoT Security"],
        weaknesses: ["Database Design", "Backend Development"],
        achievement: "Secured wireless infrastructure across 50+ locations with zero security incidents",
        funFact: "Can identify network issues just by looking at LED blink patterns on routers",
        futurePlans: "Aims to specialize in IoT and 5G security for smart city initiatives"
    }
];

// ============================================
// FONCTIONS DE RENDU
// ============================================

/**
 * Initialise la page en affichant tous les étudiants
 */
function renderSquad() {
    const aiGrid = document.getElementById('aiSpecialists');
    const fullstackGrid = document.getElementById('fullstackDevs');
    const securityGrid = document.getElementById('securityExperts');

    students.forEach(student => {
        const card = createStudentCard(student);
        
        if (student.category === 'ai') {
            aiGrid.appendChild(card);
        } else if (student.category === 'fullstack') {
            fullstackGrid.appendChild(card);
        } else if (student.category === 'security') {
            securityGrid.appendChild(card);
        }
    });
}

/**
 * Crée une carte d'étudiant pour la grille principale
 * @param {Object} student - Les données de l'étudiant
 * @returns {HTMLElement} - L'élément de carte créé
 */
function createStudentCard(student) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.onclick = () => openProfile(student);
    card.tabIndex = 0; // Rendre la carte accessible au clavier
    
    // Navigation au clavier
    card.onkeypress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProfile(student);
        }
    };
    
    // Si l'étudiant a une image, utiliser l'image, sinon utiliser l'emoji
    const photoContent = student.image 
        ? `<img src="${student.image}" alt="${student.name}" loading="lazy">`
        : student.emoji;
    
    card.innerHTML = `
        <div class="player-photo">${photoContent}</div>
        <div class="player-info">
            <div class="player-name">${student.name}</div>
            <div class="player-role">${student.role}</div>
        </div>
    `;
    
    return card;
}

/**
 * Ouvre le profil détaillé d'un étudiant avec animation
 * @param {Object} student - Les données de l'étudiant
 */
function openProfile(student) {
    const modal = document.getElementById('profileModal');
    const content = document.getElementById('profileContent');
    
    // Si l'étudiant a une image, utiliser l'image, sinon utiliser l'emoji
    const photoContent = student.image 
        ? `<img src="${student.image}" alt="${student.name}" loading="lazy">`
        : student.emoji;
    
    // Afficher la description détaillée si elle existe, sinon utiliser achievement
    const descriptionContent = student.detailedDescription 
        ? `<div class="detail-value">${student.detailedDescription}</div>`
        : `<div class="detail-value">${student.achievement}</div>`;
    
    content.innerHTML = `
        <div class="profile-photo-large">${photoContent}</div>
        <div class="profile-details">
            <div class="profile-name">${student.name}</div>
            <div class="profile-role">${student.role}</div>
            
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-value">${student.projects}</span>
                    <span class="stat-label">Projets réalisés</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${student.commits}</span>
                    <span class="stat-label">Commits Git</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${student.skills}</span>
                    <span class="stat-label">Compétences</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${student.hours}</span>
                    <span class="stat-label">Heures de code</span>
                </div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Name</div>
                <div class="detail-value">${student.name}</div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Age / Date of Birth</div>
                <div class="detail-value">${student.age} years old (${student.birthdate})</div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Place of Birth / Nationality</div>
                <div class="detail-value">${student.birthplace} <span class="flag">${student.nationality}</span></div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Coding Strengths</div>
                <div class="skills-list">
                    ${student.strengths.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Coding Weaknesses</div>
                <div class="skills-list">
                    ${student.weaknesses.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Biggest Achievement in Coding</div>
                ${descriptionContent}
            </div>

            <div class="detail-section">
                <div class="detail-label">Interesting (Fun?) Fact</div>
                <div class="detail-value">${student.funFact}</div>
            </div>

            ${student.futurePlans ? `
            <div class="detail-section">
                <div class="detail-label">Future Plans</div>
                <div class="detail-value">${student.futurePlans}</div>
            </div>
            ` : ''}

            <button class="watch-button">📁 View Portfolio</button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Ajouter l'animation des statistiques
    animateStats();
}

/**
 * Ferme le profil détaillé et retourne à la grille principale
 */
function closeProfile() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Anime les valeurs statistiques avec un effet de compteur
 */
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        const target = parseInt(stat.textContent);
        const duration = 1000; // 1 seconde
        const steps = 30;
        const increment = target / steps;
        let current = 0;
        let step = 0;
        
        const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, target);
            stat.textContent = Math.round(current);
            
            if (step >= steps) {
                stat.textContent = target;
                clearInterval(timer);
            }
        }, duration / steps);
    });
}

// ============================================
// EFFETS DE SCROLL ET INTERACTIONS
// ============================================

/**
 * Ajoute une classe au header lors du scroll
 */
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

/**
 * Gère l'apparition des cartes lors du scroll (Intersection Observer)
 */
function setupScrollAnimations() {
    const cards = document.querySelectorAll('.player-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

/**
 * Gère la navigation par onglets
 */
function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Retirer la classe active de tous les onglets
            tabs.forEach(t => t.classList.remove('active'));
            // Ajouter la classe active à l'onglet cliqué
            tab.classList.add('active');
            
            // Ici vous pouvez ajouter la logique de filtrage si nécessaire
            // Par exemple, filtrer par catégorie
        });
        
        // Navigation au clavier pour les onglets
        tab.tabIndex = 0;
        tab.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                tab.click();
            }
        });
    });
}

/**
 * Ferme le modal avec la touche Escape
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('profileModal');
            if (modal.classList.contains('active')) {
                closeProfile();
            }
        }
    });
}

/**
 * Ajoute un effet parallaxe subtil au survol des cartes
 */
function setupCardParallax() {
    const cards = document.querySelectorAll('.player-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ============================================
// INITIALISATION
// ============================================

// Attendre que le DOM soit chargé avant d'initialiser
document.addEventListener('DOMContentLoaded', function() {
    // Rendu initial
    renderSquad();
    
    // Configuration des interactions
    setupTabs();
    setupKeyboardNavigation();
    setupScrollAnimations();
    
    // Effet parallaxe sur les cartes (désactivé sur mobile pour de meilleures performances)
    if (window.innerWidth > 768) {
        setTimeout(() => {
            setupCardParallax();
        }, 500);
    }
    
    // Écouter le scroll
    window.addEventListener('scroll', handleScroll);
    
    // Message de bienvenue dans la console
    console.log('%c🎓 Master 2 Informatique - Promotion 2025', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log(`%c${students.length} étudiants brillants dans cette promotion!`, 'font-size: 14px; color: #764ba2;');
});