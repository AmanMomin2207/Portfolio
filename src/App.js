import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
  <div className="bg-gradient-to-b from-cyan-100 via-purple-200 to-pink-100 min-h-screen">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
       <Achievement/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


