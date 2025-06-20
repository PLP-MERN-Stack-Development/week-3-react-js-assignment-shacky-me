import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme can be 'light' or 'dark'

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    // Apply theme to the body
    document.body.className =
      theme === "light" ? "bg-black text-white" : "bg-white";
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider as default };
