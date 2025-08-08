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
        <section id="about" className="flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
            <h2 className="section-titles text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center sm:text-left px-4 py-2">About Me</h2>
            <p className="section-text text-base sm:text-lg lg:text-xl text-center sm:text-left px-4 py-3">
              This is the about section where you can write about yourself.
            </p>
          </div>
        </section>
        <section id="skills" className="flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
            <h2 className="section-titles text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center sm:text-left px-4 py-2">Skills</h2>
            <div className="w-full">
              <ClientLogo />
            </div>
          </div>
        </section>
        <section id="projects" className="flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl h-full flex flex-col">
            <h2 className="section-titles text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-center sm:text-left px-4 py-2">Projects</h2>
            <p className="section-text text-base sm:text-lg lg:text-xl text-center sm:text-left mb-4 px-4 py-3">
            </p>
            <div className="flex-1 min-h-0 w-full">
              <MyProjects />
            </div>
          </div>
        </section>
        <section id="contact" className="flex items-center justify-center">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
