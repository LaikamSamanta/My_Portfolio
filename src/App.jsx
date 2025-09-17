import { useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero/hero";
import "../index.css";
import ClientLogo from "./sections/Skills/skills";
import Contact from "./sections/Contact/contact";
import MyProjects from "./sections/Projects/projects";
import StarField from "./Components/generateStars";
import About from "./sections/About/about";
import Footer from "./Components/Footer";
import { Sparkles } from "./Components/lunarui/Sparkles";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <StarField className="fixed top-0 left-0 right-0 w-full h-full -z-10" />
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="sections">
        <section id="hero-section" className="relative bg-base-200 w-full h-screen overflow-hidden">
          
          {/* Sparkles and Eclipse background covering entire hero section */}
          <div
  className="sparkles absolute inset-0 w-full h-full overflow-hidden 
             [mask-image:radial-gradient(50%_50%,white,transparent)]
             before:absolute before:inset-0 
             before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] 
             before:opacity-40 
             after:absolute after:-left-1/2 after:top-3/4 
             after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] 
             after:border-t after:border-[#7876c566] after:bg-[#0a0a0a]"
  style={{ colorScheme: "none" }} // 🚫 disables light/dark system effects
>
  <Sparkles
    density={1200}
    className="absolute inset-0 h-full w-full 
               [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
  />
</div>

          
          {/* Hero content positioned over sparkles and eclipse */}
          <div className="relative z-10 h-full w-full flex items-center justify-center">
            <div className="mx-auto w-full max-w-2xl">
              <div className="text-center text-3xl text-white">
                <Hero />
              </div>
            </div>
          </div>
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
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
