import "./projects.css";

export default function MyProjects() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        <div className="project-card">
          <div className="card lg:card-side bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <figure className="project-image">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Project 1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project 1</h2>
              <p className="project-description">A modern web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Project</button>
                <button className="btn btn-outline">GitHub</button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="card lg:card-side bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <figure className="project-image">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Project 2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project 2</h2>
              <p className="project-description">An e-commerce platform with advanced features like payment processing, inventory management, and admin dashboard.</p>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Project</button>
                <button className="btn btn-outline">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
