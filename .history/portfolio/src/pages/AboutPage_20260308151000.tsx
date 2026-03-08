export function AboutPage() {
  return (
    <main className="page about-page">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h1>About</h1>
            <p>
              I’m a computer science student with practical experience building full-stack systems, data pipelines, and test automation.
              I enjoy turning complex requirements into intuitive products and working closely with stakeholders to deliver business value.
            </p>
          </header>

          <div className="grid grid--2">
            <div>
              <h2>Work experience</h2>
              <ul className="list">
                <li>
                  <strong>Founder’s Associate</strong> — i’SUPPLY (Jan 2025 – Sep 2025)
                  <ul className="list--nested">
                    <li>Led go-to-market work for RX Network (pharmacy + insurance checkout system).</li>
                    <li>Gathered pharmacy leads and supported partner onboarding (MetLife, MedRight, EgyCare, SehaOne).</li>
                    <li>Collaborated with product owners to define requirements for the RX Network system.</li>
                  </ul>
                </li>
                <li>
                  <strong>Software Tester</strong> — i’SUPPLY (Jun 2024 – Dec 2024)
                  <ul className="list--nested">
                    <li>Performed manual and regression testing for new marketplace features.</li>
                    <li>Built Appium automation scripts for the Flutter app.</li>
                  </ul>
                </li>
                <li>
                  <strong>Account Executive</strong> — Rabbit Experience (Jul 2023 – May 2024)
                  <ul className="list--nested">
                    <li>Managed client accounts across multiple industries (TMG, Instapay, Mabany Edris, Walk of Cairo, Didi).</li>
                    <li>Coordinated briefs, deliverables, and deadlines to meet client expectations.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2>Education & skills</h2>
              <p>
                <strong>Egyptian EUI | Faculty of Computing and Information Sciences</strong><br />
                Bachelor’s degree (Nov 2022 – Present)
              </p>
              <p>
                <strong>Skills:</strong> Python, C/C++, Scala, React, TypeScript, FastAPI, Django, SQL, Docker, testing automation, data analysis.
              </p>
              <p>
                <strong>Languages:</strong> Arabic (native), English (fluent), French (fluent).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
