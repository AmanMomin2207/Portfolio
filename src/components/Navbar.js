import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Projects", "Education", "Achievements","Contact"];

  return (
    <div>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white text-purple-700 shadow-md flex justify-between items-center px-6 py-4 z-50">
        <h1 className="text-2xl font-bold">Aman Momin</h1>

        {/* Horizontal Menu for md+ screens */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-900 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger Button for small screens */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-purple-700 text-white px-3 py-2 rounded-md hover:bg-purple-900 transition"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Sidebar Menu for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40 pt-24`}
      >
        <nav className="flex flex-col space-y-6 px-6 text-lg">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;


