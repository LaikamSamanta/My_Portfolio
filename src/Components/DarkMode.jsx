import { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const lightTheme = "light";
  const darkTheme = "dark";
  const clickedClass = "clicked";

  // Always start with light theme
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    // Always apply light theme on mount
    document.body.classList.remove(lightTheme, darkTheme);
    document.body.classList.add(lightTheme);
    setTheme(lightTheme);
    // Save light theme as default
    localStorage.setItem("theme", lightTheme);
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
