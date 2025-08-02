import { useState, useEffect } from "react";
import "./projects.css";

export default function MyProjects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Sportlandija(Blog site)",
      description: "My first website, which I built entirely from scratch with a database-backed structure, enables the administrator to manage and update videos, images, and event listings.",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      tech: ["HTML", "CSS", "PHP", "SQL"]
    },
    {
      id: 2,
      title: "E-Commerce website",
      description: "An e-commerce platform with advanced features like payment processing, inventory management, and admin dashboard.",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      tech: ["React.js", "Laravel", "SQL"]
    }
  ];

  const displayedProjects = isSmallScreen && !showAllProjects ? projects.slice(0, 1) : projects;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {displayedProjects.map((project) => (
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
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
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
      
      {isSmallScreen && projects.length > 1 && (
        <div className="see-more-container">
          <button 
            className="see-more-btn"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? "Show Less" : "See More Projects"}
          </button>
        </div>
      )}
    </div>
  );
}
