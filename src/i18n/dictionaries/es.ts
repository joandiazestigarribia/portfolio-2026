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
    experienceYears: "+5 años",
    thesis:
      "Construyo interfaces prolijas, disfruto prestar atención a los detalles y tomar la **arquitectura de software como un arte**.",
    summary:
      "Fullstack/Frontend Developer con base en React, Next.js, TypeScript y Node.js. 5 años armando productos web, del diseño al deploy.",
    about: {
      heading: "Sobre mí",
      intro: "Un poco de contexto.",
      paragraphs: [
        "Soy Joan, developer fullstack con base en React, Next.js, TypeScript y Node.js, y 5 años armando productos web desde cero hasta producción.",
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
        id: "innew-frontend",
        company: "INNEW Software Company",
        role: "Frontend Web Developer",
        startDate: "2021-09",
        endDate: "present",
        summary:
          "Trabajo en el frontend y backend de plataformas de ecommerce con tráfico alto, donde se presta mucha atención a la performance. Armo componentes reutilizables con React, TypeScript y Node, integro todo vía REST y GraphQL, y participo en las decisiones técnicas del equipo, code reviews incluidos. Más de una vez terminé liderando cuando hizo falta.",
        tags: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "GraphQL",
          "REST APIs",
          "VTEX IO",
        ],
      },
      {
        id: "independent-fullstack",
        company: "Proyectos independientes",
        role: "Fullstack Developer",
        startDate: "2021-05",
        endDate: "present",
        summary:
          "Acá desarrollo todo por mi cuenta, desde el primer commit hasta el deploy: frontend con React y Next.js, API con Node.js y Nest.js, base de datos en PostgreSQL, y testing (unit y e2e) para asegurar la calidad. Empaqueto con Docker y despliego en la nube. Es el espacio donde tengo mayor libertad para diseñar la arquitectura como me parece correcto.",
        tags: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Nest.js",
          "PostgreSQL",
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
    cvSubtitle: "Descargar PDF",
    linkedinSubtitle: "Perfil profesional",
  },
};

export type Dictionary = typeof es;
