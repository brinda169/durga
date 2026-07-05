import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import "../assets/styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2>Brinda</h2>

      <p>
        Thanks for visiting my portfolio.
        Let's connect!
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:your@email.com">
          <FaEnvelope />
        </a>

      </div>

      <p className="copyright">
        © 2026 Brinda. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;