// src/provider/ThemeProvider.jsx
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    // remove any previous classes and add the current theme
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // also set data-theme for debugging (optional)
    root.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.warn("Could not write theme to localStorage", e);
    }

    console.log("[ThemeProvider] theme applied:", theme, root.className);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
