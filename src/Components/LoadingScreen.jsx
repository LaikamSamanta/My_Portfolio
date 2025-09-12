import { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [welcomeText, setWelcomeText] = useState("");

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Ensure minimum loading time for better UX
    const minLoadingTime = setTimeout(() => {
      if (progress < 100) {
        setProgress(100);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(minLoadingTime);
    };
  }, [progress, onLoadingComplete]);

  useEffect(() => {
    // Typing effect for welcoming message
    const welcomeMessage = "Welcome!";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= welcomeMessage.length) {
        setWelcomeText(welcomeMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120); // Slightly faster typing speed: 120ms per character

    return () => clearInterval(typingInterval);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Animated background */}
        <div className="loading-background">
          <div className="loading-sparkles">
            {Array.from({ length: 100 }, (_, i) => (
              <div key={i} className={`sparkle sparkle-${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Loading content */}
        <div className="loading-content">
          <div className="loading-logo">
              <h2 className="loading-title">
                <span className="loading-subtitle">
                  {welcomeText}
                  <span className="typing-cursor">|</span>
                </span>
                <span className="loading-white-text">My name is </span>
                <span className="loading-name">Samanta Biezēka</span>
              </h2>
          </div>

          {/* Progress bar */}
          <div className="loading-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-text">{Math.round(progress)}%</div>
          </div>

          {/* Loading animation */}
          <div className="loading-animation">
            <div className="loading-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
