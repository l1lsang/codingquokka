const paragraphs = [
  "사랑하지 못하는 순간에도 사랑하려고 노력합니다. 한 사람을 넘어 공동체를 사랑하는 일이 무엇인지 배워 가고 있습니다.",
  "정신없이 세상을 살아가다가도 잠시 멈춰, 주변에 도움이 필요한 사람이 있는지 살피려 합니다.",
  "자주 넘어지고 낙심하지만 그때마다 다시 일어납니다. 표현이 서툴러도 마음을 말하고, 조금씩 예수님을 닮아가고 싶습니다.",
];

export default function Current() {
  return (
    <section className="current section-shell" id="current">
      <div className="page-grid">
        <div className="section-index">
          <span>05</span>
          <span>Now</span>
        </div>

        <div className="current-heading">
          <p className="eyebrow">지금의 나</p>
          <h2>
            넘어져도,
            <br />다시 사랑하는 쪽으로.
          </h2>
        </div>

        <div className="current-copy">
          {paragraphs.map((paragraph, index) => (
            <div key={paragraph} className="current-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
