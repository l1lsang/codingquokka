const beliefs = [
  {
    number: "01",
    title: "계산하지 않는 바보",
    desc: "돌아올 마음을 먼저 세지 않고 진짜 사랑을 건네는 사람이 되고 싶습니다.",
  },
  {
    number: "02",
    title: "안아 주는 마음",
    desc: "저의 첫 번째 사랑의 언어는 스킨십입니다. 말보다 먼저 따뜻하게 안아 주곤 합니다.",
  },
  {
    number: "03",
    title: "삶이 되는 신앙",
    desc: "주님과의 교제가 특별한 순간에만 머물지 않고 매일의 태도가 되기를 바랍니다.",
  },
];

export default function Belief() {
  return (
    <section className="values section-shell" id="values">
      <div className="page-grid">
        <div className="section-index">
          <span>04</span>
          <span>Values</span>
        </div>

        <div className="values-heading">
          <p className="eyebrow">가치관</p>
          <h2>내가 선택하고 싶은 세 가지 태도</h2>
        </div>

        <div className="values-list">
          {beliefs.map((item) => (
            <article key={item.number} className="value-item">
              <span className="value-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
