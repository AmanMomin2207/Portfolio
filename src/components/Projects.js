/*import React from "react";

const projects = [
  {
    title: "MakeMyTrip",
    projectLink: "https://make-my-trip-clone-springboot-1-1e7q.onrender.com/",
    githubLink: "https://github.com/misbashaikh3099/make-my-trip-clone-springboot.git",
    techStack: ["Spring Boot", "MongoDB", "Next.js", "React.js"],
    points: [
      "Developed a full-stack travel booking application with a responsive frontend using Next.js and React.",
      "Designed and implemented backend REST APIs using Spring Boot for user management and booking workflows.",
      "Integrated MongoDB for scalable, high-performance database management and real-time data access."
    ]
  },
  {
    title: "Movie App",
    projectLink: "https://movie-app-nnif.onrender.com",
    githubLink: "https://github.com/misbashaikh3099/Movie_App.git",
    techStack: ["Tailwind CSS", "MongoDB", "Appwrite", "React.js","Vite"],
    points: [
      "Developed a responsive single-page application (SPA) using React.js and React-Use for efficient state and lifecycle management.",
      "Integrated Appwrite backend for user authentication, database handling, and file storage. ",
      "Utilized Vite for fast builds, hot module replacement (HMR), and improved development experience."
    ]
  }
];

function Projects() {
  return (
    <section id="projects" className="p-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-6 shadow-lg rounded-xl hover:scale-105 transform transition duration-300">
            
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

            <div className="mb-3">
              <a href={project.projectLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline mr-4">
                Project Link
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                GitHub Link
              </a>
            </div>

            <div className="mb-3">
              <span className="font-semibold">Technology Stack: </span>
              {project.techStack.join(", ")}
            </div>

            <ul className="list-disc list-inside text-gray-600">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
*/

/*
import React from "react";
import { Github, ExternalLink } from "lucide-react"; 
import MovieImage from "../assets/Moviee.png"
import TravelImage from "../assets/Travell.png"
import LiaImage from "../assets/LiaImg.png"
import ToDoImg from "../assets/ToDo.png"

const projects = [
  {
    title: "MakeMyTrip",
    image: TravelImage,
    projectLink: "https://make-my-trip-clone-springboot-1-1e7q.onrender.com/",
    githubLink: "https://github.com/misbashaikh3099/make-my-trip-clone-springboot.git",
    techStack: ["Spring Boot", "MongoDB", "Next.js", "React.js"],
    points: [
      "Developed a full-stack travel booking application with a responsive frontend using Next.js and React.",
      "Designed and implemented backend REST APIs using Spring Boot for user management and booking workflows.",
      "Integrated MongoDB for scalable, high-performance database management and real-time data access."
    ]
  },
  {
    title: "Movie App",
    image: MovieImage,
    projectLink: "https://movie-app-nnif.onrender.com",
    githubLink: "https://github.com/misbashaikh3099/Movie_App.git",
    techStack: ["Tailwind CSS", "MongoDB", "Appwrite", "React.js","Vite"],
    points: [
      "Developed a responsive single-page application (SPA) using React.js and React-Use for efficient state and lifecycle management.",
      "Integrated Appwrite backend for user authentication, database handling, and file storage.",
      "Utilized Vite for fast builds, hot module replacement (HMR), and improved development experience."
    ]
  },
  {
  title: "Liabrary Management System",
  image: LiaImage,
  githubLink: "https://github.com/misbashaikh3099/Library_Management_System",
  techStack: [ "Java", "Swing", "MySQL", "JDBC", "Eclipse", "Window Builder" ],
  points: [
    "Developed a GUI -based library system with modules for login, book issue/return and student management.",
    "Implemented database connectivity with MYSQL using JDBC for secure and reliable data handling.",
  ]
},
{
  title: "To_Do_List",
    image: ToDoImg,
    projectLink: "https://to-do-list-426u.onrender.com",
    githubLink: "https://github.com/misbashaikh3099/To_Do_List",
    techStack: ["React.js", "Bootstrap/Tailwind", "LocalStorage"],
   points:["Built a responsive Todo List application with add, delete, and mark-as-done functionality using React.js.",
      "Implemented LocalStorage for persistent task management across sessions.",
      "Designed a clean UI with Bootstrap/Tailwind CSS for better user experience.",
      "Added About page and routing using React Router for multi-page navigation."
   ]
}

];

function Projects() {
  return (
    <section id="projects" className="p-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.03] transform transition duration-300"
          >
            
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-content"
            />

           
            <div className="p-6">
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

  
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex gap-4">
                <a 
                  href={project.projectLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <ExternalLink size={18}/> Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                  <Github size={18}/> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

*/
import React from "react";
import { Github, ExternalLink } from "lucide-react"; 
import MovieImage from "../assets/Moviee.png"
import TravelImage from "../assets/Travell.png"
import LiaImage from "../assets/LiaImg.png"
import ToDoImg from "../assets/ToDo.png"
import ShareNestImg from "../assets/ShareNestImg.png"

