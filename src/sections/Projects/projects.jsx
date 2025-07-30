import "./projects.css";

function MyProjects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="container">
          <div className="card card-1">
            <div className="preview">
              <h4>Hover</h4>
            </div>
            <div className="content">
              <div>
                <h2>01</h2>
                <h3>Card One</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis consequuntur, quam officiis dolorum est reiciendis{" "}
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="card card-2">
            <div className="preview">
              <h4>Hover</h4>
            </div>
            <div className="content">
              <div>
                <h2>02</h2>
                <h3>Card Two</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis consequuntur, quam officiis dolorum est reiciendis{" "}
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="card card-3">
            <div className="preview">
              <h4>Hover</h4>
            </div>
            <div className="content">
              <div>
                <h2>03</h2>
                <h3>Card Three</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis consequuntur, quam officiis dolorum est reiciendis{" "}
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
