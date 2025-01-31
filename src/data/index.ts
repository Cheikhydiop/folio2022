// src/data/index.ts
import {
    NavItem,
    Project,
    Category,
    SocialLink,
    Education,
    Experience,
    Certification,
    Contact
  } from '@/types';
  import {
    GithubIcon,
    LinkedinIcon,
    Mail,
    Layout,
    Server,
    Database,
    Code,

  } from 'lucide-react';
  
  export const navItems: NavItem[] = [
    { label: 'Accueil', href: '#home' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Formation', href: '#education' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];
  
  export const projectList: Project[] = [
    {
      id: 'wave-senegal-flutter',
      title: 'Wave Sénégal Mobile',
      description: 'Version mobile de Wave Sénégal développée avec Flutter. Application cross-platform permettant les transferts d\'argent et paiements avec une expérience utilisateur native.',
      tech: ['Flutter', 'Dart', 'Firebase', 'GetX', 'REST API', 'Google Maps API'],
      link: 'https://github.com/Cheikhydiop/flutterv1]',
      category: 'Mobile App',
      image: 'images/projects/wave.png',
      date: 'Octobre 2024', 
      demo:""

    },


    {
      id: 'react-Ecommerce',
    title: 'Ecommerce Web Appl',
      description: 'Cette version web offre aux utilisateurs la possibilité d explorer une boutique en ligne et d effectuer leurs achats facilement depuis n\'importe quel appareil connecté à Internet.',
      tech: ['React', 'Framotion', 'Tailwind'],
      link: 'https://github.com/Cheikhydiop/E-commerce',
      category: 'Web App',
      image: 'images/projects/ecommerce.png',
      date: 'Octobre 2024',
      demo:"https://cheikhdiop.netlify.app/"
    },
    {
      id: 'wave-senegal-refonte',
      title: 'Refonte Wave Sénégal',
      description: 'Amélioration de la plateforme Wave Sénégal avec de nouvelles fonctionnalités innovantes incluant un système d\'envoi programmé et périodique automatique pour optimiser les transactions des utilisateurs.',
      tech: ['Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'Redis', 'Swagger'],
      link: 'https://github.comoney_transfert_angular',
      category: 'Full Stack',
      image: 'images/projects/wave1.png',
      date: 'Novembre 2024'
    },
    {
      id: 'gestion-tailleurs-react',
      title: 'Gestion des Tailleurs',
      description: 'Application web de gestion des tailleurs avec React JS. En tant que Chef de projet, direction de l\'équipe de développement et implémentation des meilleures pratiques pour une expérience utilisateur optimale.',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'GitHub'],
      link: 'https://github.com/Cheikhydiop/front-react_social',
      category: 'Frontend',
      image: 'images/projects/tailor.png',
      date: 'Octobre 2024',
      demo: 'https://tailor-hazt.onrender.com/api-docs/'
    },
    {
      id: 'gestion-dettes',
      title: 'Gestion des Dettes Boutique',
      description: 'Système de gestion des dettes avec authentification sécurisée, gestion des produits et utilisateurs. Application des principes SOLID et mise en place d\'une architecture robuste.',
      tech: ['Java', 'Docker', 'Swagger', 'PostgreSQL', 'GitHub', 'Neon'],
      link: 'https://github.com/Cheikhydiop/spring-jpa',
      category: 'Backend',
      image: 'images/projects/Finance.png',
      date: 'Septembre 2024'
    },
    {
      id: 'gestion-apprenants-spring',
      title: 'Gestion des Apprenants',
      description: 'Système de gestion de presence des apprenants et des evenements de ODC. Application des principes SOLID et mise en place d\'une architecture robuste.',
      tech: ['Java', 'Spring Boot', 'Spring Security', 'Docker', 'Render', 'Swagger', 'PostgreSQL', 'GitHub', 'Neon'],
      link: 'https://github.com/Cheikhydiop/Gstudent',
      category: 'Backend',
      image: 'images/projects/odc.png',
      date: 'Septembre 2024',
      demo:"https://diop-cheikhr.onrender.com/swagger/index.html#/"
    },
    {
      id: 'gestion-apprenants-avril',
      title: 'Gestion des Apprenants',
      description: 'Application de gestion des apprenants des emplois du temps et de leurs presences. développée en tant que Développeur FullStack',
      tech: ['JavaScript', 'PHP', 'Tailwind CSS', 'MongoDB', 'CSV', 'Figma'],
      link: 'https://github.comf/avatarodc/E221',
      category: 'Web App',
      image: 'images/projects/odc.png',
      date: 'Avril 2024'
    },
    {
      id: 'gestion-cargaison',
      title: 'Gestion de Cargaison Import/Export',
      description: 'Application complète pour la gestion des cargaisons import/export',
      tech: ['TypeScript', 'PHP', 'Tailwind CSS', 'MySQL', 'Prisma', 'Cloudinary', 'Figma'],
      link: 'https://github.com/Cheikhydiop/Cargo',
      category: 'Web App',
      image: 'images/projects/cargaison.png',
      date: 'Juin 2024'
    },
    {
      id: 'gestion-dettes-boutique',
      title: 'Gestion des Dettes Boutique',
      description: 'Application backend de gestion des dettes d\'une boutique avec notifications SMS',
      tech: ['Laravel', 'Firebase', 'MongoDB', 'PostgreSQL', 'Infobip/Twilio', 'Swagger', 'Docker', 'Render', 'Figma'],
      link: '',
      category: 'Backend',
      image: 'images/projects/Finance.png',
      date: 'Août 2024'
    },
    {
      id: 'gestion-apprenants-odc',
      title: 'Gestion des Apprenants React',
      description: 'Application fullstack de gestion des apprenants avec stack moderne',
      tech: ['React.js', 'Node.js', 'Firebase', 'PostgreSQL', 'Swagger', 'Docker', 'Render'],
      link: '',
      category: 'Full Stack',
      image: 'images/projects/odc.png',
      date: 'Octobre 2024'
    },
    {
      id: 'transfert-argent',
      title: 'Application de Transfert d\'Argent',
      description: 'Clone de Wave - Application de transfert d\'argent',
      tech: ['Angular.js', 'MongoDB', 'Swagger', 'Docker', 'Render'],
      link: 'https://github.com/fmoney_transfert_angular',
      category: 'Full Stack',
      image: 'images/projects/Finance.png',
      date: 'Octobre 2024'
    },
    {
      id: 'gestion-apprenants-backend',
      title: 'Backend Gestion Apprenants',
      description: 'Application backend robuste pour la gestion des apprenants',
      tech: ['Laravel', 'Firebase', 'PostgreSQL', 'Swagger', 'Docker', 'Render'],
      link: 'https://github.com/Cheikhydiop/G-scolaire',
      category: 'Backend',
      image: 'images/projects/odc.png',
      date: 'Septembre 2024'

    }
  ];
  
  export const skillCategories: Category[] = [
    {
      title: "Frontend",
      icon: Layout,
      description: "Développement d'interfaces utilisateur modernes et réactives",
      skills: [
        // Frameworks JavaScript
        "React.js",
        "Angular",
        // Languages
        "TypeScript",
        // Frameworks CSS
        "Tailwind CSS",
        "Bootstrap",
        // Mobile
        "Flutter",
        // État & Performance
        "Redux",
        // Build Tools
        "Vite",
        "Webpack"
      ]
    },
    {
      title: "Backend",
      icon: Server,
      description: "Développement de serveurs et APIs robustes", 
      skills: [
        // Node.js
        "Node.js (Express)",
        // PHP
        "Laravel",
        "PHP",
        // Java
        "Spring Boot",
        "Java",
        // API & Sécurité
        "REST API",
        "JWT Auth",
      ]
    },
    {
      title: "Bases de données",
      icon: Database,
      description: "Gestion et optimisation des données",
      skills: [
        // SQL
        "PostgreSQL",
        "MySQL",
         "Oracle",
        // NoSQL
        "MongoDB",
        // Cloud Databases
        "Firebase",
        "Neon",
        // ORM
        "Prisma",
        
      ]
    },
    {
      title: "DevOps & Architecture",
      icon: Code,
      description: "Outils et méthodologies de développement",
      skills: [
        "Git & GitHub",
        
        "Docker & Docker Hub",
        "Architecture MVC",
        "Architecture distribuée",
        "Architecture monolithique",
        "Méthodologie Agile",
        "API REST",
        
      ]
    },
      {
      title: "Outils de Test et Marketing",
      icon: Code,
      description: "Outils pour tester les API et gérer des projets de marketing.",
      skills: [
      
        "Postmane",
        "Thunder Client",
        "Swagger",
         "figma"
        
      ]
    },
    {
      title: "Outils de Gestion de Projet",
      icon: Code,
      description: "Outils essentiels pour la gestion de projets Agile et Scrum.",
      "skills": [
        "Trello",
        "Jira"
      ]
    }
    
  ];
  
  export const educationList: Education[] = [
    {
      id: 'sonatel-academy',
      date: '2023-2024',
      title: 'Formation Développement Web/Mobile',
      institution: 'École du code Sonatel Academy',
      description: 'Formation intensive en développement web et mobile, pratiques agiles, et architecture logicielle.',
      location: 'Dakar, Sénégal'
    },
    {
      id: '221-licence',
      date: '2023-2024',
      title: 'Licence en Développement Web/Mobile',
      institution: 'Ecole  221 ',
      description: 'Formation approfondie en uix, algorithmes et structures de données.',
      location: 'Dakar, Sénégal'
    },
    {
      id: 'uadb-licence',
      date: '2021-2023',
      title: 'Licence en Développement Web',
      institution: 'Universite Alioune Diop (UADB)',
      description: 'Formation approfondie en algorithmes , structures de données et gestion de projet.',
      location: 'Dakar, Sénégal'
    }
  ];
  
  export const experienceList: Experience[] = [
    {
      id: 'orange-digital-center',
      date: 'Fevrier 2024 / Décembre 2024',
      title: 'Stage développeur fullstack',
      company: 'Orange Digital Center',
      location: 'Dakar, Sénégal',
      role: 'Développeur Full Stack',
      achievements: [
        'Développement d\'applications web modernes ',
        'Travail en équipe avec méthodologie Agile/Scrum',
        'Participation à des projets innovants dans le domaine digital'
      ]
    },
   
  ];
  
  export const certificationList: Certification[] = [

  ];
  
  export const socialLinks: SocialLink[] = [
    {
      id: 'github',
      Icon: GithubIcon,
      label: 'GitHub',
      link: 'https://github.com/avatarodc',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      id: 'linkedin',
      Icon: LinkedinIcon,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/cheikh',
      color: 'hover:text-blue-700'
    },
    {
      id: 'email',
      Icon: Mail,
      label: 'Email',
      link: 'mailto:1000dioop@gmail.com',
      color: 'hover:text-red-600'
    }
  ];
  
  export const contactInfo: Contact = {
    email: '1000dioop@gmail.com',
    phone: '+221 78 137 39 56',
    address: 'Dakar, Pikine, Mbao',
    availability: 'Disponible pour des opportunités'
  };