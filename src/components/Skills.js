import React from "react";

const skillGroups = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", desc: "Object-Oriented Programming, Backend Development" },
      { name: "JavaScript", desc: "Dynamic Web Development, ES6+" },
      { name: "C++", desc: "DSA, Competitive Programming" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", desc: "Frontend UI Development, SPA" },
      { name: "Next.js", desc: "Server-Side Rendering & Static Sites" },
      { name: "Spring", desc: "Enterprise Java Framework" },
      { name: "Spring Boot", desc: "REST APIs & Microservices" },
      { name: "Swing", desc: "Java GUI Development" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", desc: "Relational Database Management & Queries" },
      { name: "MongoDB", desc: "NoSQL Database for Scalable Apps" },
      { name: "DBMS", desc: "Database Concepts & Design" },
      { name: "JDBC", desc: "Java Database Connectivity" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "GitHub", desc: "Version Control & Collaboration" },
      { name: "Postman", desc: "API Testing & Debugging" },
      { name: "Tailwind CSS", desc: "Utility-First CSS Framework" },
      { name: "Render", desc: "Cloud Platform for App Hosting" },
    ],
  },
  {
    category: "Computer Science Fundamentals",
    items: [
      { name: "Operating Systems", desc: "Processes, Memory, Scheduling" },
      { name: "Computer Networks", desc: "TCP/IP, Routing, Protocols" },
      { name: "OOP", desc: "Encapsulation, Inheritance, Polymorphism" },
      { name: "Problem-Solving", desc: "Data Structures & Algorithms" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership", desc: "Team Management & Coordination" },
      { name: "Quick Learner", desc: "Adaptability & Fast Skill Acquisition" },
      { name: "Anchoring", desc: "Hosted Many College Events" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="p-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">
        💡 My Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="relative p-6 bg-white rounded-2xl shadow-md 
                       hover:shadow-xl hover:-translate-y-2 
                       transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold mb-4 text-indigo-600 group-hover:text-white transition">
              {group.category}
            </h3>
            {group.items.map((skill, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold text-gray-800 group-hover:text-white transition">
                  {skill.name}
                </p>
                <p className="text-gray-500 text-sm group-hover:text-gray-100 transition">
                  {skill.desc}
                </p>
              </div>
            ))}

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-90 transition duration-300 -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
