/**
 * Language Toggle JavaScript for Abdoulaye Koumaré's Portfolio
 * Author: Abdoulaye Koumaré
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const htmlTag = document.documentElement;
    
    // Check if user has a language preference stored in localStorage
    let currentLang = localStorage.getItem('language') || 'fr'; // Default to French
    
    // Set initial language
    htmlTag.setAttribute('lang', currentLang);
    
    // Translations object
    const translations = {
        // Navigation
        'nav-home': {
            'fr': 'Accueil',
            'en': 'Home'
        },
        'nav-about': {
            'fr': 'À propos',
            'en': 'About'
        },
        'nav-skills': {
            'fr': 'Compétences',
            'en': 'Skills'
        },
        'nav-certifications': {
            'fr': 'Certifications',
            'en': 'Certifications'
        },
        'nav-experience': {
            'fr': 'Expérience',
            'en': 'Experience'
        },
        'nav-projects': {
            'fr': 'Projets',
            'en': 'Projects'
        },
        'nav-contact': {
            'fr': 'Contact',
            'en': 'Contact'
        },
        
        // Hero Section
        'hero-title': {
            'fr': 'Support Field Engineer, Développeur d\'applications & TechEntrepreneur',
            'en': 'Support Field Engineer, Application Developer & TechEntrepreneur'
        },
        'hero-description': {
            'fr': 'Spécialisé dans la conception, le dépannage et la résolution de problèmes informatiques. CEO de Koogin SAS. Concepteur de KaHaShEr et Kacie. Passionné par les nouvelles technologies et solutions innovantes.',
            'en': 'Specialized in design, troubleshooting and solving IT problems. CEO of Koogin SAS. Designer of KaHaShEr and Kacie. Passionate about new technologies and innovative solutions.'
        },
        'cta-discover': {
            'fr': 'Découvrir mon parcours',
            'en': 'Discover my journey'
        },
        'cta-projects': {
            'fr': 'Consulter mes projets',
            'en': 'View my projects'
        },
        'cta-contact': {
            'fr': 'Me contacter',
            'en': 'Contact me'
        },
        
        // About Section
        'about-title': {
            'fr': 'À propos de moi',
            'en': 'About me'
        },
        'about-who': {
            'fr': 'Qui suis-je?',
            'en': 'Who am I?'
        },
        'about-who-text': {
            'fr': 'Professionnel de l\'informatique passionné par l\'innovation technologique et la résolution de problèmes complexes. Mon parcours m\'a permis de développer une expertise dans le support technique, le développement d\'applications et l\'entrepreneuriat technologique.',
            'en': 'IT professional passionate about technological innovation and solving complex problems. My career has allowed me to develop expertise in technical support, application development and technology entrepreneurship.'
        },
        'about-education': {
            'fr': 'Formation et parcours académique',
            'en': 'Education and academic background'
        },
        'about-education-text': {
            'fr': 'Diplômé en informatique avec une spécialisation en développement d\'applications et administration système. J\'ai complété ma formation par plusieurs certifications professionnelles reconnues dans l\'industrie.',
            'en': 'Graduate in computer science with a specialization in application development and system administration. I have completed my training with several professional certifications recognized in the industry.'
        },
        'about-values': {
            'fr': 'Motivation et valeurs professionnelles',
            'en': 'Motivation and professional values'
        },
        'about-values-text': {
            'fr': 'Je suis motivé par la recherche constante d\'excellence et d\'innovation. Je valorise la rigueur, l\'apprentissage continu et la collaboration. Mon objectif est de créer des solutions technologiques qui répondent à des besoins réels et qui améliorent l\'expérience utilisateur.',
            'en': 'I am motivated by the constant pursuit of excellence and innovation. I value rigor, continuous learning and collaboration. My goal is to create technological solutions that meet real needs and improve the user experience.'
        },
        
        // Skills Section
        'skills-title': {
            'fr': 'Mes compétences',
            'en': 'My skills'
        },
        'skills-tech-support': {
            'fr': 'Support technique',
            'en': 'Technical support'
        },
        'skills-incident': {
            'fr': 'Gestion des incidents',
            'en': 'Incident management'
        },
        'skills-user-support': {
            'fr': 'Support utilisateurs',
            'en': 'User support'
        },
        'skills-sys-admin': {
            'fr': 'Administration système',
            'en': 'System administration'
        },
        'skills-dev': {
            'fr': 'Développement',
            'en': 'Development'
        },
        'skills-network': {
            'fr': 'Réseaux informatiques',
            'en': 'Computer networks'
        },
        'skills-network-config': {
            'fr': 'Configuration réseau',
            'en': 'Network configuration'
        },
        'skills-network-troubleshoot': {
            'fr': 'Dépannage réseau',
            'en': 'Network troubleshooting'
        },
        
        // Certifications Section
        'certifications-title': {
            'fr': 'Mes certifications',
            'en': 'My certifications'
        },
        'cert-meta-backend': {
            'fr': 'Certification professionnelle en développement backend',
            'en': 'Professional certification in backend development'
        },
        'cert-meta-android': {
            'fr': 'Certification professionnelle en développement Android',
            'en': 'Professional certification in Android development'
        },
        'cert-google-it': {
            'fr': 'Certification professionnelle en support informatique',
            'en': 'Professional certification in IT support'
        },
        
        // Experience Section
        'experience-title': {
            'fr': 'Expérience professionnelle',
            'en': 'Professional experience'
        },
        'exp-present': {
            'fr': 'Présent',
            'en': 'Present'
        },
        'exp-embross-desc': {
            'fr': 'Responsable du support technique et de la maintenance des équipements informatiques. Résolution des incidents et assistance aux utilisateurs.',
            'en': 'Responsible for technical support and maintenance of IT equipment. Incident resolution and user assistance.'
        },
        'exp-hiram-desc': {
            'fr': 'Conception et développement d\'applications web et mobiles. Maintenance et amélioration des solutions existantes.',
            'en': 'Design and development of web and mobile applications. Maintenance and improvement of existing solutions.'
        },
        'exp-sifens-desc': {
            'fr': 'Support technique aux utilisateurs. Maintenance du parc informatique et résolution des incidents.',
            'en': 'Technical support to users. Maintenance of IT equipment and incident resolution.'
        },
        
        // Projects Section
        'projects-title': {
            'fr': 'Projets réalisés & Entreprises',
            'en': 'Projects & Companies'
        },
        'company-founded': {
            'fr': 'Entreprise fondée',
            'en': 'Founded company'
        },
        'company-role': {
            'fr': 'CEO & Fondateur',
            'en': 'CEO & Founder'
        },
        'company-desc': {
            'fr': 'Koogin SAS est une entreprise spécialisée dans le développement de solutions informatiques innovantes. Notre mission est de créer des outils technologiques qui simplifient et améliorent le quotidien des utilisateurs.',
            'en': 'Koogin SAS is a company specialized in the development of innovative IT solutions. Our mission is to create technological tools that simplify and improve the daily lives of users.'
        },
        'company-vision': {
            'fr': 'Notre vision est de devenir un acteur majeur dans l\'innovation technologique en Afrique, en proposant des solutions adaptées aux besoins locaux et accessibles à tous.',
            'en': 'Our vision is to become a major player in technological innovation in Africa, offering solutions adapted to local needs and accessible to all.'
        },
        'apps-solutions': {
            'fr': 'Applications & Solutions conçues',
            'en': 'Applications & Solutions designed'
        },
        'filter-all': {
            'fr': 'Tous',
            'en': 'All'
        },
        'filter-app': {
            'fr': 'Applications',
            'en': 'Applications'
        },
        'filter-web': {
            'fr': 'Sites Web',
            'en': 'Websites'
        },
        'project-view': {
            'fr': 'Voir le projet',
            'en': 'View project'
        },
        'project-visit': {
            'fr': 'Visiter le site',
            'en': 'Visit website'
        },
        'project-kahasher-desc': {
            'fr': 'Une application de gestion de fichiers sécurisée qui permet le partage et la synchronisation de documents entre différents appareils.',
            'en': 'A secure file management application that allows sharing and synchronization of documents between different devices.'
        },
        'project-kacie-desc': {
            'fr': 'Assistant virtuel intelligent conçu pour automatiser les tâches répétitives et faciliter la gestion des agendas et des communications.',
            'en': 'Intelligent virtual assistant designed to automate repetitive tasks and facilitate the management of schedules and communications.'
        },
        'project-hiramburotik-desc': {
            'fr': 'Site web e-commerce pour une entreprise de fournitures de bureau, avec système de gestion des commandes et paiement en ligne.',
            'en': 'E-commerce website for an office supplies company, with order management system and online payment.'
        },
        'project-hiramconsulting-desc': {
            'fr': 'Site web vitrine pour une entreprise de conseil, présentant les services, l\'équipe et permettant la prise de rendez-vous en ligne.',
            'en': 'Showcase website for a consulting company, presenting services, team and allowing online appointment booking.'
        },
        'project-hiramassurance-desc': {
            'fr': 'Plateforme de gestion des contrats d\'assurance avec espace client et système de suivi des dossiers.',
            'en': 'Insurance contract management platform with customer area and case tracking system.'
        },
        
        // Contact Section
        'contact-title': {
            'fr': 'Me contacter',
            'en': 'Contact me'
        },
        'contact-name': {
            'fr': 'Nom',
            'en': 'Name'
        },
        'contact-subject': {
            'fr': 'Sujet',
            'en': 'Subject'
        },
        'contact-message': {
            'fr': 'Message',
            'en': 'Message'
        },
        'contact-send': {
            'fr': 'Envoyer',
            'en': 'Send'
        },
        
        // Footer
        'footer-copyright': {
            'fr': 'Tous droits réservés.',
            'en': 'All rights reserved.'
        }
    };
    
    // Function to update language
    const updateLanguage = (lang) => {
        // Update HTML lang attribute
        htmlTag.setAttribute('lang', lang);
        
        // Update language toggle button text
        languageToggle.innerHTML = lang === 'fr' ? 
            '<i class="fas fa-globe"></i> FR' : 
            '<i class="fas fa-globe"></i> EN';
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                element.innerHTML = translations[key][lang];
            }
        });
        
        // Save preference to localStorage
        localStorage.setItem('language', lang);
        currentLang = lang;
    };
    
    // Add data-i18n attributes to all translatable elements
    const addI18nAttributes = () => {
        // Navigation
        document.querySelector('.nav-links ul li:nth-child(1) a').setAttribute('data-i18n', 'nav-home');
        document.querySelector('.nav-links ul li:nth-child(2) a').setAttribute('data-i18n', 'nav-about');
        document.querySelector('.nav-links ul li:nth-child(3) a').setAttribute('data-i18n', 'nav-skills');
        document.querySelector('.nav-links ul li:nth-child(4) a').setAttribute('data-i18n', 'nav-certifications');
        document.querySelector('.nav-links ul li:nth-child(5) a').setAttribute('data-i18n', 'nav-experience');
        document.querySelector('.nav-links ul li:nth-child(6) a').setAttribute('data-i18n', 'nav-projects');
        document.querySelector('.nav-links ul li:nth-child(7) a').setAttribute('data-i18n', 'nav-contact');
        
        // Hero Section
        document.querySelector('.hero-text h2').setAttribute('data-i18n', 'hero-title');
        document.querySelector('.hero-text p').setAttribute('data-i18n', 'hero-description');
        document.querySelector('.cta-buttons a:nth-child(1)').setAttribute('data-i18n', 'cta-discover');
        document.querySelector('.cta-buttons a:nth-child(2)').setAttribute('data-i18n', 'cta-projects');
        document.querySelector('.cta-buttons a:nth-child(3)').setAttribute('data-i18n', 'cta-contact');
        
        // About Section
        document.querySelector('#about .section-header h2').setAttribute('data-i18n', 'about-title');
        document.querySelector('.about-text h3:nth-child(1)').setAttribute('data-i18n', 'about-who');
        document.querySelector('.about-text p:nth-child(2)').setAttribute('data-i18n', 'about-who-text');
        document.querySelector('.about-text h3:nth-child(3)').setAttribute('data-i18n', 'about-education');
        document.querySelector('.about-text p:nth-child(4)').setAttribute('data-i18n', 'about-education-text');
        document.querySelector('.about-text h3:nth-child(5)').setAttribute('data-i18n', 'about-values');
        document.querySelector('.about-text p:nth-child(6)').setAttribute('data-i18n', 'about-values-text');
        
        // Skills Section
        document.querySelector('#skills .section-header h2').setAttribute('data-i18n', 'skills-title');
        document.querySelector('.skills-category:nth-child(1) h3').setAttribute('data-i18n', 'skills-tech-support');
        document.querySelector('.skills-category:nth-child(1) .skill-item:nth-child(2) .skill-info span:first-child').setAttribute('data-i18n', 'skills-incident');
        document.querySelector('.skills-category:nth-child(1) .skill-item:nth-child(3) .skill-info span:first-child').setAttribute('data-i18n', 'skills-user-support');
        document.querySelector('.skills-category:nth-child(2) h3').setAttribute('data-i18n', 'skills-sys-admin');
        document.querySelector('.skills-category:nth-child(3) h3').setAttribute('data-i18n', 'skills-dev');
        document.querySelector('.skills-category:nth-child(4) h3').setAttribute('data-i18n', 'skills-network');
        document.querySelector('.skills-category:nth-child(4) .skill-item:nth-child(2) .skill-info span:first-child').setAttribute('data-i18n', 'skills-network-config');
        document.querySelector('.skills-category:nth-child(4) .skill-item:nth-child(3) .skill-info span:first-child').setAttribute('data-i18n', 'skills-network-troubleshoot');
        
        // Certifications Section
        document.querySelector('#certifications .section-header h2').setAttribute('data-i18n', 'certifications-title');
        document.querySelector('.certification-item:nth-child(1) .certification-info p').setAttribute('data-i18n', 'cert-meta-backend');
        document.querySelector('.certification-item:nth-child(2) .certification-info p').setAttribute('data-i18n', 'cert-meta-android');
        document.querySelector('.certification-item:nth-child(3) .certification-info p').setAttribute('data-i18n', 'cert-google-it');
        
        // Experience Section
        document.querySelector('#experience .section-header h2').setAttribute('data-i18n', 'experience-title');
        document.querySelector('.timeline-item:nth-child(1) .timeline-date span').innerHTML = document.querySelector('.timeline-item:nth-child(1) .timeline-date span').innerHTML.replace('Présent', `<span data-i18n="exp-present">Présent</span>`);
        document.querySelector('.timeline-item:nth-child(1) .timeline-content p').setAttribute('data-i18n', 'exp-embross-desc');
        document.querySelector('.timeline-item:nth-child(2) .timeline-content p').setAttribute('data-i18n', 'exp-hiram-desc');
        document.querySelector('.timeline-item:nth-child(3) .timeline-content p').setAttribute('data-i18n', 'exp-sifens-desc');
        
        // Projects Section
        document.querySelector('#projects .section-header h2').setAttribute('data-i18n', 'projects-title');
        document.querySelector('.company-section h3').setAttribute('data-i18n', 'company-founded');
        document.querySelector('.company-role').setAttribute('data-i18n', 'company-role');
        document.querySelector('.company-description').setAttribute('data-i18n', 'company-desc');
        document.querySelector('.company-vision').setAttribute('data-i18n', 'company-vision');
        document.querySelector('.applications-section h3').setAttribute('data-i18n', 'apps-solutions');
        document.querySelector('.filter-btn[data-filter="all"]').setAttribute('data-i18n', 'filter-all');
        document.querySelector('.filter-btn[data-filter="app"]').setAttribute('data-i18n', 'filter-app');
        document.querySelector('.filter-btn[data-filter="web"]').setAttribute('data-i18n', 'filter-web');
        document.querySelector('.project-item:nth-child(1) .project-info p').setAttribute('data-i18n', 'project-kahasher-desc');
        document.querySelector('.project-item:nth-child(1) .project-info .btn').setAttribute('data-i18n', 'project-view');
        document.querySelector('.project-item:nth-child(2) .project-info p').setAttribute('data-i18n', 'project-kacie-desc');
        document.querySelector('.project-item:nth-child(2) .project-info .btn').setAttribute('data-i18n', 'project-view');
        document.querySelector('.project-item:nth-child(3) .project-info p').setAttribute('data-i18n', 'project-hiramburotik-desc');
        document.querySelector('.project-item:nth-child(3) .project-info .btn').setAttribute('data-i18n', 'project-visit');
        document.querySelector('.project-item:nth-child(4) .project-info p').setAttribute('data-i18n', 'project-hiramconsulting-desc');
        document.querySelector('.project-item:nth-child(4) .project-info .btn').setAttribute('data-i18n', 'project-visit');
        document.querySelector('.project-item:nth-child(5) .project-info p').setAttribute('data-i18n', 'project-hiramassurance-desc');
        document.querySelector('.project-item:nth-child(5) .project-info .btn').setAttribute('data-i18n', 'project-visit');
        
        // Contact Section
        document.querySelector('#contact .section-header h2').setAttribute('data-i18n', 'contact-title');
        document.querySelector('.form-group:nth-child(1) label').setAttribute('data-i18n', 'contact-name');
        document.querySelector('.form-group:nth-child(3) label').setAttribute('data-i18n', 'contact-subject');
        document.querySelector('.form-group:nth-child(4) label').setAttribute('data-i18n', 'contact-message');
        document.querySelector('#contactForm button').setAttribute('data-i18n', 'contact-send');
        
        // Footer
        document.querySelector('.footer-bottom p').innerHTML = document.querySelector('.footer-bottom p').innerHTML.replace('Tous droits réservés.', `<span data-i18n="footer-copyright">Tous droits réservés.</span>`);
    };
    
    // Add data-i18n attributes when the page loads
    addI18nAttributes();
    
    // Set initial language
    updateLanguage(currentLang);
    
    // Add event listener to language toggle button
    languageToggle.addEventListener('click', () => {
        // Toggle language
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        updateLanguage(newLang);
    });
});