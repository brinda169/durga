import "../assets/styles/resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2 className="section-title">Resume</h2>

      <p>View or download my resume below.</p>

      <div className="resume-preview">
        <iframe
          src="/resume.png"
          title="Resume"
          width="100%"
          height="700"
        />
      </div>

      <a href="/resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;