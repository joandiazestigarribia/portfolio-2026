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
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, feugiat duis habitant sem laoreet inceptos placerat, per non magna lectus quam class eros. Tellus nec velit nulla litora aliquet malesuada fusce accumsan.",
    name: "Josefina Martinet",
    role: "UX/UI Designer",
  },
  {
    id: "dev1",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, feugiat duis habitant sem laoreet inceptos placerat, per non magna lectus quam class eros. Tellus nec velit nulla litora aliquet malesuada fusce accumsan, mattis a pulvinar fermentum hendrerit potenti in quisque facilisi, vitae mollis ut ornare diam taciti sollicitudin.",
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
