import { profile } from "@/data/profile";
import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    htmlLang: "en",
    ogLocale: "en_US",
  },
  nav: {
    ariaLabel: "Sections",
    backToTop: "Back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: {
      label: "ES",
      ariaLabel: "View site in Spanish",
    },
    sections: [
      { id: "home", label: "Home" },
      { id: "experience", label: "Experience" },
      { id: "about", label: "About me" },
      { id: "recommendations", label: "Recommendations" },
      { id: "contact", label: "Contact" },
    ],
  },
  hero: {
    contactCta: "Contact →",
    cvCta: "Resume ↓",
  },
  profile: {
    cvHref: "/resume-joan-diaz-estigarribia.pdf",
    cvFileName: "Joan Diaz Estigarribia - CV Fullstack EN.pdf",
    experienceYears: "+5 years",
    thesis:
      "I build polished interfaces, I enjoy paying attention to detail, and I treat **software architecture as an art**.",
    summary:
      "Full Stack Developer with 5+ years of experience building scalable web applications in production. React, Next.js and TypeScript on the frontend; Node.js, NestJS and PostgreSQL on the backend.",
    about: {
      heading: "About me",
      intro: "A bit of context.",
      paragraphs: [
        "I'm Joan, a full stack developer grounded in React, Next.js, TypeScript and Node.js, with 5+ years building web products from scratch to production.",
        "I learned to think in terms of performance, architecture and user experience working on high-traffic platforms. Today I still apply that same discipline to every frontend or fullstack product I build, with the same **care for detail and clean architecture**.",
        "Outside of code, you'll probably find me sipping mate while watching a movie, or playing soccer on the weekend.",
      ],
    },
  },
  experience: {
    heading: "Experience",
    present: "present",
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    entries: [
      {
        id: "innew-fullstack",
        company: "INNEW Software Company",
        role: "Full Stack Developer",
        location: "Resistencia, Argentina",
        startDate: "2021-09",
        endDate: "present",
        highlights: [
          "Implemented and maintained 30+ production web applications, building complex components with React and TypeScript.",
          "Developed backend middleware in Node.js and TypeScript with a multi-platform architecture, integrating third-party REST APIs and webhooks.",
          "Designed asynchronous pipelines (stock, pricing, orders) on RabbitMQ, with workers, exponential-backoff retries and a Circuit Breaker for rate limits.",
          "Modeled relational databases in MySQL with Prisma ORM (migrations, indexes, repositories) and built cross-cutting services for caching, observability and error handling.",
          "Improved performance in production applications (rendering optimization, lazy loading, load times) and in high-volume processes through data streaming.",
          "Contributed to technical decisions, estimates and Scrum planning, taking a leadership role in the Project Manager's absence (running dailies, assigning tasks strategically).",
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
        company: "Freelance · Independent projects",
        role: "Full Stack Developer",
        location: "Remote",
        startDate: "2021-05",
        endDate: "present",
        highlights: [
          "Architected and delivered fullstack web applications end to end with Next.js, React and TypeScript, from requirements gathering to production deployment.",
          "Designed and built REST APIs and backend services with Node.js and NestJS, including JWT authentication and modular architecture.",
          "Modeled relational databases in PostgreSQL with TypeORM and Prisma: migrations, indexes and optimized queries.",
          "Implemented automated testing (unit and E2E) with Vitest and Playwright, containerization with Docker and deployments on Vercel and Railway, following clean architecture principles.",
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
    heading: "Recommendations & Feedback",
    entries: [
      {
        id: "pm",
        quote:
          "As his leader, I'm incredibly proud to recommend Joan. He's one of those people **you always want on your team**: not only is he impeccable on the technical side and keeps looking for a way until he finds the solution, but he also has an enormous human warmth. He's responsible, respectful and always ready to give his teammates a hand when they need it. Working with him gives you the peace of mind of knowing things will turn out well, and that we'll also have a good time in the process. Joan doesn't just add value for everything he knows and solves, but for the great person he is. **I recommend him with absolute confidence** for any challenge looking for excellence and great human value.",
        name: "Daiana Kovacs",
        role: "Project Manager",
      },
      {
        id: "design",
        quote:
          "I had the chance to work alongside Joan on several projects and his contribution was key to achieving high-quality results. I want to highlight his **attention to detail**, delivering projects flawlessly. Beyond his technical talent, he always brings a collaborative and proactive attitude, creating a positive work environment and solving challenges with creativity. I fully recommend Joan for any challenge he faces; he's a committed, innovative and results-oriented professional, aside from being **a great human being**.",
        name: "Josefina Martinet",
        role: "UX/UI Designer",
      },
      {
        id: "dev1",
        quote:
          "I loved working with Joan. He was **a fundamental pillar of the team** and brought a lot of confidence when facing each of the projects we collaborated on. I highlight his excellent disposition, his reliability and his good energy, which positively impacted the team's mood and made any challenge easier. Without a doubt, he's the kind of teammate **you'd always want to work with again**.",
        name: "Franco Almaraz",
        role: "Frontend Developer",
      },
      {
        id: "dev2",
        quote:
          "Joan is an excellent professional, one of those people who make working as a team much easier. I especially highlight his technical ability as a developer, his judgment when solving problems, and the disposition he always shows to **lend a hand, share knowledge** or look for a solution together. But beyond the technical side, something I really value about Joan is his good vibe and the way he connects with the team: a collaborative person, always willing to contribute. A great teammate and someone it's a pleasure to work with. Without a doubt, someone who **adds a great deal both professionally and as a person**.",
        name: "Nahuel Leguizamon",
        role: "Frontend Developer",
      },
    ],
  },
  contact: {
    heading: "Contact",
    title: "Let's talk?",
    body: "If you have an idea, a project, or just want to talk code, drop me a line.",
  },
  linksPage: {
    metaTitle: "Links",
    metaDescription: `Contact links for ${profile.name}.`,
    greeting: "Hi! ",
    intro: "I'm Joan, a fullstack developer.",
    introLinks: "Here are my contact links:",
    navLabel: "Social & contact",
    portfolioSubtitle: "Professional Experience",
    cvTitle: "Resume",
    cvSubtitle: "Download PDF · English",
    linkedinSubtitle: "Professional profile",
  },
};
