import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 
                 p-10 text-center"
    >
      <h1 className="text-5xl font-bold text-white mb-4 animate-fadeIn">
        Hi, I’m Misba 👩‍💻
      </h1>
      <p className="text-xl text-gray-300 mb-6 animate-fadeIn delay-1 max-w-2xl">
        I am an Engineering Student passionate about problem-solving and creating modern web applications using React and other technologies.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg 
                   hover:bg-purple-500 transition"
      >
        View Projects
      </a>
    </section>
  );
}

export default Hero;
