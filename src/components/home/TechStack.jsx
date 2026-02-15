// src/components/home/WhoAmI.jsx

const traits = [
  "한성대학교 컴공",
  "이이이이이이ㅣ잉",
  "별명은 쿼카에요...",
  "INFJ",
  "GOD IS LOVE",
];

export default function WhoAmI() {
  return (
    <section className="who">
      <div className="container who-inner">
        <h2 className="section-title">나는 누구인가</h2>

        <ul className="who-list">
          {traits.map((item, index) => (
            <li key={index} className="who-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}