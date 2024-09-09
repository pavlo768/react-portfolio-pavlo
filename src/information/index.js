import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Frontend Developer with a strong desire to create visually appealing and user-friendly web applications. My interest in web development began during my studies, where I discovered my love for coding and problem-solving. I am a quick learner who enjoys exploring new technologies and frameworks, and I thrive in collaborative environments.

In the courses I have completed, I have gained essential skills in HTML5, CSS3, and JavaScript, and I am particularly excited about working with React to build dynamic user interfaces. I’m eager to contribute my knowledge and skills to a team focused on innovation and excellence in web development.

My goal is to continuously grow as a developer, exploring new tools and techniques while delivering high-quality projects that enhance user experiences.`;

export const ABOUT_TEXT = `I am an enthusiastic and motivated Frontend Developer with a solid foundation in HTML5, CSS3, and JavaScript. I have completed several courses covering web development fundamentals, practical application of React, as well as database concepts and DevOps. With the knowledge and skills I’ve acquired, I aim to create intuitive and functional web applications.
I am seeking an opportunity to join a team where I can apply my skills to real-world projects while continuing to grow in the field of frontend development.`;

export const EXPERIENCES = [
  {
    year: "05.01.2024 - 31.01.2024",
    role: "HTML5/CSS5/JAVASCRIPT FUNDAMENTALS",
    company: "SoftServe Academy",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "HTML5", "CSS3", ],
  },
  {
    year: "05.02.2024 - 22.03.2024",
    role: "JavaScript Fundamentals",
    company: "SoftServe Academy",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: [, "JavaScript", "Node.js",],
  },
  {
    year: "01.04.2024 - 17.05.2024",
    role: "Database Fundamentals",
    company: "SoftServe Academy",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["PostgreSQL", "MySQL", "SQL Server Management Studio", "MongoDB"],
  },
  {
    year: "27.05.2024 - 12.07.2024",
    role: "DevOps for Developers",
    company: "SoftServe Academy",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Git", "Docker", "Kubernetes", "CI/CD", "GitActions", "RestAPI"],
  },
  {
    year: "22.07.2024 - 27.09.2024",
    role: "Practical React",
    company: "SoftServe Academy",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Redux Toolkit", "React Router", "Node, Fetch, Axios", "Tools (npm, linter, babel, webpack)"],
  },
];

export const PROJECTS = [
  {
    title: "Memory-Game",
    image: project1,
    description:
      "In Memory Game, players find pairs of identical cards within a time limit (60 seconds for Easy, 80 seconds for Hard). Sounds signal correct and incorrect matches. A win or timeout message appears at the end, and players can continue without time limits.",
    technologies: ["HTML5", "CSS5", "JavaScript", ],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML5", "CSS5", "React", "Node.js"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {  
  address: "Ukraine, Lviv",  
  phoneNo: ["+380667257145", "+380734182449"],
  email: "pavlyk376@gmail.com",  
};