const projects = [
  {
    title: "MakeMyTrip",
    image: TravelImage,
    projectLink: "https://make-my-trip-clone-springboot-1-1e7q.onrender.com/",
    githubLink: "https://github.com/misbashaikh3099/make-my-trip-clone-springboot.git",
    techStack: ["Spring Boot", "MongoDB", "Next.js", "React.js"],
    points: [
      "Developed a full-stack travel booking application with a responsive frontend using Next.js and React.",
      "Designed and implemented backend REST APIs using Spring Boot for user management and booking workflows.",
      "Integrated MongoDB for scalable, high-performance database management and real-time data access."
    ]
  },
  {
    title: "Movie App",
    image: MovieImage,
    projectLink: "https://movie-app-nnif.onrender.com",
    githubLink: "https://github.com/misbashaikh3099/Movie_App.git",
    techStack: ["Tailwind CSS", "MongoDB", "Appwrite", "React.js","Vite"],
    points: [
      "Developed a responsive single-page application (SPA) using React.js and React-Use for efficient state and lifecycle management.",
      "Integrated Appwrite backend for user authentication, database handling, and file storage.",
      "Utilized Vite for fast builds, hot module replacement (HMR), and improved development experience."
    ]
  },
  {
    title: "Liabrary Management System",
    image: LiaImage,
    githubLink: "https://github.com/misbashaikh3099/Library_Management_System",
    techStack: [ "Java", "Swing", "MySQL", "JDBC", "Eclipse", "Window Builder" ],
    points: [
      "Developed a GUI -based library system with modules for login, book issue/return and student management.",
      "Implemented database connectivity with MYSQL using JDBC for secure and reliable data handling.",
    ]
  },
   {
    title: "ShareNest",
    image: ShareNestImg,
    githubLink: "Ongoing",
    techStack: [ "react","Tailwind-css","MongoDB","SpringBoot"],
    points: [
      "A full-stack file sharing application built with React, Spring Boot, and MongoDB. ",
      "Users can upload, view, download, delete, and share files with public/private access.",
      "featuring a modern UI with Tailwind CSS and secure authentication."
    ]
  },

  {
    title: "To_Do_List",
    image: ToDoImg,
    projectLink: "https://to-do-list-426u.onrender.com",
    githubLink: "https://github.com/misbashaikh3099/To_Do_List",
    techStack: ["React.js", "Bootstrap/Tailwind", "LocalStorage"],
    points: [
      "Built a responsive Todo List application with add, delete, and mark-as-done functionality using React.js.",
      "Implemented LocalStorage for persistent task management across sessions.",
      "Designed a clean UI with Bootstrap/Tailwind CSS for better user experience.",
      "Added About page and routing using React Router for multi-page navigation."
    ]
  }
];

function Projects() {
  return (
    <section id="projects" className="p-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.03] transform transition duration-300"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-content"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className={`flex gap-4 ${!project.projectLink ? "justify-center" : ""}`}>
                {project.projectLink && (
                  <a 
                    href={project.projectLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <ExternalLink size={18}/> Live Demo
                  </a>
                )}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                  <Github size={18}/> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


