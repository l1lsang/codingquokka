const navItems = [
  { label: "소개", href: "#profile" },
  { label: "선언", href: "#declaration" },
  { label: "가치관", href: "#values" },
  { label: "연결", href: "#connect" },
];

export default function Hero() {
  return (
    <header className="hero" id="top">
      <nav className="site-nav" aria-label="주요 메뉴">
        <a className="wordmark" href="#top" aria-label="장경민 소개 페이지 맨 위로">
          <span className="wordmark-mark">CQ.</span>
          <span>장경민</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="hero-grid page-grid">
        <div className="section-index hero-index">
          <span>01</span>
          <span>Introduction</span>
        </div>

        <h1 className="hero-title">
          받은 사랑을
          <span className="hero-title-offset">흘려보내는</span>
          <span>
            사람입니다<span className="accent-dot">.</span>
          </span>
        </h1>

        <div className="hero-aside">
          <p>
            사람들에게 받은 사랑과 주님께 받은 사랑을 기억하며, 한 사람과
            공동체를 오래 바라보려 합니다.
          </p>
          <dl className="hero-meta">
            <div>
              <dt>Based in</dt>
              <dd>Seoul, KR</dd>
            </div>
            <div>
              <dt>Studying</dt>
              <dd>Computer Science</dd>
            </div>
          </dl>
        </div>

        <a className="scroll-cue" href="#profile">
          <span>아래로 읽기</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
