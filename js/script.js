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
// STATE MANAGEMENT
// ============================================

let currentFilter = 'all';
let currentSearch = '';
let currentView = 'grid';
let filteredStudents = [...students];

// ============================================
// THEME MANAGEMENT
// ============================================

/**
 * Initialise le thème basé sur les préférences utilisateur ou le localStorage
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (!prefersDark) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

/**
 * Bascule entre le thème clair et sombre
 */
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Animation de transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    showToast(`Thème ${newTheme === 'dark' ? 'sombre' : 'clair'} activé`, 'success');
}

// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Met à jour les compteurs de catégories
 */
function updateCounts() {
    const allCount = students.length;
    const aiCount = students.filter(s => s.category === 'ai').length;
    const fullstackCount = students.filter(s => s.category === 'fullstack').length;
    
    document.getElementById('countAll').textContent = allCount;
    document.getElementById('countAi').textContent = aiCount;
    document.getElementById('countFullstack').textContent = fullstackCount;
}

/**
 * Filtre les étudiants selon la recherche et la catégorie
 */
function filterStudents() {
    filteredStudents = students.filter(student => {
        // Filtre par catégorie
        const categoryMatch = currentFilter === 'all' || student.category === currentFilter;
        
        // Filtre par recherche
        const searchLower = currentSearch.toLowerCase();
        const searchMatch = currentSearch === '' || 
            student.name.toLowerCase().includes(searchLower) ||
            student.role.toLowerCase().includes(searchLower) ||
            student.strengths.some(s => s.toLowerCase().includes(searchLower)) ||
            student.birthplace.toLowerCase().includes(searchLower);
        
        return categoryMatch && searchMatch;
    });
    
    renderStudents();
}

/**
 * Affiche les étudiants filtrés dans la grille
 */
function renderStudents() {
    const grid = document.getElementById('studentsGrid');
    const noResults = document.getElementById('noResults');
    
    grid.innerHTML = '';
    
    if (filteredStudents.length === 0) {
        noResults.style.display = 'block';
        grid.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    grid.style.display = 'grid';
    
    // Appliquer la vue actuelle
    grid.classList.toggle('list-view', currentView === 'list');
    
    filteredStudents.forEach((student, index) => {
        const card = createStudentCard(student, index);
        grid.appendChild(card);
    });
    
    // Réinitialiser les animations
    setupScrollAnimations();
}

/**
 * Crée une carte d'étudiant pour la grille principale
 * @param {Object} student - Les données de l'étudiant
 * @param {number} index - L'index pour l'animation décalée
 * @returns {HTMLElement} - L'élément de carte créé
 */
function createStudentCard(student, index) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.style.animationDelay = `${0.1 + (index * 0.05)}s`;
    card.onclick = () => openProfile(student);
    card.tabIndex = 0;
    
    card.onkeypress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProfile(student);
        }
    };
    
    const photoContent = student.image 
        ? `<img src="${student.image}" alt="${student.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='${student.emoji}'">`
        : student.emoji;
    
    const categoryLabel = student.category === 'ai' ? 'AI & Data' : 'Full Stack';
    
    card.innerHTML = `
        <div class="player-photo">
            ${photoContent}
            <span class="player-category-badge">${categoryLabel}</span>
        </div>
        <div class="player-info">
            <div class="player-name">${student.name}</div>
            <div class="player-role">${student.role}</div>
        </div>
    `;
    
    return card;
}

/**
 * Ouvre le profil détaillé d'un étudiant
 * @param {Object} student - Les données de l'étudiant
 */
