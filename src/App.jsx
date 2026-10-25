const eventDetails = [
  { label: '날짜', value: '2026년 11월 21일 토요일' },
  { label: '시간', value: '오후 2:00' },
  { label: '장소', value: '서울시 강남구 예식장 1층 그랜드홀' },
  { label: '오시는 길', value: '지하철 2호선 강남역 10번 출구 5분 거리' },
]

const schedule = [
  { time: '13:00', title: '게스트 입장', desc: '모든 분들을 맞이하겠습니다.' },
  { time: '14:00', title: '결혼식 진행', desc: '서약식과 축하의 시간입니다.' },
  { time: '15:00', title: '오찬', desc: '모두 함께하는 만찬 시간입니다.' },
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Together with joy</p>
          <h1>
            민준 <span>&</span> 서연
          </h1>
          <p className="subtext">우리, 오래도록 함께 하겠습니다.</p>
          <a className="primary-btn" href="#details">
            청첩장 보기
          </a>
        </div>
      </header>

      <main>
        <section className="intro section-card">
          <p className="section-kicker">Invitation</p>
          <h2>저희 두 사람의 시작을 함께해 주세요.</h2>
          <p>
            서로를 알아가며 많은 사랑을 쌓아온 저희가,
            <br />
            이제 한 마음으로 함께 나아가려 합니다.
            <br />
            평생의 동반자가 되어주실 분들을 초대합니다.
          </p>
        </section>

        <section id="details" className="details section-card">
          <p className="section-kicker">Wedding</p>
          <div className="detail-grid">
            {eventDetails.map((item) => (
              <div key={item.label} className="detail-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="schedule section-card">
          <p className="section-kicker">Schedule</p>
          <div className="schedule-list">
            {schedule.map((item) => (
              <div key={item.time} className="schedule-item">
                <div className="time">{item.time}</div>
                <div className="info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="message section-card">
          <p className="section-kicker">Greeting</p>
          <h2>따뜻한 마음으로 축복해 주시면 감사하겠습니다.</h2>
          <p>
            자리를 빛내주시는 많은 분들과 함께하는 순간이 가장 큰 기쁨이 될 것입니다.
            <br />
            함께해 주신다는 것이 저희에게 큰 힘이 됩니다.
          </p>
        </section>
      </main>
    </div>
  )
}
