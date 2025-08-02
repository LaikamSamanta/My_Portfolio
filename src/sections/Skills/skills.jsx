import "./skills.css";

const clientLogos = [
  {
    logo: "../../javascript.png",
    alt: "JavaScript",
    title: "JavaScript",
  },
  {
    logo: "../../html5.png",
    alt: "HyperText Markup Language",
    title: "HTML",
  },
  {
    logo: "../../css3.png",
    alt: "Cascading Style Sheets",
    title: "CSS",
  },
  {
    logo: "../../php.png",
    alt: "Hypertext Preprocessor",
    title: "PHP",
  },
  {
    logo: "../../tailwindcss-icon.png",
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
  },
  {
    logo: "../../react.png",
    alt: "React",
    title: "React",
  },
  {
    logo: "../../mysql.png",
    alt: "MySQL",
    title: "MySQL",
  },
  {
    logo: "../../nodejs.png",
    alt: "Node.js",
    title: "Node.js",
  },
    {
    logo: "../../github.png",
    alt: "GitHub",
    title: "GitHub",
  },
   {
    logo: "../../git.png",
    alt: "Git",
    title: "Git",
  },
];

export default function ClientLogo() {
  return (
    <div className="skills-container">
      <div className="container px-4">
        <div className="grid grid-cols-12 justify-center mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center px-4 py-8">
            <h2 className="font-bold text-[18px] sm:text-[25px] lg:text-[35px] leading-none mb-6 px-4">
              My technology stack
            </h2>
            <p className="text-sm sm:text-lg leading-6 opacity-70 px-4 py-2">
              Showcasing the technologies I work with.
            </p>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-6 place-items-center">
          {clientLogos.map((client, i) => (
            <div
              key={i}
              className="w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 text-center rounded-xl p-2 sm:p-4 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl hover:bg-white/15 dark:hover:bg-gray-900/30"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 object-contain"
              />
              <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold mt-2 sm:mt-3 text-center text-gray-800 dark:text-gray-200 px-1 sm:px-2 py-1">
                {client.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


