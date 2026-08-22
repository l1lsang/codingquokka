const profile = [
  { label: "학교", value: "한성대학교 컴퓨터공학부" },
  { label: "별명", value: "코딩쿼카" },
  { label: "성향", value: "INFJ" },
  { label: "기억할 말", value: "GOD IS LOVE" },
];

export default function WhoAmI() {
  return (
    <section className="profile section-shell" id="profile">
      <div className="page-grid">
        <div className="section-index">
          <span>02</span>
          <span>Profile</span>
        </div>

        <div className="profile-intro">
          <p className="eyebrow">나는 누구인가</p>
          <h2>
            코드를 배우고,
            <br />
            사람을 사랑하는 법을
            <br />더 오래 배우는 중입니다.
          </h2>
        </div>

        <div className="profile-note">
          <span aria-hidden="true">↳</span>
          <p>
            별명은 쿼카예요.
            <br />다정함은 성격보다 연습에 가깝다고 믿습니다.
          </p>
        </div>

        <dl className="profile-list">
          {profile.map((item, index) => (
            <div key={item.label} className="profile-row">
              <dt>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
