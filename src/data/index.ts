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
  Sparkles,
  Bot
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
    id: 'smartop360',
    title: 'SmartOp360 - Enterprise Operational ERP',
    description: 'Une solution de gestion opérationnelle de pointe conçue pour centraliser les processus métier complexes. Inclut une intégration IA avancée via un système RAG (Retrieval-Augmented Generation), permettant aux gestionnaires d\'interroger les données d\'inventaire et les rapports via un chatbot intelligent en langage naturel.',
    tech: ['React 18', 'Node.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'LangChain', 'Gemini API', 'Vector DB', 'Material-UI', 'TypeDI'],
    link: 'https://github.com/Cheikhydiop/inesic-api',
    category: 'Full Stack',
    image: 'images/projects/smartop360.png',
    date: 'Janvier 2026',
    demo: ''
  },
  {
    id: 'mbayar-bet',
    title: 'MBAYAR - P2P Wrestling Betting PWA',
    description: 'Une application disruptive transformant l\'expérience des fans de lutte sénégalaise grâce à un modèle de paris Peer-to-Peer (P2P). MBAYAR élimine les intermédiaires en permettant aux utilisateurs de créer et d\'accepter des défis en temps réel. Le système intègre un moteur de paiement intelligent gérant les flux Wave, Orange Money et PayTech, tout en offrant une interface ultra-fluide grâce aux animations Framer Motion et une réactivité instantanée via WebSockets.',
    tech: ['React', 'Node.js', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Framer Motion', 'PWA', 'PayTech/Wave API', 'Tailwind CSS'],
    link: 'https://github.com/Cheikhydiop/fight-ace-app-main',
    category: 'Mobile App',
    image: 'images/projects/mbayar.png',
    date: 'Décembre 2025',
    demo: ''
  },
  {
    id: 'fashion-style',
    title: 'FashionStyle - Marketplace de Mode',
    description: 'Une plateforme e-commerce disruptive connectant tailleurs, vendeurs de tissus et clients. Comprend un système de gestion de magasin (ERP), un portfolio public pour tailleurs, une messagerie temps réel et une gestion des mesures clients. Architecture robuste avec Prisma et architecture en couches.',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Cloudinary', 'Framer Motion'],
    link: 'https://github.com/Cheikhydiop/Typescript_PrismaG7-main',
    category: 'Full Stack',
    image: 'images/projects/tailor.png',
    date: 'Janvier 2025',
    demo: ''
  },
  {
    id: 'wave-senegal-flutter',
    title: 'Wave Sénégal Mobile',
    description: 'Version mobile de Wave Sénégal développée avec Flutter. Application cross-platform permettant les transferts d\'argent et paiements avec une expérience utilisateur native.',
    tech: ['Flutter', 'Dart', 'Firebase', 'GetX', 'REST API', 'Google Maps API'],
    link: 'https://github.com/Cheikhydiop/flutterv1',
    category: 'Mobile App',
    image: 'images/projects/wave.png',
    date: 'Octobre 2024',
    demo: ""
  },
  {
    id: 'react-Ecommerce',
    title: 'Ecommerce Web Appl',
    description: 'Cette version web offre aux utilisateurs la possibilité d\'explorer une boutique en ligne et d\'effectuer leurs achats facilement depuis n\'importe quel appareil connecté à Internet.',
    tech: ['React', 'Framemotion', 'Tailwind'],
    link: 'https://github.com/Cheikhydiop/E-commerce',
    category: 'Web App',
    image: 'images/projects/ecommerce.png',
    date: 'Octobre 2024',
    demo: "https://cheikhdiop.netlify.app/"
  },
  {
    id: 'wave-senegal-refonte',
    title: 'Refonte Wave Sénégal',
    description: 'Amélioration de la plateforme Wave Sénégal avec de nouvelles fonctionnalités innovantes incluant un système d\'envoi programmé et périodique automatique pour optimiser les transactions des utilisateurs.',
    tech: ['Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'Redis', 'Swagger'],
    link: 'https://github.com/Cheikhydiop/money_transfert_angular',
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
    demo: "https://diop-cheikhr.onrender.com/swagger/index.html#/"
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
  }
];

export const skillCategories: Category[] = [
  {
    title: "IA & Data Intelligence",
    icon: Sparkles,
    description: "Expertise en architectures RAG et agents IA autonomes",
    skills: [
      "RAG (Retrieval-Augmented Generation)",
      "LangChain / LangGraph",
      "OpenAI / Google Gemini API",
      "Vector Databases (Pinecone, Chroma)",
      "Prompt Engineering expert",
      "Conception d'Agents IA",
      "NLP & Analyse de données"
    ]
  },
  {
    title: "Frontend",
    icon: Layout,
    description: "Développement d'interfaces utilisateur modernes et réactives",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Material-UI",
      "Flutter (Dart)",
      "Redux / Context API"
    ]
  },
  {
    title: "Backend",
    icon: Server,
    description: "Développement de serveurs et APIs robustes",
    skills: [
      "Node.js (Express / NestJS)",
      "Laravel",
      "Spring Boot",
      "Java",
      "PHP",
      "REST API",
      "JWT Auth / RBAC",
      "Python"
    ]
  },
  {
    title: "Bases de données",
    icon: Database,
    description: "Gestion et optimisation des données",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "Firebase (Firestore / Auth)",
      "Prisma / TypeORM",
      "Redis"
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Server,
    description: "Infrastructure, automatisation et déploiement continu",
    skills: [
      "Git / GitHub / GitLab",
      "Docker & Docker Hub",
      "CI/CD (GitHub Actions, Jenkins)",
      "Vercel / Netlify / Render / Koyeb",
      "Cloudinary (Asset Management)",
      "Supabase / Firebase Hosting",
      "Monitoring & Logs"
    ]
  },
  {
    title: "Bonnes Pratiques & Outils",
    icon: Code,
    description: "Qualité logicielle, tests et gestion de projet",
    skills: [
      "Principes SOLID & Clean Code",
      "Sécurisation API (JWT, RBAC)",
      "Tests (Cypress, Jest, Postman)",
      "Documentation (Swagger, JSDoc)",
      "Agile (Scrum, Jira, Trello)",
      "Validation de données (Zod, Yup)",
      "Figma (Prototype UI/UX)"
    ]
  }
];

