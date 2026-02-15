// src/components/home/Belief.jsx

const beliefs = [
  {
    title: "바보",
    desc: "계산하지 않고 진짜 사랑을 주려고 하는 바보에용..",
  },
  {
    title: "안아주기",
    desc: "사랑의 언어 1등이 스킨쉽입니다... 진짜 다 껴안고 다님...ㅎㅣ",
  },
  {
    title: "신앙",
    desc: "주님과의 교제로 살아가는 사람입니당..",
  },
];

export default function Belief() {
  return (
    <section className="belief">
      <div className="container belief-inner">
        <h2 className="section-title">가치관</h2>

        <div className="belief-list">
          {beliefs.map((item) => (
            <article key={item.title} className="belief-item">
              <h3 className="belief-title">{item.title}</h3>
              <p className="belief-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}