import React, { useEffect, useRef } from "react";
import "./Parallax.css";

// randomly stars on the background
function makeStarPositions(totalStars, width, height) {
  let stars = [];

  for (let i = 0; i < totalStars; i++) {
    // Random x and y positions
    let starX = Math.floor(Math.random() * width);
    let starY = Math.floor(Math.random() * height);

    // Opacity between 0.5 and 1
    let transparency = Math.random() * 0.5 + 0.5;

    // storing the star as a string
    let starStr = `${starX}px ${starY}px rgba(255, 255, 255, ${transparency.toFixed(2)})`;
    stars.push(starStr);
  }

  // joining the stars to use as box-shadow
  return stars.join(", ");
}

const Starfield = () => {
  const starsLayerOne = useRef(null);   // main stars
  const layerTwo = useRef(null);        // mid stars
  const thirdLayer = useRef(null);      // furthest stars

  useEffect(() => {
    // Getting window size
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight * 2; // looks better

    // Generating stars for each layer separately
    const stars1 = makeStarPositions(500, winWidth, winHeight);
    const stars2 = makeStarPositions(300, winWidth, winHeight);
    const stars3 = makeStarPositions(150, winWidth, winHeight);

    if (starsLayerOne.current) {
      starsLayerOne.current.style.boxShadow = stars1;
    }

    if (layerTwo.current) {
      layerTwo.current.style.boxShadow = stars2;
    }

    if (thirdLayer.current) {
      thirdLayer.current.style.boxShadow = stars3;
    }

  }, []); 

  return (
    <div className="starfield">
    
      <div className="stars" ref={starsLayerOne}></div>

      
      <div className="stars2" ref={layerTwo}></div>

      
      <div className="stars3" ref={thirdLayer}></div>
    </div>
  );
};

export default Starfield;
