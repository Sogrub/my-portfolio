export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const translations = {
  en: {
    // Header
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero
    hero: {
      title: 'Transforming <b>software development</b>, creating <b>quality experiences.</b>',
      description: "Hi, I'm <b>Diego Burgos</b>, software developer and technology enthusiast.",
      cta: "See my work",
    },
    // About
    about: {
      title: "About Me",
      fullstack: "Full Stack",
      developer: "Developer",
      mainCard: "Full Stack Development focused on scalable solutions",
      communication: "Effective communication and collaborative teamwork",
      remoteReady: "Remote Ready",
      learning: "Always learning",
      techStack: "My Tech Stack",
      passion: "Passionate about software development and continuous innovation",
      automation: "Automation",
      aiTools: "N8N, AI & Productivity Tools",
      startProject: "Shall we start a project together?",
      copyEmail: "Copy my email",
      codeComment: "// Run this in your console ;)",
    },
    // Experience
    experience: {
      title: "Experience",
      inlaze: {
        role: "Full Stack Developer",
        highlights: [
          "Successfully executed the complete database migration to a relational model, achieving a more organized, scalable and efficient structure.",
          "Integrated and automated processes connecting multiple technologies (Hubspot, SuperMetrics, Meta, Mailjet), increasing operational efficiency by 35%.",
          "Developed a scraper with Python and Selenium for real-time data collection, automatically feeding databases.",
          "Optimized the development workflow by incorporating AI tools, achieving a significant increase in productivity.",
        ],
      },
      econtainers: {
        role: "Full Stack Developer",
        highlights: [
          "Implemented AI tools that transformed key operational processes, achieving a 28% increase in efficiency.",
          "Facilitated the adoption of agile methodologies (SCRUM), improving communication between areas and increasing productivity by more than 20%.",
          "Designed and developed an internal web application that reduced resource management time by 30%.",
          "Integrated OpenAI models into web applications to automate processes and improve user experience.",
        ],
      },
      scotiabank: {
        role: "Junior MIS Analyst",
        highlights: [
          "Designed and implemented technological solutions that optimized report execution times by more than 30%.",
          "Automated internal processes through developments that reduced manual tasks and accelerated the delivery of key information.",
        ],
      },
    },
    // Footer
    footer: {
      connect: "Connect with me",
      designedBy: "Designed and developed by",
      rights: "All rights reserved.",
    },
  },
  es: {
    // Header
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    // Hero
    hero: {
      title: 'Transformando el <b>desarrollo de software</b>, creando <b>experiencias de calidad.</b>',
      description: "Hola, soy <b>Diego Burgos</b>, desarrollador de software y amante de la tecnología.",
      cta: "Ver mi trabajo",
    },
    // About
    about: {
      title: "Sobre Mí",
      fullstack: "Full Stack",
      developer: "Developer",
      mainCard: "Desarrollo Full Stack con enfoque en soluciones escalables",
      communication: "Comunicación efectiva y trabajo en equipo colaborativo",
      remoteReady: "Remote Ready",
      learning: "Siempre aprendiendo",
      techStack: "Mi Tech Stack",
      passion: "Apasionado por el desarrollo de software y la innovación continua",
      automation: "Automatización",
      aiTools: "N8N, IA & Herramientas de Productividad",
      startProject: "¿Iniciamos un proyecto juntos?",
      copyEmail: "Copiar mi email",
      codeComment: "// Run this in your console ;)",
    },
    // Experience
    experience: {
      title: "Experiencia",
      inlaze: {
        role: "Full Stack Developer",
        highlights: [
          "Ejecuté con éxito la migración completa de la base de datos a un modelo relacional, logrando una estructura más organizada, escalable y eficiente.",
          "Integré y automaticé procesos conectando múltiples tecnologías (Hubspot, SuperMetrics, Meta, Mailjet), incrementando en 35% la eficiencia operativa.",
          "Desarrollé un scraper con Python y Selenium para la recolección en tiempo real de información, alimentando bases de datos automáticamente.",
          "Optimicé el flujo de desarrollo incorporando herramientas de IA, logrando un aumento significativo de la productividad.",
        ],
      },
      econtainers: {
        role: "Full Stack Developer",
        highlights: [
          "Implementé herramientas de IA que transformaron procesos operativos clave, logrando un aumento del 28% en la eficiencia.",
          "Facilité la adopción de metodologías ágiles (SCRUM), mejorando la comunicación entre áreas y aumentando la productividad en más del 20%.",
          "Diseñé y desarrollé una aplicación web interna que redujo en un 30% el tiempo de gestión de recursos.",
          "Integré modelos de OpenAI en aplicaciones web para automatizar procesos y mejorar la experiencia del usuario.",
        ],
      },
      scotiabank: {
        role: "Junior MIS Analyst",
        highlights: [
          "Diseñé e implementé soluciones tecnológicas que optimizaron los tiempos de ejecución de reportes en más de un 30%.",
          "Automaticé procesos internos mediante desarrollos que redujeron tareas manuales y aceleraron la entrega de información clave.",
        ],
      },
    },
    // Footer
    footer: {
      connect: "Conecta conmigo",
      designedBy: "Diseñado y desarrollado por",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type Lang = keyof typeof translations;
