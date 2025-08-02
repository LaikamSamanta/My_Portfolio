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
              <h2 className="card-title">Sportlandija(Blog site)</h2>
              <p className="project-description">My first website, which I built entirely from scratch with a database-backed structure, enables the administrator to manage and update videos, images, and event listings.</p>
              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">PHP</span>
                 <span className="tech-tag">SQL</span>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-outline">View on GitHub</button>
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
              <h2 className="card-title">E-Commerce website</h2>
              <p className="project-description">An e-commerce platform with advanced features like payment processing, inventory management, and admin dashboard.</p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">SQL</span>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-outline">View on GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
