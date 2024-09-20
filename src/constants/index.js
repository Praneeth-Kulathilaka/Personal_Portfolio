import project1 from "../assets/project/project-1.jpg";
import project2 from "../assets/project/project-2.jpg";
import project3 from "../assets/project/project-3.jpg";
import project4 from "../assets/project/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `As a dedicated and enthusiastic undergraduate, I am passionate about coding, problem-solving, and continuously learning new technologies. My experience includes developing and debugging software applications, collaborating in Agile environments, and employing best practices. As a full-stack developer with a slight preference for backend over frontend, I am eager to apply my knowledge and skills to real-world challenges and grow as a professional in the field of Information Technology.
`;

export const PROJECTS = [
  {
    title: "Residence Management System",
    image: project1,
    description:
      "A Residence Management System to simplify residential management operations as our second year software project, under the mentorship of Creative Software. The system enables management staff to efficiently handle tasks such as finance management, resident management, maintenance scheduling, reservation handling, and other administrative activities. It also facilitates seamless communication and interaction between residents and management staff.",
    technologies: ["React Js", "Node Js", "MySQL", "Material UI", "PayHere Gateway"],
    link: "https://github.com/orgs/UoM-2023/repositories",
  },
  {
    title: "Personal Portfolio",
    image: project2,
    description:
      "A personal portfolio website to showcase my projects, skills, and experience. The portfolio highlights my expertise in frontend development and provides an interactive and responsive user experience",
    technologies: ["ReactJs", "Tailwind CSS", "Deployed with netlify"],
    link: "https://github.com/Praneeth-Kulathilaka/Personal_Portfolio",
  },
  {
    title: "Rover 4.3",
    image: project3,
    description:
      "A web-controlled rover as a Level 1 hardware project, capable of detecting harmful gases and capturing live video feeds. The rover streams video and provides real-time alerts for critical situations through a web interface, enhancing remote monitoring and safety in various environments.",
    technologies: [ "Arduino", "EasyEDA(PCB Design)", "Wireless Communication(WIFI)", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/Praneeth-Kulathilaka/Rover-4.3",
  },
  {
    title: "MineResQ",
    image: project4,
    description:
      "A gas detection and alert system specifically designed for gem mines. The system includes two-way radio communication, real-time gas detection, and alerting functionalities to enhance safety and prevent hazardous incidents within mining environments.",
    technologies: ["Arduino", "EasyEDA(PCB Design)", "Wireless Communication(Radio)"],
    link: "https://github.com/Praneeth-Kulathilaka/MineResQ",
  },
  
];

export const CONTACT = {
  address: "Katubedda, Moratuwa, Sri Lanka ",
  phoneNo: "+94 75 829 4030 ",
  email: "praneethskulathilaka@gmail.com",
};