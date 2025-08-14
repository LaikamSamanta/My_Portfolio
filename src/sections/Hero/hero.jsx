import "./hero.css";
import { AuroraText } from "../../Components/magicui/aurora-text";

const user = {
  title: "SAMANTA BIEZĒKA",
  imageSrc: "/MyPhoto/Samanta.PNG",
  width: 250,
  height: 300,
  occupation: "Junior Web Developer. ",
  
};

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="hero w-full h-full flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-center">
        <img
          className="Samanta rounded-lg"
          src={user.imageSrc}
          alt={"Photo of " + user.title}
        />
        <div className="text-center lg:text-left">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h1 className="font-bold title-name text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl tracking-tighter leading-tight">
              <span>Hi, I am <AuroraText>{user.title}</AuroraText></span>
            </h1>
            <h1 className="py-4 sm:py-6 lg:py-8 text-sm sm:text-base lg:text-lg">{user.occupation}</h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center lg:justify-start">
            <button 
              onClick={scrollToContact}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out border border-transparent hover:border-white/20 cursor-pointer z-20 flex-shrink-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Contact me</span>
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
            </button>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              <span className="text-sm text-gray-500 font-medium">OR</span>
              <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <span className="text-sm text-gray-600 font-medium">Follow me:</span>
              <div className="flex gap-3 flex-wrap justify-center">
                {/* GitHub */}
                <a 
                  href="https://github.com/LaikamSamanta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-gray-200 hover:shadow-xl hover:scale-110 transition-all duration-300 hover:border-gray-800 hover:bg-white z-20 flex-shrink-0"
                  aria-label="Visit my GitHub profile"
                >
                  <img 
                    src="/Icons/github.svg" 
                    alt="GitHub" 
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <svg className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                    GitHub
                  </div>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/samanta-biez%C4%93ka-0000000000/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-gray-200 hover:shadow-xl hover:scale-110 transition-all duration-300 hover:border-blue-600 hover:bg-white z-20 flex-shrink-0"
                  aria-label="Visit my LinkedIn profile"
                >
                  <img 
                    src="/Icons/linkedin.svg" 
                    alt="LinkedIn" 
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <svg className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                    LinkedIn
                  </div>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/samis_codes?igsh=bzJoaHMzd2lob3Zn&utm_source=qr"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-gray-200 hover:shadow-xl hover:scale-110 transition-all duration-300 hover:border-pink-500 hover:bg-white z-20 flex-shrink-0"
                  aria-label="Visit my Instagram profile"
                >
                  <img 
                    src="/Icons/instagram.svg" 
                    alt="Instagram" 
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <svg className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323z"/>
                  </svg>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
