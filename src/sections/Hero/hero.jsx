import "./hero.css";
import { AuroraText } from "../../Components/magicui/aurora-text";

const user = {
  title: "SAMANTA BIEZĒKA",
  imageSrc: "src/assets/Samanta.jpg",
  width: 155,
  height: 180,
  description: "I am a Junior Web Developer. ",
};

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          className="Samanta"
          src={user.imageSrc}
          alt={"Photo of " + user.name}
          style={{ width: user.width, height: user.height }}
        ></img>
        <div className="max-w-sm rounded-lg shadow-2xl" />
        <div>
        <div className="container">
          <h1 className="font-bold title-name text-4xl tracking-tighter md:text-5xl lg:text-7xl"><span>Hi, I am <AuroraText>{user.title}</AuroraText></span></h1>
          <h1 className="py-8">{user.description}</h1>
        </div>
          <button className="btn btn-primary">Learn more about me</button>
          <button className="btn btn-secondary ml-4">Contact me</button>
        </div>
      </div>
    </div>
  );
}
