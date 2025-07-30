import { useEffect, useRef } from "react";
import "./Parallax.css";

function createStars(count, screenW, screenH) {
  const starPositions = [];

  for (let i = 0; i < count; i++) {

    const xPos = Math.floor(Math.random() * screenW);
    const yPos = Math.floor(Math.random() * screenH);

    const alpha = (0.5 + Math.random() * 0.5).toFixed(2);

    starPositions.push(`${xPos}px ${yPos}px rgba(255, 255, 255, ${alpha})`);
  }

  return starPositions.join(", ");
}

const Starfield = () => {

  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight * 2; 

    if (layer1.current) layer1.current.style.boxShadow = createStars(500, screenWidth, screenHeight);
    if (layer2.current) layer2.current.style.boxShadow = createStars(300, screenWidth, screenHeight);
    if (layer3.current) layer3.current.style.boxShadow = createStars(150, screenWidth, screenHeight);
  }, []); 

  return (
    <div className="starfield">
      
      <div className="stars" ref={layer1} />
      <div className="stars2" ref={layer2} />
      <div className="stars3" ref={layer3} />
    </div>
  );
};

export default Starfield;
