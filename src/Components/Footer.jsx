import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
                 <div className="footer-section">
           <h3 className="footer-title">Samanta Biezēka</h3>
         </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Connect</h4>
                     <div className="social-links">
             <a 
               href="https://github.com/LaikamSamanta" 
               target="_blank" 
               rel="noopener noreferrer"
               className="social-link"
             >
               <img src="/Icons/github.svg" alt="GitHub" className="social-icon" />
               GitHub
             </a>
             <a 
               href="https://www.linkedin.com/in/samanta-biez%C4%93ka-0000000000/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="social-link"
             >
               <img src="/Icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
               LinkedIn
             </a>
             <a 
               href="https://www.instagram.com/samis_codes?igsh=bzJoaHMzd2lob3Zn&utm_source=qr" 
               target="_blank" 
               rel="noopener noreferrer"
               className="social-link"
             >
               <img src="/Icons/instagram.svg" alt="Instagram" className="social-icon" />
               Instagram
             </a>
           </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Contact Info</h4>
          <div className="contact-info">
            <p className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:sbiezeka@gmail.com">samantabiezeka@gmail.com</a>
            </p>
            <p className="contact-item">
              <span className="contact-icon"><img src="/Icons/latvia.png" alt="Location" className="social-icon" /></span>
              <span>Latvia</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <p className="copyright">
          © {currentYear} Samanta Biezēka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
