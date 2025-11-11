// Projects data - Edit this array to add, remove, or modify projects
const projects = [
    {
        title: "AI Sentiment Dashboard",
        description: "A sophisticated real-time social sentiment analysis platform that leverages Natural Language Processing to analyze social media trends, customer feedback, and market sentiment. Features interactive visualizations, sentiment scoring, and trend prediction using machine learning algorithms. Processes thousands of data points per minute with real-time updates.",
        techStack: ["Python", "NLP", "Streamlit", "Pandas", "Plotly", "TextBlob"],
        githubLink: "https://github.com/nigelludick",
        category: "ai"
    },
    {
        title: "AI Resume Builder",
        description: "An intelligent resume generation tool powered by GPT-based APIs that creates professional, ATS-optimized resumes. Features include smart content suggestions, industry-specific templates, keyword optimization, and real-time formatting. Helps users craft compelling resumes that stand out to recruiters and pass automated screening systems.",
        techStack: ["Python", "GPT API", "Streamlit", "AI", "PDF Generation"],
        githubLink: "https://github.com/nigelludick",
        category: "ai"
    },
    {
        title: "MetaTrader 5 Expert Advisor",
        description: "A fully automated trading bot for MetaTrader 5 featuring advanced risk management, position sizing algorithms, and multi-timeframe analysis. Implements sophisticated entry/exit strategies with backtesting capabilities, real-time market analysis, and performance optimization. Includes stop-loss management, trailing stops, and profit-taking mechanisms.",
        techStack: ["MQL5", "Trading Algorithms", "Risk Management", "Backtesting"],
        githubLink: "https://github.com/nigelludick",
        category: "trading"
    },
    {
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio website featuring dark theme with neon accents, animated backgrounds, and smooth transitions. Built with vanilla JavaScript for optimal performance. Includes project showcase, skills visualization, certificate management, and contact integration. Fully responsive across all devices with SEO optimization.",
        techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        githubLink: "https://github.com/nigelludick",
        category: "web"
    },
    {
        title: "Data Visualization Dashboard",
        description: "An interactive business intelligence dashboard that transforms complex datasets into actionable insights. Features customizable charts, real-time data updates, filtering capabilities, and export functionality. Supports multiple data sources and provides drill-down analysis for detailed exploration.",
        techStack: ["Python", "Streamlit", "Plotly", "Pandas", "SQL"],
        githubLink: "https://github.com/nigelludick",
        category: "web"
    },
    {
        title: "Automation Workflow System",
        description: "A comprehensive automation platform that streamlines repetitive tasks and business processes. Features include scheduled task execution, email automation, file processing, API integrations, and custom workflow builders. Reduces manual work by 80% and improves operational efficiency.",
        techStack: ["Python", "Selenium", "APIs", "Task Scheduling", "Email"],
        githubLink: "https://github.com/nigelludick",
        category: "automation"
    }
];

// Function to render projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';
        projectCard.setAttribute('data-category', project.category);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubLink}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View Code
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Filter functionality
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value and render projects
            const filter = button.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

// Load projects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupProjectFilters();
});
