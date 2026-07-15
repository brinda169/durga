import "../assets/styles/about.css";


function About() {
  return (
    <>
    <section id="about" className="about">

      <div className="about-image" data-aos="fade-right">
        <img src="/profile.png" alt="Brinda" />
      </div>

      <div className="about-content" data-aos="fade-left">
        <h2 className="section-title">
About Me
</h2>

        <p>
          Hello! I'm <strong>Brinda.</strong>, a passionate Frontend Developer
          who enjoys creating modern, responsive, and user-friendly web
          applications using React, JavaScript, HTML, and CSS.
        </p>

        <div className="info-grid">
          <div>
            <h4>Name</h4>
            <p>Brinda.D</p>
          </div>

          <div>
            <h4>Email</h4>
            <p>brinda.d169@email.com</p>
          </div>

          <div>
            <h4>Education</h4>
            <p>B.E. Computer Science</p>
          </div>

          <div>
            <h4>Location</h4>
            <p>Pollachi,Coimbatore</p>
          </div>
        </div>

        <a href="/resume.png" download className="resume-btn">
          Download Resume
        </a>
      </div>

    <div className="stats">

  <div>
    <h2>10+</h2>
    <h1>Projects</h1>
  </div>

  <div>
    <h2>5+</h2>
    <h1>Certificates</h1>
  </div>

  <div>
    <h2>2+</h2>
    <h1>Years Learning</h1>
  </div>

</div>

    </section>
  </>);
}

export default About;