// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// 나중에 추가될 페이지들
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
      style={{
        padding: "8px 14px",
        borderRadius: "999px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* 이후 확장용 */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
