import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2>About Me</h2>

      <p>
        I am Diksha Yadav, a Computer Science Engineering student with a
        passion for creating modern websites and solving real-world
        problems using technology.
      </p>

      <div className="about-cards">

        <div className="card">
          <h3>Education</h3>
          <p>B.Tech in Computer Science Engineering</p>
        </div>

        <div className="card">
          <h3>Interests</h3>
          <p>
            Full Stack Development, Artificial Intelligence,
            Data Science and Problem Solving.
          </p>
        </div>

        <div className="card">
          <h3>Goal</h3>
          <p>
            To become a skilled Software Engineer and AI Developer.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;