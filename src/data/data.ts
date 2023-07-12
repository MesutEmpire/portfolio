// new data
import type {IProjects, IContact, ISkills} from "@/interfaces/IProjects";
export const contactData:IContact = {
  email: "mailto:samwainaina01@gmail.com",
  github: "https://github.com/MesutEmpire",
  discord: "http://discordapp.com/users/1034783062678048828",
  figma: "https://www.figma.com/",
  dev: "https://dev.to/mesutempire",
    linkedin:"https://www.linkedin.com/in/samuel-wainaina01/"
};
export const factsData:string[] =
   [  "I am an Arsenal fan.",
       "I love swimming.",
       "My favorite series is 'The Originals'.",
       "I enjoy watching 'The Flash'.",
  ]
export const projectsData:IProjects[]= [
    {
        name: "The Hut",
        description: "The Hut is a property management system for landlords and tenants. It offers features like rent collection, a tenant complaint section, and rent due notifications. With a focus on improving the housing experience, it simplifies property management tasks and provides valuable insights.",
        technologies: ["React", "Node js", "MongoDB", "Express js", "Redux","Material UI"],
        level: "decent",
        url: {
            img: "thehut.png",
            live: "https://thehut-frontend.azurewebsites.net/",
            github: "https://github.com/TechXS/TheHut",
        },
    },
    {
        name: "AppSecOps",
        description: "AppSecOps is an essential app for securing your mobile applications, ensuring both speed and safety.It simplifies development with downloadable code snippets and utilize our helpful tutorials to enhance your efficiency with the system.",
        technologies: ["Nuxt", "Node js", "MongoDB", "Express js", "Pinia","Redis","Tailwind CSS"],
        level: "decent",
        url: {
            img: "appsecops.png",
            live: "",
            github: "https://github.com/MesutEmpire/AppSecOps-Frontend",
        },
    },
    {
        name: "Pharma Track",
        description: "Pharma Track is a user-friendly app for efficient pharmacy inventory management. It ensures accuracy, simplifies processes, and helps you maintain optimal stock levels. Stay organized and worry-free about audits with our streamlined system.",
        technologies: ["React", "Node js", "MYSQL", "Express js", "Redux","Redis","Tailwind CSS"],
        level: "decent",
        url: {
            img: "pharmatrack.png",
            live: "",
            github: "https://github.com/MesutEmpire/PharmaTrack",
        },
    },

   {
    name: "My Portfolio",
    description: "Front-end of portfolio containing all my projects",
    technologies: ["Vue", "Tailwind", "Pinia"],
    level: "decent",
    url: {
      img: "portfolioLight.png",
      live: "https://mesutempire.github.io/portfolio/",
      github: "https://github.com/MesutEmpire/portfolio",
    },
  },
   {
    name: "e-Cart",
    description: "An E-commerce website",
    technologies: [
      "Vue",
      "Tailwind",
      "Pinia",
      "Node",
      "Express.js",
      "MongoDB",
      "Docker",
    ],
    level: "decent",
    url: {
      img: "",
      live: "",
      github: "https://github.com/MesutEmpire/e-Cart-FullStack",
    },
  },
   {
    name: "Food Palace",
    description: "Food Palace is an online restaurant platform that offers convenient food ordering and delivery services. With a wide range of culinary options, customers can easily browse and select their desired meals. Enjoy a hassle-free dining experience from the comfort of your own home with Food Palace.",
    technologies: [
      "Vue",
      "Tailwind",
      "Pinia",
      "Node",
      "Express.js",
      "Firestore",
      "Firebase",
    ],
    level: "decent",
    url: {
      img: "foodpalace.png",
      live: "https://food-palace-4e993.web.app/#/",
      github: "https://github.com/MesutEmpire/food-palace",
    },
  },
   {
    name: "Discord-GPT Bot",
    description: "Bot that intergrates the GPT-3 and discord.js",
    technologies: ["Node.js", "TypeScript", "Express.js"],
    level: "small",
    url: {
      img: "",
      live: "",
      github: "https://github.com/MesutEmpire/ChatGPT-Discord",
    },
  },
   {
    name: "Whatsapp-GPT Bot",
    description: "Bot that integrates the GPT-3 and Whatsapp Meta Api",
    technologies: ["Node.js", "TypeScript", "Express.js"],
    level: "small",
    url: {
      img: "",
      live: "",
      github: "https://github.com/MesutEmpire/OpenAI-Whatsapp",
    },
  },
   {
    name: "Hospital",
    description:
        "Record for programs regarding indoor patients that includes the Name of the patient, age of the patient, Disease, Date of admission and date of discharge.",
    technologies: ["Java"],
    level: "small",
    url: {
      img: "",
      live: "",
      github: "https://github.com/MesutEmpire/Hospital",
    },
  },
];

export const skillsData:ISkills = {
  languages: {
    category: "Languages",
    technologies: [
      "Typescript",
      "JavaScript",
      "Java",
      "C",
      "C++",
      "Python",
      "Node js",
    ],
  },
  database: {
    category: "Database",
    technologies: ["MySQL", "MongoDB", "FireStore", "MSSQL", "Redis"],
  },
  other: {
    category: "Other",
    technologies: ["HTML", "CSS", "SCSS","Redux Toolkit","Tailwind CSS","Pinia","Docker","Github Actions","Azure"],
  },
  frameworks: {
    category: "Frameworks",
    technologies: ["Vue", "Angular", "Express","React"],
  },
};
