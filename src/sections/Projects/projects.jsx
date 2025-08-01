import "./projects.css";

function ProjectCard({ title, description, imgSrc }) {
  return (
    <div className="card sm:card-side bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 w-full h-full">
      <figure className="w-full sm:w-2/5 lg:w-1/3 h-32 xs:h-28 sm:h-auto">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full rounded-t sm:rounded-none sm:rounded-l"
        />
      </figure>
      <div className="card-body p-3 xs:p-2 sm:p-4 flex flex-col justify-between sm:w-3/5 lg:w-2/3">
        <div>
          <h2 className="text-sm xs:text-xs sm:text-base font-semibold mb-1 xs:mb-0.5 line-clamp-2">
            {title}
          </h2>
          <p className="text-xs xs:text-[10px] sm:text-sm text-gray-600 mb-2 xs:mb-1 line-clamp-3 xs:line-clamp-2 sm:line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex justify-end mt-auto">
          <button className="btn text-xs xs:text-[10px] sm:text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 xs:px-2 py-1.5 xs:py-1 rounded-md transition-colors min-h-0 h-auto">
            Listen
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MyProjects() {
  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-2 sm:gap-4 p-1 xs:p-0 sm:p-0">
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
  );
}
