import React from "react";
import { Github, ExternalLink } from "lucide-react"; 
import image from "../assets/image.png"
import TravelImage from "../assets/Travell.png"
import movie from "../assets/movie.png"

const projects = [
  {
    title: "MakeMyTrip",
    image: TravelImage,
    projectLink: "https://makemytrip-6.onrender.com/",
    githubLink: "https://github.com/AmanMomin2207/MakeMyTrip",
    techStack: ["Spring Boot", "MongoDB", "Next.js", "React.js"],
    points: [
      "Developed a full-stack travel booking application with a responsive frontend using Next.js and React.",
      "Designed and implemented backend REST APIs using Spring Boot for user management and booking workflows.",
      "Integrated MongoDB for scalable, high-performance database management and real-time data access."
    ]
  },
  {
    "title": "Movie Application",
    "image": movie,
    "projectLink": "https://movie-application4.onrender.com/",
    "githubLink": "https://github.com/AmanMomin2207/Movie-Application",
    "techStack": ["React.js", "JavaScript", "HTML", "CSS", "REST API"],
    "points": [
      "Built a movie browsing application with a clean and responsive user interface using React.js.",
      "Integrated external movie APIs to fetch and display real-time movie data including ratings and descriptions.",
      "Implemented dynamic routing, search functionality, and reusable components for better user experience."
    ]
  },
  {
    title: "YT - Directory",
    image: image,
    projectLink: "https://yc-directory4.onrender.com/",
    githubLink: "https://github.com/AmanMomin2207/yc-directory",
    techStack: ["Next.js", "React.js","NextAuth" , "TailwindCSs" , "Render"],
    points: [
      "YC Directory is a startup discovery platform built with Next.js and React.js that allows users to submit and explore startup ideas.",
      "It uses Next.js backend APIs, MongoDB for data storage, and NextAuth for authentication.",
      "The UI is styled with Tailwind CSS and the application is deployed on Render."
    ]
  },
];

function Projects() {
  return (
    <section id="projects" className="p-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
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


