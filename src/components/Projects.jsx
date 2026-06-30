import "../styles/Projects.css";

function Projects() {
 const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "A responsive portfolio website built with React to showcase my skills, projects and achievements."
  },
  {
    title: "Business Sales Performance Analytics Dashboard",
    desc: "An analytics dashboard that visualizes sales trends, KPIs and business insights using real-world data."
  },
  {
    title: "Student Management System",
    desc: "A Java-based application for managing student records with efficient CRUD operations."
  }
];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <button>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;