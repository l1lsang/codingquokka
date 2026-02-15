// src/components/home/Connect.jsx

const links = [
  {
    name: "GitHub",
    url: "https://github.com/l1lsang",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/quokka._.dev?igsh=MW9xejVrY3lxNGZpdA==",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/737089688481038337",
  },
];

export default function Connect() {
  return (
    <section className="connect">
      <div className="container connect-inner">
        <h2 className="section-title">Connect</h2>

        <p className="connect-desc">
          조용히 기록하고 있습니다.
          필요하다면 언제든지 연결될 수 있습니다.
        </p>

        <div className="connect-links">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
