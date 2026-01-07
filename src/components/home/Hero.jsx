// src/components/home/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-greeting">👋 안녕하세요</p>

        <h1 className="hero-title">
          기능으로 말하는 개발자 <br />
          <strong>경민</strong>입니다
        </h1>

        <p className="hero-desc">
          React · Firebase · AI로 <br />
          실제 사용되는 서비스를 만듭니다
        </p>

        <div className="hero-actions">
          <button className="btn primary">프로젝트 보기</button>
          <button className="btn ghost">문의하기</button>
        </div>
      </div>
    </section>
  );
}
