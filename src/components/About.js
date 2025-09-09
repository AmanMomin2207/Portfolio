import React from "react";
import { Code, Cloud, Rocket, Database } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="w-full py-16 bg-gradient-to-r from-indigo-50 via-white to-purple-50"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700 animate-fadeIn">
  👨‍💻 About Me
</h2>

      <div className="flex flex-col md:flex-row justify-between items-stretch max-w-7xl mx-auto px-8 gap-10">

        <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 border-l-4 border-indigo-500 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            I am a <span className="font-semibold">Full-stack Developer</span>{" "}
            with hands-on experience in building{" "}
            <span className="font-semibold">
              scalable, responsive, and user-friendly applications
            </span>
            . I enjoy solving real-world problems using technology and I am
            passionate about continuous learning and innovation.
          </p>
        </div>

        
        <div className="flex-1 grid sm:grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <Code className="w-10 h-10 mx-auto text-indigo-600 mb-3" />
            <h4 className="font-semibold text-lg">Programming</h4>
            <p className="text-gray-600 text-sm">
              Java, JavaScript, React.js, Next.js
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <Database className="w-10 h-10 mx-auto text-purple-600 mb-3" />
            <h4 className="font-semibold text-lg">Databases</h4>
            <p className="text-gray-600 text-sm">MySQL, MongoDB</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <Rocket className="w-10 h-10 mx-auto text-pink-600 mb-3" />
            <h4 className="font-semibold text-lg">Web Development</h4>
            <p className="text-gray-600 text-sm">
              REST APIs, Scalable Web Apps
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <Cloud className="w-10 h-10 mx-auto text-green-600 mb-3" />
            <h4 className="font-semibold text-lg">Tools & Deployment</h4>
            <p className="text-gray-600 text-sm">
              Google Cloud, Git/GitHub, Postman, Render, Appwrite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

