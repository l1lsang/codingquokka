// src/pages/Home.jsx
import Hero from "../components/home/Hero";
import TechStack from "../components/home/TechStack";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Strength from "../components/home/Strength";
import CTA from "../components/home/CTA";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <Strength />
      <CTA />
    </main>
  );
}
