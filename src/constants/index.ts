// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  python,
  mongodb,
  git,
  figma,
  docker,
  meta,
  sparks,
  corizo,
  houseware,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  dendrite,
  django,
  project7,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Hemanthroyalll/Portfolio_react",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
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
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "Python",
    icon: python,
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
    name: "django",
    icon: django,
  },
  
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Python-Developer Intern",
    company_name: "Sparks Foundation",
    icon: sparks,
    iconBg: "#383E56",
    date: "March 2021 - Jul 2021",
    points: [
      "Mastered the core principles and practices of Python programming, leading to the efficient development and deployment of web applications.",
      "Troubleshooted and optimized pre-existing codebase,leading to a 20% increase in application performance.",
      "Led the creation and deployment of a dynamic e-commerce website using Django, which now serves over1,000 active users daily.",
      "Developed a streamlined content management system using Flask, reducing the time needed for content updates by 5.",
    ],
  },
  {
    title: "Data Analysis Intern",
    company_name: "Corizo",
    icon: corizo,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Dec 2023",
    points: [
      "Performed extensive cleaning and preprocessing on large client datasets, ensuring data quality and readiness for analysis. ",
      "Created insightful dashboards using PowerBI andQuickSight, highlighting key data trends and metrics for client decision-making.",
      "Analyzed datasets to extract meaningful insights, aiding clients in understanding complex data patterns for strategic planning. ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Dendrite ai",
    icon: dendrite,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJS Developer",
    company_name: "Houseware",
    icon: houseware,
    iconBg: "#383E56",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Developed and enhanced user interfaces using React JS, contributing to significant improvements in user experience and performance.",
"Integrated RESTful APIs and employed state management techniques, ensuring seamless data flow and interaction within applications.",
"Implemented responsive web design principles, making applications adaptable to various devices and screen sizes.",
"Participated in Agile development cycles, contributing to sprint planning, daily stand-ups, and code reviews, fostering a collaborative team environment.",
    ],
  },
  
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    name: "Hemanth Royal",
    designation: "Software Engineer",
    company: "Corizo",
    image: user1,
  },
  {
    testimonial:
      "The computer was born to solve problems that did not exist before.",
    name: "Bill Gates",
    designation: "Former CEO",
    company: "Microsoft",
    image: user2,
  },
  {
    testimonial:
      "One of the best programming skills you can have is knowing when to walk away for a while.",
    name: "Oscar Godson",
    designation: "Co-founder",
    company: "Level Up",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  
  {
    name: "IxMovix",
    description:
      "Movix is the best movies database application available on youtube with top notch frontend technologies such as React, Redux & SCSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Html & CSS",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Hemanthroyalll/Movix-Full-stack-Website",
    live_site_link: "https://ixmovix.netlify.app/",
  },
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Metaverse",
    description:
      "",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Hemanthroyalll/React-MetaVerse-",
    live_site_link: "https://metaaaverseee.netlify.app/",
  },
  {
    name: "Bank App",
    description:
      "",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Hemanthroyalll/Bank-Website-React",
    live_site_link: "https://hoobankkkkkk.netlify.app/",
  },
  {
    name: "Nike-Clone website",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Hemanthroyalll/React-Tailwind-Nike-Website",
    live_site_link: "https://snikes.netlify.app/",
  },
  {
    name: "Instagram Clone - React",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Carsite",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://github.com/Hemanthroyalll/Car_website_react",
    live_site_link: "https://car-hub-react.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/hemanthrachaboyina/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Hemanthroyalll",
  },
] as const;
