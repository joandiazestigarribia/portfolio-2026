export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  summary: string;
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "innew-frontend",
    company: "INNEW Software Company",
    role: "Frontend Web Developer",
    startDate: "2021-09",
    endDate: "present",
    summary:
      "Trabajo en el frontend y backend de plataformas de ecommerce con tráfico alto, donde se presta mucha atención a la performance. Armo componentes reutilizables con React, TypeScript y Node, integro todo vía REST y GraphQL, y participo en las decisiones técnicas del equipo, code reviews incluidos. Más de una vez terminé liderando cuando hizo falta.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "REST APIs", "VTEX IO"],
  },
  {
    id: "independent-fullstack",
    company: "Proyectos independientes",
    role: "Fullstack Developer",
    startDate: "2021-05",
    endDate: "present",
    summary:
      "Acá desarrollo todo por mi cuenta, desde el primer commit hasta el deploy: frontend con React y Next.js, API con Node.js y Nest.js, base de datos en PostgreSQL, y testing (unit y e2e) para asegurar la calidad. Empaqueto con Docker y despliego en la nube. Es el espacio donde tengo mayor libertad para diseñar la arquitectura como me parece correcto.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Nest.js", "PostgreSQL", "Docker"],
  },
];
