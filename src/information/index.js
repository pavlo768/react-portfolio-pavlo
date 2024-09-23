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
    description: `In this course, I learned to prototype and design layouts for both standard and non-standard web pages, including elements such as burger menus, accordions, and carousels. I develop responsive web pages using media queries and CSS techniques like Flexbox and CSS Grid. I utilize Visual Studio Code as my development environment for web solutions and leverage Git and GitHub for code publishing, hosting, and collaborative project work. I also employ browser development tools and validators to identify defects and errors in the code, as well as fundamental JavaScript constructs such as variables, functions, loops, conditionals, and switch statements, along with data types like numbers, strings, booleans, arrays, and objects to create basic logic for web solutions. Additionally, I implement the object model to manipulate web page elements, use asynchronous JavaScript for communication with web servers, and create a simple backend using Node.js to facilitate data transfer between the frontend and backend.`,
    technologies: ["Javascript", "HTML5", "CSS3", ],
 
  },
  {
    year: "05.02.2024 - 22.03.2024",
    role: "JavaScript Fundamentals",
    company: "SoftServe Academy",
    description: `In this course, I learned to create dynamic and functional websites by combining JavaScript and TypeScript with HTML and CSS to implement dynamic web pages. I implemented interactive elements such as validation, passwords, dynamic buttons, game elements, and more. I utilized asynchronous programming approaches in my development work. I also developed server-side applications by writing code that runs on the backend. Additionally, I effectively used TypeScript for type-checking in the code.`,
    technologies: [, "JavaScript", "Node.js",],
   
  },
  {
    year: "01.04.2024 - 17.05.2024",
    role: "Database Fundamentals",
    company: "SoftServe Academy",
    description: `In this course, I learned about the basic data types of SQL, SQL operators responsible for creating database objects, and SQL operators that allow for data manipulation. I gained knowledge of data access tools and SQL constructs for database administration. I learned to design a database for a specific subject area and to use a graphical client to work with the database server. I created and managed database objects, added data to the database, and modified or deleted it. Additionally, I built simple and complex queries to database tables, managed the roles and activities of database users, and utilized SQL queries to access data from software modules.`,
    technologies: ["PostgreSQL", "MySQL", "SQL Server Management Studio", "MongoDB"],

  },
  {
    year: "27.05.2024 - 12.07.2024",
    role: "DevOps for Developers",
    company: "SoftServe Academy",
    description: `In this course, I learned to use deployment, support, and testing tools for software execution environments at a basic level. I learned to create and optimize the infrastructure necessary for software products to operate. I utilized automation technologies for production processes (CI/CD) related to software development and deployment. Additionally, I learned to independently create and use containers and the corresponding tools for working with them.`,
    technologies: ["Git", "Docker", "Kubernetes", "CI/CD", "GitActions", "RestAPI"],

  },
  {
    year: "22.07.2024 - 27.09.2024",
    role: "Practical React",
    company: "SoftServe Academy",
    description: `In this course, I learned to interact with Git and GitHub. I created web applications using ReactJS and Node.js and tested these web applications. I gained an understanding of the SOLID principles and learned how to apply them. I worked in a team using the SCRUM methodology and improved my soft skills. I developed a fully functional web project and applied key aspects of working with JavaScript.`,
    technologies: ["Redux Toolkit", "React Router", "Node, Fetch, Axios", "Tools (npm, linter, babel, webpack)"],
  },
];

export const PROJECTS = [
  {
    title: "Memory-Game",
    image: project1,
    description:
      "In Memory Game, players find pairs of identical cards within a time limit (60 seconds for Easy, 80 seconds for Hard). Sounds signal correct and incorrect matches. A win or timeout message appears at the end, and players can continue without time limits.",
    technologies: ["HTML", "CSS", "JavaScript", ],
    demoLink: "https://memory-game-eta-green.vercel.app/" 
  },
  {
    title: "Quiz App",
    image: project2,
    description:
      "The Quiz App allows users to answer multiple-choice questions, provides instant feedback on their answers, and displays their total score at the end. Users can navigate through questions and reset the quiz to try again, making it an engaging and educational experience.",
    technologies: ["HTML", "CSS", "React JS", "Node.js"],
    demoLink: "https://quiz-ajy935wxd-pavlos-projects-1dc688f4.vercel.app/" 
  },
  {
    title: "Web-magazine",
    image: project3,
    description:
      "The `Stickerz` website features a variety of unique stickers for sale. The homepage prominently displays a Baby Yoda sticker, along with other options like a banana sticker, a girl sticker, and a Viking sticker. Each product includes an `Info` button for more details and a `Buy` button for purchasing. The layout is clean and user-friendly, making it easy for visitors to browse and shop for their favorite stickers.",
    technologies: ["HTML", "CSS", "Java Script", "Node.js"],
    demoLink: "https://web-magazine-star-wars.vercel.app/" 
  },
  {
    title: "Weather App",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Java Script", "Node JS",],
    demoLink: "https://weather-app2-198q86t13-pavlos-projects-1dc688f4.vercel.app/" 
  },
];

export const CONTACT = {  
  address: "Ukraine, Lviv",  
  phoneNo: ["+380667257145", "+380734182449"],
  email: "pavlyk376@gmail.com",  
};