import ThemeToggle from "./ThemeToggle";
import "./../assets/styles.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../assets/styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <nav>
      <h2>Portfolio</h2>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <div
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Projects
        </Link>

        <Link
  to="resume"
  smooth={true}
  duration={500}
  onClick={closeMenu}
>
  Resume
</Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>

      <div className="nav-actions">
        <ThemeToggle/>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  </>);
}

export default Navbar;