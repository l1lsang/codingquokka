import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <BrowserRouter>
      {/* 전역 UI (나중에 Header로 이동 가능) */}
      <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
        <ThemeToggle />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* 확장용 */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
