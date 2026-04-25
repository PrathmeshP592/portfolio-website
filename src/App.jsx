import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Education from "./sections/Education";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;