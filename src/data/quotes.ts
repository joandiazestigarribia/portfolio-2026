export type Quote = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const quotes: Quote[] = [
  {
    id: "pm",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, feugiat duis habitant sem laoreet inceptos placerat, per non magna lectus quam class eros. Tellus nec velit nulla litora aliquet malesuada fusce accumsan, mattis a pulvinar fermentum hendrerit potenti in quisque facilisi, vitae mollis ut ornare diam taciti sollicitudin. Convallis risus netus parturient justo rhoncus gravida, integer tortor dui sed fames primis, habitasse id nascetur eleifend congue.",
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
      "Joan es un excelente profesional, es de esas personas que hacen que trabajar en equipo sea mucho más fácil. Destaco especialmente su capacidad técnica como desarrollador, su criterio a la hora de resolver problemas y la predisposición que siempre tiene para **dar una mano, compartir conocimiento** o buscar una solución en conjunto. Pero más allá de lo técnico, algo que realmente valoro de Joan es su buena onda y la forma en la que se relaciona con el equipo, una persona colaborativa y siempre dispuesto a aportar. un gran compañero y una persona con la que da gusto trabajar. Sin dudas, alguien que **suma muchísimo tanto desde lo profesional como desde lo humano**.",
    name: "Nahuel Leguizamon",
    role: "Frontend Developer",
  },
  {
    id: "dev2",
    quote:
      "Me encantó trabajar con Joan. Fue **un pilar fundamental en el equipo** y aportó mucha seguridad al enfrentar cada uno de los proyectos en los que colaboramos. Destaco su excelente predisposición, su confiabilidad y su buena energía, que impactaba positivamente en el ánimo del equipo y hacía más fácil cualquier desafío. Sin dudas, es el tipo de compañero con el que **siempre querrías volver a trabajar**.",
    name: "Franco Almaraz",
    role: "Frontend Developer",
  },
];
