import "./hero.css";
import { AuroraText } from "../../Components/magicui/aurora-text";

const user = {
  title: "SAMANTA BIEZĒKA",
  imageSrc: "/MyPhoto/Samanta.PNG",
  width: 230,
  height: 260,
  occupation: "I am a Junior Web Developer. ",
  description: "I create responsive, user-friendly web applications with modern technologies. Let's build something amazing together.",
};

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        <img
          className="Samanta"
          src={user.imageSrc}
          alt={"Photo of " + user.name}
          style={{ width: user.width, height: user.height }}
        ></img>
        <div className="max-w-sm rounded-lg shadow-2xl" />
        <div className="text-center lg:text-left">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold title-name text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl tracking-tighter leading-tight">
            <span>Hi, I am <AuroraText>{user.title}</AuroraText></span>
          </h1>
          <h1 className="py-4 sm:py-6 lg:py-8 text-sm sm:text-base lg:text-lg">{user.occupation}</h1>
           <h2 className="py-4 sm:py-6 lg:py-8 text-sm sm:text-base lg:text-lg">{user.description}</h2>
        </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center lg:justify-start">
            <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white font-semibold text-xs sm:text-sm lg:text-base px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-out border border-transparent hover:border-white/20">
              <span className="relative z-10 flex items-center gap-2">
                <span>Contact me</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            </button>
            
            <div className="flex items-center gap-2">
              <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              <span className="text-sm sm:text-base text-gray-500 font-medium">OR</span>
              <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">Follow me:</span>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/LaikamSamanta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg hover:scale-110 transition-all duration-300 hover:border-gray-800"
                  aria-label="Visit my GitHub profile"
                >
                  <img 
                    src="/Icons/github.svg" 
                    alt="GitHub" 
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    GitHub
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/samanta-biez%C4%93ka-0000000000/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg hover:scale-110 transition-all duration-300 hover:border-blue-600"
                  aria-label="Visit my LinkedIn profile"
                >
                  <img 
                    src="/Icons/linkedin.svg" 
                    alt="LinkedIn" 
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    LinkedIn
                  </div>
                </a>
                
                <a 
                  href="https://www.instagram.com/samanta_biez_ka/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg hover:scale-110 transition-all duration-300 hover:border-pink-500"
                  aria-label="Visit my Instagram profile"
                >
                  <img 
                    src="/Icons/instagram.svg" 
                    alt="Instagram" 
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
