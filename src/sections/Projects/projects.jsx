import "./projects.css";

function ProjectCard({ title, description, imgSrc }) {
  return (
    <div className="card sm:card-side bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 w-full h-full">
      <figure className="sm:w-2/5 lg:w-1/3 h-32 sm:h-full">
        <img 
          src={imgSrc} 
          alt={title} 
          className="object-cover w-full h-full" 
        />
      </figure>
      <div className="card-body p-2 sm:p-3 lg:p-4 sm:w-3/5 lg:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 line-clamp-2">{title}</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">{description}</p>
        </div>
        <div className="flex justify-end mt-auto">
          <button className="btn text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md transition-colors">
            Listen
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MyProjects() {
  return (
    <div className="container w-full h-full flex flex-col sm:flex-row">
      <div className="flex-1 max-w-6xl mx-auto w-full flex flex-col">
        {/* Projects Grid - takes remaining space */}
        <div className="flex-1 grid gap-2 sm:gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 auto-rows-fr overflow-hidden">
          <ProjectCard
            title="New album is released!"
            description="Click the button to listen on Spotiwhy app."
            imgSrc="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          />
          <ProjectCard
            title="Another album is out!"
            description="Tap the link and enjoy the tracks on Spotiwhy app."
            imgSrc="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          />
          <ProjectCard
            title="Latest Single Drop"
            description="Experience our newest sound with this fresh release."
            imgSrc="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          />
          <ProjectCard
            title="Live Concert Recording"
            description="Relive the energy of our live performance."
            imgSrc="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          />
        </div>
      </div>
    </div>
  );
}