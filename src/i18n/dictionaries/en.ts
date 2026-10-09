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
    experienceYears: "+5 years",
    thesis:
      "I build polished interfaces, I enjoy paying attention to detail, and I treat **software architecture as an art**.",
    summary:
      "Fullstack/Frontend Developer grounded in React, Next.js, TypeScript and Node.js. 5 years building web products, from design to deploy.",
    about: {
      heading: "About me",
      intro: "A bit of context.",
      paragraphs: [
        "I'm Joan, a fullstack developer grounded in React, Next.js, TypeScript and Node.js, with 5 years building web products from scratch to production.",
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
        id: "innew-frontend",
        company: "INNEW Software Company",
        role: "Frontend Web Developer",
        startDate: "2021-09",
        endDate: "present",
        summary:
          "I work on the frontend and backend of high-traffic ecommerce platforms, where performance gets a lot of attention. I build reusable components with React, TypeScript and Node, integrate everything via REST and GraphQL, and take part in the team's technical decisions, code reviews included. More than once I ended up leading the team when it was needed.",
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
        company: "Independent projects",
        role: "Fullstack Developer",
        startDate: "2021-05",
        endDate: "present",
        summary:
          "Here I build everything myself, from the first commit to the deploy: frontend with React and Next.js, API with Node.js and Nest.js, PostgreSQL database, and testing (unit and e2e) to guarantee quality. I package with Docker and deploy to the cloud. This is the space where I have the most freedom to design the architecture the way I think is right.",
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
    cvSubtitle: "Download PDF",
    linkedinSubtitle: "Professional profile",
  },
};
