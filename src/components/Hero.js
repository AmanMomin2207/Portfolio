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
        Hi, I’m Aman 👩‍💻
      </h1>

      <p className="text-xl text-gray-300 mb-6 animate-fadeIn delay-1 max-w-2xl">
        I am Last Year Student of Engineering, Passinate about Java, Spring Boot, ReactJS, NextJS and Cloud Techonology.
      </p>

      <a
        href="https://drive.google.com/file/d/1kb3TmR3FLNb-LI3F9vdD3qWTwlhVW8ak/view?usp=sharing"  
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg 
                   hover:bg-purple-500 transition"
      >
        View Resume
      </a>
    </section>
  );
}

export default Hero;
