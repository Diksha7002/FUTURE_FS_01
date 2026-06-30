import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h3>Hello, I'm</h3>

        <h1>Diksha Yadav</h1>

        <h2>Full Stack Developer & AI Enthusiast</h2>

        <p>
          Building modern web applications and exploring Artificial Intelligence
          through real-world projects.
        </p>

        <div className="buttons">
          <button className="btn1">View Projects</button>
          <button className="btn2">Contact Me</button>
        </div>

      </div>

    </section>
  );
}

export default Hero;