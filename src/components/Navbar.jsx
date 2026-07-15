import ThemeToggle from "./ThemeToggle";
import "./../assets/styles.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    

    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <div
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
      <Link to="/" onClick={closeMenu}>Home</Link>
<Link to="/about" onClick={closeMenu}>About</Link>
<Link to="/skills" onClick={closeMenu}>Skills</Link>
<Link to="/projects" onClick={closeMenu}>Projects</Link>
<Link to="/resume" onClick={closeMenu}>Resume</Link>
<Link to="/contact" onClick={closeMenu}>Contact</Link>  
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