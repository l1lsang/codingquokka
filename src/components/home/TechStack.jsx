// src/components/home/TechStack.jsx
const stacks = [
  "React",
  "Firebase",
  "CSS",
  "OpenAI API",
  "Vercel",
];

export default function TechStack() {
  return (
    <section className="tech">
      <h2 className="section-title">⚙️ Tech Stack</h2>

      <ul className="tech-list">
        {stacks.map((tech) => (
          <li key={tech} className="tech-item">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