export const educationList: Education[] = [
  {
    id: 'uadb-licence',
    date: '2021 - 2025',
    title: 'Licence en Développement Applicatif et Administration Web',
    institution: 'Université Alioune Diop (UADB)',
    description: 'Formation approfondie alliant théorie et pratique : algorithmes, structures de données, administration système, et développement full-stack moderne.',
    location: 'Bambey, Sénégal'
  },
  {
    id: 'sonatel-academy',
    date: '2023 - 2024',
    title: 'Certification Développeur Web & Mobile',
    institution: 'Sonatel Academy (Orange Digital Center)',
    description: 'Formation intensive axée sur React, Node.js, et les pratiques agiles. Réalisation de projets d\'envergure professionnelle.',
    location: 'Dakar, Sénégal'
  },
  {
    id: 'bac-scientifique',
    date: '2020',
    title: 'Baccalauréat Scientifique',
    institution: 'Lycée de Mbao',
    description: 'Série scientifique avec mention.',
    location: 'Dakar, Sénégal'
  }
];

export const experienceList: Experience[] = [
  {
    id: 'mbayar-bet-exp',
    date: 'Octobre 2025 - Janvier 2026',
    title: 'Développeur Full Stack Senior (Lead Freelance)',
    company: 'MBAYAR BET',
    location: 'Dakar, Sénégal',
    role: 'Lead Architect & Full Stack Developer',
    achievements: [
      'Conception d\'une architecture PWA haute performance (Score 98/100 Lighthouse) gérant des flux P2P en temps réel.',
      'Mise en place de WebSockets sécurisés via Socket.io réduisant la latence de mise à jour des paris à < 100ms.',
      'Intégration complexe de passerelles de paiement (PayTech, Wave) avec gestion de portefeuille transactionnel atomique.',
      'Optimisation des requêtes PostgreSQL via Prisma ORM, améliorant les temps de réponse de 35%.'
    ]
  },
  {
    id: 'fashion-style-exp',
    date: 'Janvier 2025 - Septembre 2025',
    title: 'Analyste Programmeur & Lead Backend',
    company: 'FASHION STYLE (Fashion Tech)',
    location: 'Sénégal',
    role: 'Full Stack & Database Designer',
    achievements: [
      'Développement d\'un ERP complet pour tailleurs permettant la gestion d\'inventaire et le suivi des mesures clients.',
      'Architecture en couches (Layered Architecture) garantissant une séparation stricte des préoccupations et une extensibilité facile.',
      'Implémentation d\'un système de messagerie et de notifications interactives pour renforcer l\'engagement clients.',
      'Sécurisation des APIs via JWT et RBAC, assurant la protection des données sensibles des utilisateurs.'
    ]
  },
  {
    id: 'sonatel-stage',
    date: 'Février 2025 - Mai 2025',
    title: 'Analyste Programmeur Full Stack (Freelance)',
    company: 'Sonatel (Groupe Orange)',
    location: 'Dakar, Sénégal',
    role: 'Full Stack Developer',
    achievements: [
      'Conception d\'une solution de gestion des agents de sécurité pour les sites Sonatel via NestJS.',
      'Mise en œuvre des principes SOLID et du Clean Code, réduisant la dette technique sur les projets internes.',
      'Développement d\'un module mobile (Flutter) avec géolocalisation et système de rondes.',
      'Impact : Amélioration de 40% de l\'efficacité opérationnelle de la sécurité physique.'
    ]
  },
  {
    id: 'odc-stage',
    date: 'Février 2024 - Décembre 2024',
    title: 'Stage Développeur Full Stack',
    company: 'Orange Digital Center',
    location: 'Dakar, Sénégal',
    role: 'Full Stack Developer',
    achievements: [
      'Développement d\'applications web avec React et Spring Boot en environnement Agile.',
      'Cofondateur et Chef de projet sur plusieurs applications internes critiques.',
      'Mise en place de documentation Swagger/OpenAPI pour l\'ensemble des microservices.'
    ]
  }
];

export const certificationList: Certification[] = [
  {
    id: 'gmi-mentorat',
    date: 'Septembre 2025',
    title: 'Global Mentorship Initiative (GMI)',
    platform: 'GMI Program',
    link: '#',
    description: 'Programme de mentorat international de 12 semaines sur la stratégie de carrière et le leadership professionnel.',
    skills: ['Leadership', 'Communication', 'Career Strategy']
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    Icon: GithubIcon,
    label: 'GitHub',
    link: 'https://github.com/Cheikhydiop',
    color: 'hover:text-gray-800 dark:hover:text-gray-200'
  },
  {
    id: 'linkedin',
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/diop-cheikh-988413240',
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
  address: 'Dakar, Mbao, Sénégal',
  availability: 'Disponible pour des opportunités internationales'
};