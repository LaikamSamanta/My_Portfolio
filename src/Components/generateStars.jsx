import React, { useEffect, useRef } from "react";
import "./Parallax.css";

// randomly stars on the background
function makeStarPositions(totalStars, width, height, isDarkMode = false) {
  let stars = [];

  for (let i = 0; i < totalStars; i++) {
    // Random x and y positions
    let starX = Math.floor(Math.random() * width);
    let starY = Math.floor(Math.random() * height);

    // Opacity between 0.5 and 1
    let transparency = Math.random() * 0.5 + 0.5;

    // Choose star color based on theme with random transparency
    let starColor = isDarkMode ? `rgba(0, 0, 0, ${transparency})` : `rgba(255, 255, 255, ${transparency})`;

    // storing the star as a string
    let starStr = `${starX}px ${starY}px ${starColor}`;
    stars.push(starStr);
  }

  // joining the stars to use as box-shadow
  return stars.join(", ");
}

const Starfield = () => {
  const starsLayerOne = useRef(null);   // main stars
  const layerTwo = useRef(null);        // mid stars
  const thirdLayer = useRef(null);      // furthest stars

  const generateStars = () => {
    // Getting window size
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight * 2; // looks better

    // Check if dark mode is active
    const isDarkMode = document.body.classList.contains('dark');
    console.log('Dark mode active:', isDarkMode); // Debug log

    // Generating stars for each layer separately
    const stars1 = makeStarPositions(500, winWidth, winHeight, isDarkMode);
    const stars2 = makeStarPositions(300, winWidth, winHeight, isDarkMode);
    const stars3 = makeStarPositions(150, winWidth, winHeight, isDarkMode);

    console.log('Star color for first few stars:', stars1.split(', ').slice(0, 3)); // Debug log

    if (starsLayerOne.current) {
      starsLayerOne.current.style.boxShadow = stars1;
    }

    if (layerTwo.current) {
      layerTwo.current.style.boxShadow = stars2;
    }

    if (thirdLayer.current) {
      thirdLayer.current.style.boxShadow = stars3;
    }
  };

  useEffect(() => {
    generateStars();

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      generateStars();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
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
