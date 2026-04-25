import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { BsBriefcaseFill } from "react-icons/bs";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white text-black dark:bg-black dark:text-white"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
        Hi, I'm{" "}
        <span className="text-blue-500">
          <TypeAnimation
            sequence={[
              "Prathamesh Pawar",
              1500,
              "Software Engineer",
              1500,
              "AI Enthusiast",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
      >
        Software Engineer, building scalable web applications and intelligent AI
        systems, with hands-on experience in React and LLM-powered solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="mt-10 flex flex-wrap justify-center items-center gap-8 text-lg"
      >
        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/1qxcrP75TSglsnaJDtbMZtP-gUPZ22SmM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <FaDownload />
          Resume
        </a>

        {/* Hire Me */}
        <a
          href="#contact"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <BsBriefcaseFill />
          Hire Me
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/PrathmeshP592"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <FaGithub />
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/prathamesh-pawar-221777224/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;