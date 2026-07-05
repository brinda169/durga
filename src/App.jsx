import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Resume from "./components/Resume";

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
  <>
<Navbar/>

<section id="home">
  <Hero/>
</section>

<section id="about">
  <About/>
</section>

<Resume/>

<section id="skills">
  <Skills/>
</section>

<section id="projects">
  <Projects/>
</section>

<section id="contact">
  <Contact/>
</section>

<Footer/>

<ScrollTop/>


</>);
}
export default App;