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
];

export default function ClientLogo() {
  return (
      <div className="container px-4">
        <div className="grid grid-cols-12 justify-center mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center px-4 py-8">
            <h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-6 px-4">
              My technology stack
            </h2>
            <p className="text-lg leading-6 opacity-70 px-4 py-2">
              Showcasing the technologies I work with.
            </p>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {clientLogos.map((client, i) => (
            <div
              key={i}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 text-center rounded-xl p-4 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl hover:bg-white/15 dark:hover:bg-gray-900/30"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain"
              />
              <h3 className="text-xs sm:text-sm font-semibold mt-3 text-center text-gray-800 dark:text-gray-200 px-2 py-1">
                {client.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
  );
}
