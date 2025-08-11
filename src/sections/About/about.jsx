import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">

            <div className="about-description">
              <p>
                Hello! I'm <span className="highlight">Samanta</span>, a positive and creative 
                <span className="highlight"> Junior Web Developer</span> with a love for building 
                beautiful, functional, and maybe fun websites.
              </p>
              
              <p>
              I create responsive, user-friendly web applications with modern technologies.
              Let's build something amazing together.
              </p>
        
            </div>
          </div>
          
                     <div className="about-image">
             <div className="image-container">
               <img 
                 src="/MyPhoto/SamantaPC.PNG" 
                 alt="Samanta - Junior Web Developer" 
                 className="profile-photo"
               />
               <div className="image-overlay"></div>
             </div>
             <div className="personal-info">
                               <div className="location">
                  <img src="/Icons/latvia.png" alt="Latvia flag" className="flag-icon" />
                  <span className="location-text">Latvia</span>
                </div>
               <div className="age">
                 <span className="age-text">25 years old</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
