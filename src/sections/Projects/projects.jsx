import "./projects.css";

function ProjectCard({ title, description, imgSrc }) {
  return (
    <div className="card sm:card-side bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 w-full h-full">
      <figure className="w-full sm:w-2/5 lg:w-1/3 h-32 sm:h-auto">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full rounded-t sm:rounded-none sm:rounded-l"
        />
      </figure>
      <div className="card-body p-4 sm:p-5 flex flex-col justify-between sm:w-3/5 lg:w-2/3">
        <div>
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex justify-end mt-auto">
          <button className="btn text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            Listen
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MyProjects() {
  return (
    <section className="h-screen w-full flex flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:py-8 lg:py-10 max-w-7xl mx-auto">
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
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
    </section>
  );
}