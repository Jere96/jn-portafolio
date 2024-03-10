import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  esolutions,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Esolutions",
    icon: esolutions,
    iconBg: "#383E56",
    date: "Feb 2022 - May 2023",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando React.js y otras tecnologías relacionadas.",
      "Collaborando con un equipo de desarrolladores, analistas, testers, diseñadores, etc para desarrollar aplicaciones complejas.",
      "Implementando responsive design y cross-browser compatibility.",
      "Participando en reuniones y capacitaciones para mejorar mis habilidades.",
    ],
  },
  {
    title: "Java Development",
    company_name: "Esolutions",
    icon: esolutions,
    iconBg: "#383E56",
    date: "Feb 2022 - May 2023",
    points: [
      "Utilizando Java 8 y 11 en diversos proyectos del lado del servidor",
      "Utilizando herramientas de testing",
      "Implementacion de SpringBoot para optimizar el proyecto.",
      "Participando en Cursos dados por la empresa para mejorar mis habilidades",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: esolutions,
    iconBg: "#383E56",
    date: "Jun 2020 - Sep 2021",
    points: [
      "Desarrollando paginas web responsive para personas particulares",
      "Deploying y mantenimiento",
      "Maquetacion y layouts",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "?",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Estoy buscando un nuevo desafio. Me gustaria trabajar con algunas de las siguientes tecnologias:",
      "Reactjs, Node.js, Python, Qwik, Mongodb.",
      "Aunque no es necesario que sean estrictamente estas. Estaré conforme en un proyecto interesante con gente que me haga sentir comodo. Estoy dispuesto a cualquier desafio"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "React en profundidad. MERN",
    name: "Fernando Herrera",
    designation: "Professor and developer",
    company: "Udemy"
  },
  {
    testimonial:
      "Aun continúo perfeccionandome en Reactjs y Nodejs creando aplicaciones web escalables y optimas.",
    name: "Fazt",
    designation: "Courses",
    company: "Fazt",
  },
  {
    testimonial:
      "Optimizando sitios web (SEO) para lograr mejoras en el tráfico",
    name: "UTN",
    designation: "web development",
    company: "UTN-FRBA",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
