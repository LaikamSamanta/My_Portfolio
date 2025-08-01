import "./projects.css";

function ProjectCard({ title, description, imgSrc, link }) {
  return (
    <div className="card sm:card-side bg-white shadow-sm hover:shadow-lg transition-all duration-300 w-full h-full border border-gray-100 rounded-lg overflow-hidden">
      <figure className="w-full sm:w-2/5 lg:w-1/3 h-32 xs:h-28 sm:h-auto flex-shrink-0">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full rounded-t sm:rounded-none sm:rounded-l"
        />
      </figure>
      <div className="card-body p-3 xs:p-2 sm:p-4 lg:p-5 flex flex-col justify-between sm:w-3/5 lg:w-2/3">
        <div className="flex-1">
          <h2 className="text-sm xs:text-xs sm:text-base lg:text-lg font-semibold mb-1 xs:mb-0.5 sm:mb-2 line-clamp-2 text-gray-800">
            {title}
          </h2>
          <p className="text-xs xs:text-[10px] sm:text-sm lg:text-base text-gray-600 mb-2 xs:mb-1 sm:mb-3 line-clamp-3 xs:line-clamp-2 sm:line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex justify-end mt-auto pt-2">
          <button className="btn text-xs xs:text-[10px] sm:text-sm lg:text-base bg-blue-600 hover:bg-blue-700 text-white px-3 xs:px-2 sm:px-4 py-1.5 xs:py-1 sm:py-2 rounded-md transition-colors min-h-0 h-auto shadow-sm hover:shadow-md">
            {link ? "View Project" : "Listen"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MyProjects() {
  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-2 sm:gap-4 lg:gap-6 p-1 xs:p-0 sm:p-2 lg:p-4">
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
      <ProjectCard
        title="Collaboration Project"
        description="A special collaboration with featured artists."
        imgSrc="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      />
      <ProjectCard
        title="Remix Collection"
        description="Creative remixes of popular tracks."
        imgSrc="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      />
    </div>
  );
}
