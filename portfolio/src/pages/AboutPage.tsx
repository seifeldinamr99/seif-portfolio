export function AboutPage() {
  return (
    <main className="page about-page">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h1>About</h1>
            <p>
              I combine product thinking with engineering discipline to build tools that move teams and businesses forward.
              I enjoy working across the stack — from backend APIs and data pipelines to frontend experiences and automation.
            </p>
          </header>

          <div className="grid grid--3">
            <article className="card">
              <h2>Work highlights</h2>
              <ul className="list">
                <li>
                  <strong>Founder’s Associate</strong> — i’SUPPLY (Jan 2025 – Sep 2025)
                  <ul className="list--nested">
                    <li>Owned GTM for RX Network (pharmacy + insurance checkout).</li>
                    <li>Onboarded partners (MetLife, MedRight, EgyCare, SehaOne).</li>
                    <li>Defined product requirements with stakeholders.</li>
                  </ul>
                </li>
                <li>
                  <strong>Software Tester</strong> — i’SUPPLY (Jun 2024 – Dec 2024)
                  <ul className="list--nested">
                    <li>Built Appium automation for mobile marketplace regression suites.</li>
                    <li>Validated new features across releases and integrated into CI.</li>
                  </ul>
                </li>
                <li>
                  <strong>Account Executive</strong> — Rabbit Experience (Jul 2023 – May 2024)
                  <ul className="list--nested">
                    <li>Managed campaigns for clients like TMG, Instapay, and Didi.</li>
                    <li>Coordinated deliverables, timelines, and stakeholder expectations.</li>
                  </ul>
                </li>
              </ul>
            </article>

            <article className="card">
              <h2>Education</h2>
              <p>
                <strong>Egyptian EUI</strong> — Faculty of Computing & Information Sciences
              </p>
              <p>Computer Science student focused on systems, automation, and data solutions.</p>
              <p className="muted">Expected graduation: 2026</p>
            </article>

            <article className="card">
              <h2>Skills & tools</h2>
              <div className="tag-grid">
                {[
                  "Python",
                  "TypeScript",
                  "React",
                  "FastAPI",
                  "Django",
                  "SQL",
                  "Docker",
                  "CI/CD",
                  "Testing",
                  "Data Engineering",
                ].map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="muted" style={{ marginTop: "1rem" }}>
                Languages: Arabic (native), English (fluent), French (fluent).
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