function openProfile(student) {
    const modal = document.getElementById('profileModal');
    const content = document.getElementById('profileContent');
    
    const photoContent = student.image 
        ? `<img src="${student.image}" alt="${student.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='${student.emoji}'">`
        : student.emoji;
    
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
                    <span class="stat-value" data-target="${student.projects}">0</span>
                    <span class="stat-label">Projets</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value" data-target="${student.commits}">0</span>
                    <span class="stat-label">Commits</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value" data-target="${student.skills}">0</span>
                    <span class="stat-label">Skills</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value" data-target="${student.hours}">0</span>
                    <span class="stat-label">Heures</span>
                </div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Nom complet</div>
                <div class="detail-value">${student.name}</div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Âge / Date de naissance</div>
                <div class="detail-value">${student.age} ans (${student.birthdate})</div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Lieu de naissance / Nationalité</div>
                <div class="detail-value">${student.birthplace} <span class="flag">${student.nationality}</span></div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Compétences clés</div>
                <div class="skills-list">
                    ${student.strengths.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Points à améliorer</div>
                <div class="skills-list">
                    ${student.weaknesses.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Plus grande réalisation</div>
                ${descriptionContent}
            </div>

            <div class="detail-section">
                <div class="detail-label">Fun fact</div>
                <div class="detail-value">${student.funFact}</div>
            </div>

            ${student.futurePlans ? `
            <div class="detail-section">
                <div class="detail-label">Projets futurs</div>
                <div class="detail-value">${student.futurePlans}</div>
            </div>
            ` : ''}

            <button class="watch-button" onclick="showToast('Portfolio bientôt disponible!', 'success')">
                📁 Voir le portfolio
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animer les stats après un court délai
    setTimeout(() => animateStats(), 300);
}

/**
 * Ferme le profil modal
 */
function closeProfile() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// ANIMATIONS
// ============================================

/**
 * Anime les compteurs statistiques
 */
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value[data-target]');
    
    statValues.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 1500;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;
        
        const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, target);
            stat.textContent = Math.round(current).toLocaleString();
            
            if (step >= steps) {
                stat.textContent = target.toLocaleString();
                clearInterval(timer);
            }
        }, duration / steps);
    });
}

/**
 * Anime les compteurs de l'aperçu global
 */
function animateOverviewStats() {
    const overviewValues = document.querySelectorAll('.overview-value[data-target]');
    
    overviewValues.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const steps = 80;
        const increment = target / steps;
        let current = 0;
        let step = 0;
        
        const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, target);
            stat.textContent = Math.round(current).toLocaleString();
            
            if (step >= steps) {
                stat.textContent = target.toLocaleString();
                clearInterval(timer);
            }
        }, duration / steps);
    });
}

/**
 * Configure les animations au scroll
 */
function setupScrollAnimations() {
    const cards = document.querySelectorAll('.player-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
        observer.observe(card);
    });
}

// ============================================
// UTILITIES
// ============================================

/**
 * Affiche une notification toast
 * @param {string} message - Le message à afficher
 * @param {string} type - Le type de notification (success/error)
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✓' : '✕'}</span>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Gère le scroll du header
 */
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Configure tous les event listeners
 */
function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Search
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            searchClear.classList.toggle('visible', currentSearch.length > 0);
            filterStudents();
        });
    }
    
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            currentSearch = '';
            searchClear.classList.remove('visible');
            filterStudents();
        });
    }
    
    // Reset search button
    const resetSearch = document.getElementById('resetSearch');
    if (resetSearch) {
        resetSearch.addEventListener('click', () => {
            searchInput.value = '';
            currentSearch = '';
            currentFilter = 'all';
            searchClear.classList.remove('visible');
            
            // Reset active filter tab
            document.querySelectorAll('.filter-tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.filter === 'all');
            });
            
            filterStudents();
        });
    }
    
    // Filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            filterStudents();
        });
    });
    
    // View toggle
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            renderStudents();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('profileModal');
            if (modal.classList.contains('active')) {
                closeProfile();
            }
        }
    });
    
    // Scroll handler
    window.addEventListener('scroll', handleScroll);
    
    // Click outside modal to close
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeProfile);
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Update counts
    updateCounts();
    
    // Initial render
    renderStudents();
    
    // Setup event listeners
    setupEventListeners();
    
    // Animate overview stats
    setTimeout(animateOverviewStats, 800);
    
    // Setup scroll animations after initial render
    setTimeout(setupScrollAnimations, 100);
    
    // Console message
    console.log('%c🎓 Master 2 Informatique - Promotion 2025', 
        'font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #6366f1, #ec4899); -webkit-background-clip: text; color: transparent;');
    console.log(`%c${students.length} étudiants brillants dans cette promotion!`, 
        'font-size: 14px; color: #8b5cf6;');
});

// Add CSS for toast out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes toastOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100%); }
    }
`;
document.head.appendChild(style);
