import { profile } from "@/data/profile";

export const es = {
  meta: {
    htmlLang: "es-AR",
    ogLocale: "es_AR",
  },
  nav: {
    ariaLabel: "Secciones",
    backToTop: "Volver arriba",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchLanguage: {
      label: "EN",
      ariaLabel: "Ver sitio en inglés",
    },
    sections: [
      { id: "home", label: "Inicio" },
      { id: "experience", label: "Experiencia" },
      { id: "about", label: "Sobre mí" },
      { id: "recommendations", label: "Recomendaciones" },
      { id: "contact", label: "Contacto" },
    ],
  },
  hero: {
    contactCta: "Contacto →",
    cvCta: "CV ↓",
  },
  profile: {
    cvHref: "/cv-joan-diaz-estigarribia.pdf",
    cvFileName: "Joan Diaz Estigarribia - CV Fullstack ES.pdf",
    experienceYears: "+5 años",
    thesis:
      "Construyo interfaces prolijas, disfruto prestar atención a los detalles y tomar la **arquitectura de software como un arte**.",
    summary:
      "Desarrollador Full Stack con más de 5 años de experiencia construyendo aplicaciones web escalables en producción. React, Next.js y TypeScript en frontend; Node.js, NestJS y PostgreSQL en backend.",
    about: {
      heading: "Sobre mí",
      intro: "Un poco de contexto.",
      paragraphs: [
        "Soy Joan, desarrollador full stack con base en React, Next.js, TypeScript y Node.js, y más de 5 años armando productos web desde cero hasta producción.",
        "Aprendí a pensar en performance, arquitectura y experiencia de usuario trabajando en plataformas de alto tráfico. Hoy sigo eligiendo aplicar esa misma disciplina a cualquier producto frontend o fullstack que construyo, con el mismo **cuidado por el detalle y la arquitectura limpia**.",
        "Fuera del código, seguramente me encuentres con unos mates viendo una película, o jugando al fútbol el fin de semana.",
      ],
    },
  },
  experience: {
    heading: "Experiencia",
    present: "hoy",
    months: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    entries: [
      {
        id: "innew-fullstack",
        company: "INNEW Software Company",
        role: "Desarrollador Full Stack",
        location: "Resistencia, Chaco",
        startDate: "2021-09",
        endDate: "present",
        highlights: [
          "Implementé y mantuve más de 30 aplicaciones web en producción, construyendo componentes complejos con React y TypeScript.",
          "Desarrollé middleware backend en Node.js y TypeScript con arquitectura multiplataforma, integrando APIs REST de terceros y webhooks.",
          "Diseñé pipelines asíncronos (stock, precios, órdenes) sobre RabbitMQ, con workers, reintentos con backoff exponencial y Circuit Breaker ante rate limits.",
          "Modelé bases de datos relacionales en MySQL con Prisma ORM (migraciones, índices, repositorios) y construí servicios transversales de caché, observabilidad y manejo de errores.",
          "Optimicé performance en aplicaciones productivas (renderizado, lazy loading, tiempos de carga) y en procesos de alto volumen mediante streaming de datos.",
          "Participé en decisiones técnicas, estimaciones y planificación SCRUM, asumiendo liderazgo en ausencia del Project Manager (coordinación de dailies y asignación de tareas).",
        ],
        tags: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "RabbitMQ",
          "MySQL",
          "Prisma",
          "VTEX IO",
        ],
      },
      {
        id: "freelance-fullstack",
        company: "Freelance · Proyectos independientes",
        role: "Desarrollador Full Stack",
        location: "Remoto",
        startDate: "2021-05",
        endDate: "present",
        highlights: [
          "Arquitectura y desarrollo end-to-end de aplicaciones web con Next.js, React y TypeScript, desde el relevamiento hasta el despliegue en producción.",
          "Diseño e implementación de APIs REST y servicios backend con Node.js y NestJS, con autenticación JWT y arquitectura modular.",
          "Modelado de bases de datos relacionales en PostgreSQL con TypeORM y Prisma: migraciones, índices y consultas optimizadas.",
          "Testing automatizado (unitario y E2E) con Vitest y Playwright, containerización con Docker y despliegues en Vercel y Railway bajo principios de clean architecture.",
        ],
        tags: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "NestJS",
          "PostgreSQL",
          "Prisma",
          "Docker",
        ],
      },
    ],
  },
  quotes: {
    heading: "Recomendaciones y Comentarios",
    entries: [
      {
        id: "pm",
        quote:
          "Como su líder, me da muchísimo orgullo recomendar a Joan. Es de esas personas que **querés tener siempre en tu equipo**: no solo es impecable en lo técnico y le busca la vuelta a todo hasta encontrar la solución, sino que además tiene una calidez humana enorme. Es responsable, respetuoso y siempre está para dar una mano a sus compañeros cuando lo necesitan. Trabajar con él te da esa tranquilidad de saber que las cosas van a salir bien y que, además, la vamos a pasar bien en el proceso. Joan no solo suma por todo lo que sabe y resuelve, sino por la gran persona que es. **Lo recomiendo con absoluta confianza** para cualquier reto que busque excelencia y gran valor humano.",
        name: "Daiana Kovacs",
        role: "Project Manager",
      },
      {
        id: "design",
        quote:
          "Tuve la oportunidad de trabajar junto a Joan en varios proyectos y su aporte fue clave para lograr resultados de gran calidad. Quiero remarcar su **atención al detalle**, desarrollando proyectos de manera impecable. Además de su talento técnico, aporta siempre una actitud colaborativa y proactiva, generando un ambiente de trabajo positivo y resolviendo desafíos con creatividad. Recomiendo plenamente a Joan para cualquier desafío que enfrente, es un profesional comprometido, innovador y orientado a resultados, aparte de tener **una gran calidad humana**.",
        name: "Josefina Martinet",
        role: "UX/UI Designer",
      },
      {
        id: "dev1",
        quote:
          "Me encantó trabajar con Joan. Fue **un pilar fundamental en el equipo** y aportó mucha seguridad al enfrentar cada uno de los proyectos en los que colaboramos. Destaco su excelente predisposición, su confiabilidad y su buena energía, que impactaba positivamente en el ánimo del equipo y hacía más fácil cualquier desafío. Sin dudas, es el tipo de compañero con el que **siempre querrías volver a trabajar**.",
        name: "Franco Almaraz",
        role: "Frontend Developer",
      },
      {
        id: "dev2",
        quote:
          "Joan es un excelente profesional, es de esas personas que hacen que trabajar en equipo sea mucho más fácil. Destaco especialmente su capacidad técnica como desarrollador, su criterio a la hora de resolver problemas y la predisposición que siempre tiene para **dar una mano, compartir conocimiento** o buscar una solución en conjunto. Pero más allá de lo técnico, algo que realmente valoro de Joan es su buena onda y la forma en la que se relaciona con el equipo, una persona colaborativa y siempre dispuesto a aportar. un gran compañero y una persona con la que da gusto trabajar. Sin dudas, alguien que **suma muchísimo tanto desde lo profesional como desde lo humano**.",
        name: "Nahuel Leguizamon",
        role: "Frontend Developer",
      },
    ],
  },
  contact: {
    heading: "Contacto",
    title: "¿Hablamos?",
    body: "Si tenés una idea, un proyecto o querés charlar de código, escribime.",
  },
  linksPage: {
    metaTitle: "Links",
    metaDescription: `Enlaces de contacto de ${profile.name}.`,
    greeting: "¡Hola! ",
    intro: "Soy Joan, desarrollador fullstack.",
    introLinks: "Te dejo mis links de contacto:",
    navLabel: "Redes y contacto",
    portfolioSubtitle: "Experiencia Profesional",
    cvTitle: "CV",
    cvSubtitle: "Descargar PDF · Español",
    linkedinSubtitle: "Perfil profesional",
  },
};

export type Dictionary = typeof es;
