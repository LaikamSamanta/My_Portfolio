import "./skills.css";

const skillsData = {
  frontend: [
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
      logo: "../../javascript.png",
      alt: "JavaScript",
      title: "JavaScript",
    },
    {
      logo: "../../react.png",
      alt: "React",
      title: "React",
    },
    {
      logo: "../../tailwindcss-icon.png",
      alt: "Tailwind CSS",
      title: "Tailwind CSS",
    },
  ],
  backend: [
    {
      logo: "../../php.png",
      alt: "Hypertext Preprocessor",
      title: "PHP",
    },
    {
      logo: "../../nodejs.png",
      alt: "Node.js",
      title: "Node.js",
    },
    {
      logo: "../../mysql.png",
      alt: "MySQL",
      title: "MySQL",
    },
  ],
  tools: [
    {
      logo: "../../git.png",
      alt: "Git",
      title: "Git",
    },
    {
      logo: "../../github.png",
      alt: "GitHub",
      title: "GitHub",
    },
  ],
};

const SkillCategory = ({ title, skills, categoryClass }) => (
  <div className={`skill-category ${categoryClass}`}>
    <h3 className="category-title">{title}</h3>
    <div className="skills-grid">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="skill-item"
        >
          <img
            src={skill.logo}
            alt={skill.alt}
            className="skill-icon"
          />
          <h4 className="skill-name">
            {skill.title}
          </h4>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="container px-4">
        <div className="grid grid-cols-12 justify-center mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center px-4 py-8">
            <h2 className="font-bold text-[18px] sm:text-[25px] lg:text-[35px] leading-none mb-6 px-4">
              My technology stack
            </h2>
            <p className="text-sm sm:text-lg leading-6 opacity-70 px-4 py-2">
              Showcasing the technologies I work with, organized by category.
            </p>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="skills-categories">
          <SkillCategory 
            title="Frontend" 
            skills={skillsData.frontend} 
            categoryClass="frontend-category"
          />
          <SkillCategory 
            title="Backend" 
            skills={skillsData.backend} 
            categoryClass="backend-category"
          />
          <SkillCategory 
            title="Tools" 
            skills={skillsData.tools} 
            categoryClass="tools-category"
          />
        </div>
      </div>
    </div>
  );
}


