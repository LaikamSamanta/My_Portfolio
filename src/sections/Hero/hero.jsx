import "./hero.css";
import { AuroraText } from "../../Components/magicui/aurora-text";

const user = {
  title: "SAMANTA BIEZĒKA",
  imageSrc: "/MyPhoto/Samanta.PNG",
  width: 250,
  height: 300,
  description: "I am a Junior Web Developer. ",
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
          <h2 className="py-4 sm:py-6 lg:py-8 text-sm sm:text-base lg:text-lg">{user.description}</h2>
        </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
            <button className="btn btn-secondary text-xs sm:text-sm lg:text-base">Contact me</button>
            <h3 className="py-4 sm:py-6 lg:py-8 text-sm sm:text-base lg:text-lg">OR</h3>
            <div className="icons flex">
              <a href="https://github.com/LaikamSamanta" target="_blank" rel="noopener noreferrer">
                <img src="/Icons/github.svg" alt="GitHub" className="w-6 h-6"/>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
