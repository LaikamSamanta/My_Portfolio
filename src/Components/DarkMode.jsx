import { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const lightTheme = "light";
  const darkTheme = "dark";
  const clickedClass = "clicked";

  // Always prefer saved theme, default to dark (ignores browser preference)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || darkTheme;
  });

  useEffect(() => {
    // Apply theme immediately on mount
    const savedTheme = localStorage.getItem("theme") || darkTheme;
    document.body.classList.remove(lightTheme, darkTheme);
    document.body.classList.add(savedTheme);
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Remove both first, then add current theme
    document.body.classList.remove(lightTheme, darkTheme);
    document.body.classList.add(theme);

    // Save theme
    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme((prev) => (prev === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <button
      id="darkMode"
      className={theme === darkTheme ? clickedClass : ""}
      onClick={switchTheme}
    >
      {theme === darkTheme ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkMode;
