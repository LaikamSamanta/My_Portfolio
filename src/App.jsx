import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero/hero";
import "../index.css";
import { AnimatedGridPattern } from "./Components/magicui/animated-grid-pattern";
import ClientLogo from "./sections/Skills/skills";
import Contact from "./sections/Contact/contact";
import MyProjects from "./sections/Projects/projects";
import StarField from "./Components/generateStars";
import About from "./sections/About/about";

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
        <section id="about" className="flex items-center justify-center">
          <div className="section-container">
            <h2 className="section-titles">About Me</h2>
            <About />
          </div>
        </section>
        <section id="skills" className="flex items-center justify-center">
          <div className="section-container">
            <h2 className="section-titles">Skills</h2>
            <div className="w-full">
              <ClientLogo />
            </div>
          </div>
        </section>
        <section id="projects" className="flex items-center justify-center">
          <div className="section-container">
            <h2 className="section-titles">Projects</h2>
            <div className="w-full">
              <MyProjects />
            </div>
          </div>
        </section>
        <section id="contact" className="flex items-center justify-center">
          <div className="section-container">
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
