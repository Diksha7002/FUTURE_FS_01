import "../styles/Skills.css";

function Skills() {

  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Python",
    "SQL",
    "VS Code"
  ];

  return (
    <section className="skills" id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-container">

        {skills.map((skill,index)=>(
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;