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
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-6">
              My technology stack
            </h2>
            <p className="text-lg leading-6 opacity-70">
              Showcasing the technologies I work with.
            </p>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {clientLogos.map((client, i) => (
            <div
              key={i}
              className="w-[auto] h-[auto] text-center dark:bg-[#283446] rounded-lg p-6 lg:p-8 transition-all duration-200 hover:scale-105 shadow-xl  hover:shadow-2x1 dark:shadow-gray-800 dark:hover:shadow-black flex flex-col items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="max-h-12 max-w-full h-auto mx-auto"
              />
              <h3 className="text-sm font-semibold mt-4 text-center">
                {client.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
  );
}
