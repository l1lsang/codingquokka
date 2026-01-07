// src/components/home/FeaturedProjects.jsx
export default function FeaturedProjects() {
  return (
    <section className="projects">
      <h2 className="section-title">🚀 Featured Projects</h2>

      <div className="project-grid">
        <article className="project-card">
          <div className="thumb" />
          <h3>AI 상담 시스템</h3>
          <p>React · Firebase · OpenAI</p>
        </article>

        <article className="project-card">
          <div className="thumb" />
          <h3>실시간 채팅 서비스</h3>
          <p>Firebase · Auth · FCM</p>
        </article>
      </div>

      <button className="btn link">모든 프로젝트 보기 →</button>
    </section>
  );
}
