import "../assets/styles/resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2 className="section-title">Resume</h2>

      <p>View or download my resume below.</p>

        <div className="resume-container">
      <img
        src="/Resume.png"
        alt="Resume"
        className="resume-image"
      />
    </div>

      <a href="/resume.png" download="Resume.png" className="resume-btn">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;