const links = [
  { name: "GitHub", url: "https://github.com/l1lsang" },
  {
    name: "Instagram",
    url: "https://www.instagram.com/quokka._.dev?igsh=MW9xejVrY3lxNGZpdA==",
  },
  { name: "Discord", url: "https://discord.com/users/737089688481038337" },
];

export default function Connect() {
  return (
    <footer className="connect section-shell" id="connect">
      <div className="page-grid">
        <div className="section-index">
          <span>06</span>
          <span>Connect</span>
        </div>

        <div className="connect-heading">
          <p className="eyebrow">함께 이야기해요</p>
          <h2>
            필요하다면,
            <br />언제든 연결될 수 있어요.
          </h2>
        </div>

        <div className="connect-links" aria-label="소셜 링크">
          {links.map((item) => (
            <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
              <span>{item.name}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <div className="footer-meta">
          <p>장경민 · Coding Quokka</p>
          <p>Seoul · 2026</p>
          <a href="#top">맨 위로 ↑</a>
        </div>
      </div>
    </footer>
  );
}
