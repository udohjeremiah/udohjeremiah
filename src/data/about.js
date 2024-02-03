// Dependencies
import {
  AvatarIcon,
  BackpackIcon,
  CalendarIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  MixIcon,
  MobileIcon,
  Pencil2Icon,
  RocketIcon,
  ScissorsIcon,
} from "@radix-ui/react-icons";

// Assets
import CSS3 from "../../public/logos/css3.svg";
import ExpressJS from "../../public/logos/expressjs.svg";
import Figma from "../../public/logos/figma.svg";
import Framer from "../../public/logos/framer.svg";
import Git from "../../public/logos/git.svg";
import GitHub from "../../public/logos/github.svg";
import GitHubDesktop from "../../public/logos/githubdesktop.svg";
import GSAP from "../../public/logos/gsap.svg";
import HTML5 from "../../public/logos/html5.svg";
import Java from "../../public/logos/java.svg";
import JavaScript from "../../public/logos/javascript.svg";
import Julia from "../../public/logos/julia.svg";
import MaterialUI from "../../public/logos/materialui.svg";
import MongoDB from "../../public/logos/mongodb.svg";
import NextJS from "../../public/logos/nextjs.svg";
import NodeJS from "../../public/logos/nodejs.svg";
import Postman from "../../public/logos/postman.svg";
import Python from "../../public/logos/python.svg";
import ReactJS from "../../public/logos/reactjs.svg";
import RedisIO from "../../public/logos/redisio.svg";
import RESTfulAPI from "../../public/logos/restfulapi.svg";
import ShadcnUI from "../../public/logos/shadcnui.svg";
import TailwindCSS from "../../public/logos/tailwindcss.svg";
import ViteJS from "../../public/logos/vitejs.svg";
import VSCode from "../../public/logos/vscode.svg";
import Webpack from "../../public/logos/webpack.svg";

export const personal = [
  {
    text: "Udoh Jeremiah",
    icon: AvatarIcon,
  },
  {
    text: "Born on 08th June, 2001",
    icon: CalendarIcon,
  },
  {
    text: "Delta State, Nigeria",
    icon: HomeIcon,
  },
  {
    text: "udohjeremiah@icloud.com",
    icon: EnvelopeClosedIcon,
  },
  {
    text: "+234 708 441 0069",
    icon: MobileIcon,
  },
  {
    text: "Reading, Speaking, etc.,",
    icon: RocketIcon,
  },
];

export const qualifications = [
  {
    title: "Education",
    icon: Pencil2Icon,
    items: [
      {
        location: "Temple Gate Polytechnic, Aba, Abia State, Nigeria",
        position: "National Diploma in Computer Science",
        years: "2018 - 2020",
      },
      {
        location: "Western Delta University, Oghara, Delta State, Nigeria",
        position: "Bachelor of Science in Computer Science",
        years: "2022 - Present",
      },
    ],
  },
  {
    title: "Experience",
    icon: BackpackIcon,
    items: [
      {
        location: "Julia Programming Language",
        position: "Member",
        years: "2022 - Present",
      },
      {
        location: "Freelancing",
        position: "Full-Stack Web Developer",
        years: "2023 - Present",
      },
    ],
  },
];

export const skills = [
  {
    title: "Skills",
    icon: MixIcon,
    items: [
      {
        title: "Programming Languages",
        items: [
          {
            text: "Python",
            image: Python,
            name: "Python",
          },
          {
            text: "Julia",
            image: Julia,
            name: "Julia",
          },
          {
            text: "Java",
            image: Java,
            name: "Java",
          },
        ],
      },
      {
        title: "Web Technologies",
        items: [
          {
            text: "HTML5",
            image: HTML5,
            name: "HTML5",
          },
          {
            text: "CSS3",
            image: CSS3,
            name: "CSS3",
          },
          {
            text: "JavaScript",
            image: JavaScript,
            name: "JavaScript",
          },
          {
            text: "Node.js",
            image: NodeJS,
            name: "NodeJS",
          },
        ],
      },
      {
        title: "CSS & UI Kits",
        items: [
          { text: "Tailwind CSS", image: TailwindCSS, name: "TailwindCSS" },
          { text: "Material UI", image: MaterialUI, name: "Material UI" },
          { text: "Shadcn UI", image: ShadcnUI, name: "Shadcn UI" },
        ],
      },
      {
        title: "Web Frameworks",
        items: [
          { text: "Express.js", image: ExpressJS, name: "Express.js" },
          { text: "React.js", image: ReactJS, name: "React.js" },
          { text: "Next.js", image: NextJS, name: "Next.js" },
        ],
      },
      {
        title: "Animation Libraries",
        items: [
          { text: "Framer Motion", image: Framer, name: "Framer Motion" },
          { text: "GSAP", image: GSAP, name: "GSAP" },
        ],
      },
      {
        title: "Web Bundlers",
        items: [
          { text: "Webpack", image: Webpack, name: "Webpack" },
          { text: "Vite.js", image: ViteJS, name: "Vite.js" },
        ],
      },
      {
        title: "Database",
        items: [
          { text: "MongoDB", image: MongoDB, name: "MongoDB" },
          { text: "Redis.io", image: RedisIO, name: "Redis.io" },
        ],
      },
      {
        title: "Collaboration & Version Control System",
        items: [
          { text: "Git", image: Git, name: "Git" },
          { text: "GitHub", image: GitHub, name: "GitHub" },
        ],
      },
      {
        title: "Others",
        items: [
          { text: "RESTful API Design", image: RESTfulAPI, name: "REST API" },
        ],
      },
    ],
  },
  {
    title: "Tools",
    icon: ScissorsIcon,
    items: [
      {
        title: "Code & No-Code Tools",
        items: [
          {
            text: "Framer",
            image: Framer,
            name: "Framer",
          },
          {
            text: "Figma",
            image: Figma,
            name: "Figma",
          },
          {
            text: "VSCode",
            image: VSCode,
            name: "VSCode",
          },
          {
            text: "MongoDB Compass",
            image: MongoDB,
            name: "MongoDB Compass",
          },
          {
            text: "Postman",
            image: Postman,
            name: "Postman",
          },
          {
            text: "Github Desktop",
            image: GitHubDesktop,
            name: "GitHub Desktop",
          },
        ],
      },
    ],
  },
];
