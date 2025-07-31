import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero/hero";
import "../index.css";
import { AnimatedGridPattern } from "./Components/magicui/animated-grid-pattern";
import ClientLogo from "./sections/Skills/skills";
import Contact from "./sections/Contact/contact";
import MyProjects from "./sections/Projects/projects";
import StarField from "./Components/generateStars";

function App() {
  return (
    <>
      <StarField className="fixed top-0 left-0 right-0 w-full h-full -z-10" />
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="sections">
        <section id="hero-section" className="relative">
            <AnimatedGridPattern className="animated-grid absolute inset-0 z-0" />
            <Hero />
        </section>
        <section id="about">
          <div className="container mx-auto px-4 py-8">
            <h2 className="section-titles text-3xl font-bold mb-4">About Me</h2>
            <p className="section-text text-lg">
              This is the about section where you can write about yourself.
            </p>
          </div>
        </section>
        <section id="skills">
          <div className="container mx-auto px-4 py-8">
            <h2 className="section-titles text-3xl font-bold mb-4">Skills</h2>
            <ClientLogo />
          </div>
        </section>
        <section id="projects">
          <div className="container mx-auto px-4 py-8">
            <h2 className="section-titles text-3xl font-bold mb-4">Projects</h2>
            <p className="section-text text-lg">
              This is the projects section where you can showcase your projects.
            </p>
            <div className="container mx-auto px-4 py-30">
            <MyProjects />
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container mx-auto px-4 py-8">
            <h2 className="section-titles text-3xl font-bold mb-4">Contact Me</h2>
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
