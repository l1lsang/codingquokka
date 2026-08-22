import Hero from "../components/home/Hero";
import TechStack from "../components/home/TechStack";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Strength from "../components/home/Strength";
import CTA from "../components/home/CTA";
import Declaration from "../components/home/Declaration";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <a className="skip-link" href="#profile">
        본문으로 건너뛰기
      </a>
      <Hero />
      <TechStack />
      <Declaration />
      <FeaturedProjects />
      <Strength />
      <CTA />
    </main>
  );
}
