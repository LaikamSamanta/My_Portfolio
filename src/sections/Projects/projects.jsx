import React, { useState, useCallback, useEffect } from "react";
import "./projects.css";
import ImageGallery from "../../Components/ImageGallery";

export default function MyProjects() {
  const [fullscreenModal, setFullscreenModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  const openFullscreenModal = useCallback((project) => {
    // Save current scroll position
    setSavedScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
    setFullscreenModal(project);
    setCurrentImageIndex(0);
    document.body.classList.add('modal-open');
  }, []);

  const closeFullscreenModal = useCallback(() => {
    setFullscreenModal(null);
    setCurrentImageIndex(0);
    document.body.classList.remove('modal-open');
    
    // Restore scroll position after a short delay to ensure modal is fully closed
    setTimeout(() => {
      window.scrollTo(0, savedScrollPosition);
    }, 100);
  }, [savedScrollPosition]);

  const nextImage = useCallback(() => {
    if (fullscreenModal && fullscreenModal.screenshots) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % fullscreenModal.screenshots.length
      );
    }
  }, [fullscreenModal]);

  const prevImage = useCallback(() => {
    if (fullscreenModal && fullscreenModal.screenshots) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex - 1 + fullscreenModal.screenshots.length) % fullscreenModal.screenshots.length
      );
    }
  }, [fullscreenModal]);

  const handleKeyDown = useCallback((e) => {
    if (!fullscreenModal) return;
    
    if (e.key === 'Escape') {
      closeFullscreenModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  }, [fullscreenModal, nextImage, prevImage, closeFullscreenModal]);

  // Add keyboard event listener when modal is open
  useEffect(() => {
    if (fullscreenModal) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [fullscreenModal, handleKeyDown]);

  const projects = [
    {
      id: 1,
      title: "Sportlandija(Blog site)",
      description: "My first website, which I built entirely from scratch with a database-backed structure, enables the administrator to manage and update videos, images, and event listings.",
      tech: ["HTML", "CSS", "PHP", "SQL", "JavaScript"],
      icon: ["html5.png", "css3.png", "php.png", "database.png", "javascript.png"],
      githubUrl: "https://github.com/LaikamSamanta/Sportlandija",
      screenshots: [
        "/Project_Sportlandija/FireShot Capture 001 - Sportlandija - Ģimenes sporta svētki - localhost.png",
        "/Project_Sportlandija/FireShot Webpage Capture 003 - 'Sportlandija - Ģimenes sporta svētki' - localhost.png",
        "/Project_Sportlandija/FireShot Webpage Capture 009 - 'Administratora piekļuve - Sportlandija' - localhost.png",
        "/Project_Sportlandija/FireShot Webpage Capture 010 - 'Sportlandija - Foto Admin' - localhost.png"
      ]
    },
    {
      id: 2,
      title: "E-Commerce website",
      description: "An e-commerce platform with advanced features like payment processing, inventory management, and admin dashboard.",
      tech: ["React.js", "Laravel", "SQL"],
      icon: ["react.png", "Laravel.svg.png", "database.png"],
      githubUrl: "https://github.com/LaikamSamanta/E-Commerce",
      screenshots: [
        "/Project_Ecommerce/FireShot Webpage Capture 012 - 'Vite + React' - localhost.png",
        "/Project_Ecommerce/FireShot Webpage Capture 013 - 'Vite + React' - localhost.png",
        "/Project_Ecommerce/FireShot Webpage Capture 014 - 'Vite + React' - localhost.png",
        "/Project_Ecommerce/FireShot Webpage Capture 015 - 'Vite + React' - localhost.png"
      ]
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <figure className="project-image">
                {project.screenshots ? (
                  <ImageGallery 
                    images={project.screenshots} 
                    projectTitle={project.title}
                    isMainGallery={true}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      console.error(`Failed to load project image: ${project.image}`);
                      e.target.style.display = 'none';
                    }}
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                                   <div className="project-tech">
                     {project.tech.map((tech, index) => (
                       <span key={index} className="tech-tag">
                         <img 
                           src={`/${project.icon[index]}`} 
                           alt={tech} 
                           className="tech-icon" 
                           onError={(e) => {
                             console.error(`Failed to load icon: ${project.icon[index]}`);
                             e.target.style.display = 'none';
                           }}
                           onLoad={() => {
                             console.log(`Successfully loaded icon: ${project.icon[index]}`);
                           }}
                         />
                         {tech}
                       </span>
                     ))}
                   </div>
                <div className="card-actions justify-end">
                  {project.screenshots && (
                    <button 
                      onClick={() => openFullscreenModal(project)}
                      className="btn btn-primary"
                      style={{ marginRight: '0.5rem' }}
                    >
                      <svg 
                        className="fullscreen-icon" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: '16px', height: '16px', marginRight: '0.5rem' }}
                      >
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                      </svg>
                      See images fullscreen
                    </button>
                  )}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <svg 
                      className="github-icon" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenModal && (
        <div className="fullscreen-modal" onClick={closeFullscreenModal}>
          <div className="fullscreen-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="fullscreen-close" onClick={closeFullscreenModal}>✕</button>
            
            {/* Navigation Arrows */}
            <button className="fullscreen-nav fullscreen-prev" onClick={prevImage}>
              ‹
            </button>
            <button className="fullscreen-nav fullscreen-next" onClick={nextImage}>
              ›
            </button>
            
            {/* Current Image */}
            <div className="fullscreen-image-container">
              <img 
                src={fullscreenModal.screenshots[currentImageIndex]} 
                alt={`${fullscreenModal.title} screenshot ${currentImageIndex + 1}`}
                className="fullscreen-image"
              />
            </div>
            
            {/* Image Counter */}
            <div className="fullscreen-counter">
              {currentImageIndex + 1} / {fullscreenModal.screenshots.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
