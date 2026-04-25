import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect active section
useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "projects", "experience", "skills", "contact"];

    let current = "home";

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();

        //  Detect if section is near center of screen
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = id;
        }
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black dark:bg-black dark:text-white z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <a href="#home">
          <h1 className="text-xl font-bold tracking-wide flex items-center gap-1 cursor-pointer group">
            <span className="text-gray-500 group-hover:text-blue-500 transition">&lt;</span>
            <span className="text-blue-500 group-hover:scale-110 transition">PP</span>
            <span className="text-gray-500 group-hover:text-blue-500 transition">/&gt;</span>
          </h1>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">

          <a
            href="#home"
            className={`hover:text-blue-500 ${active === "home" ? "text-blue-500" : ""}`}
          >
            Home
          </a>

          <a
            href="#projects"
            className={`hover:text-blue-500 ${active === "projects" ? "text-blue-500" : ""}`}
          >
            Projects
          </a>

          <a
            href="#experience"
            className={`hover:text-blue-500 ${active === "experience" ? "text-blue-500" : ""}`}
          >
            Experience
          </a>

          <a
            href="#education"
            className={`hover:text-blue-500 ${active === "education" ? "text-blue-500" : ""}`}
          >
            Education
          </a>

          <a
            href="#skills"
            className={`hover:text-blue-500 ${active === "skills" ? "text-blue-500" : ""}`}
          >
            Skills
          </a>

          <a
            href="#contact"
            className={`hover:text-blue-500 ${active === "contact" ? "text-blue-500" : ""}`}
          >
            Contact
          </a>

        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="ml-4 p-2 rounded-full border border-gray-600 hover:bg-gray-800 transition"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6">

          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;