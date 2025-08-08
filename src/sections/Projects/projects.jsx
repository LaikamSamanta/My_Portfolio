import "./projects.css";

export default function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "Sportlandija(Blog site)",
      description: "My first website, which I built entirely from scratch with a database-backed structure, enables the administrator to manage and update videos, images, and event listings.",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      tech: ["HTML", "CSS", "PHP", "SQL"],
      icon: ["html5.png", "ccs3.png", "php.png", "database.png"]
    },
    {
      id: 2,
      title: "E-Commerce website",
      description: "An e-commerce platform with advanced features like payment processing, inventory management, and admin dashboard.",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      tech: ["React.js", "Laravel", "SQL"],
      icon: ["react.png", "Laravel.svg.png", "database.png"]
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card lg:card-side bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <figure className="project-image">
                <img
                  src={project.image}
                  alt={project.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index, icon) => (
                    <span key={index} className="tech-tag"><img src={project.icon}{tech}</span></>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline">View on GitHub</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
