import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import "../assets/styles/hero.css";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Software Engineer",
        "Web Developer",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>

  <section id="home" className="hero">

      <img src="/profile.png" alt="Brinda" />

      <h1>Hello, I'm Brinda</h1>

      <h2>Software Engineer</h2>

      <p>
        Passionate about creating modern and responsive web applications.
      </p>

      

    </section>

    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Hello 👋, I'm</h3>

        <h1>Brinda</h1>

        <h2>
          <span ref={typedRef}></span>
        </h2>

        <p>
          I create beautiful, responsive and user-friendly web
          applications using React and modern web technologies.
        </p>

        <div className="hero-buttons">
           
          
    
          <a href="#contact">
            Hire Me
          </a>
    
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/brinda169/durga"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/brinda169/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:brinda.d169@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        
      </motion.div>
    </section>
  </>);
}

export default Hero;