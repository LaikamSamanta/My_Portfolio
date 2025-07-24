import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero/hero";
import "../index.css";
import { AnimatedGridPattern } from "./Components/magicui/animated-grid-pattern";
import ClientLogo1 from "./sections/Skills/skills";
import Contact from "./sections/Contact/contact";

function App() {
  return (
    <>
      <AnimatedGridPattern className="absolute inset-0 z-0" />
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="hero-section">
        <Hero />
      </div>
      <section id="about">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            This is the about section where you can write about yourself.
          </p>
        </div>
      </section>
      <section id="skills">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ClientLogo1 />
        </div>
      </section>
      <section id="projects">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-lg">
            This is the projects section where you can showcase your projects.
          </p>
        </div>
      </section>
      <section id="contact">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <Contact />
        </div>
      </section>
    </>
  );
}

export default App;
