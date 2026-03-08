export function ResumePage() {
  return (
    <main className="page resume-page">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h1>Resume</h1>
            <p>
              Download a printable version or view the highlights below.
            </p>
          </header>

          <div className="resume-summary">
            <p>
              <strong>Seif ElTohamy</strong> — <em>Computer Science student</em> with hands-on experience
              in software development, data engineering, and automation.
            </p>
            <p>
              <a href="#" className="button button--outline" aria-label="Download resume">
                Download Resume (PDF)
              </a>
            </p>
          </div>

          <div className="grid grid--2">
            <div>
              <h2>Technical skills</h2>
              <ul className="list">
                <li>Python, TypeScript, C/C++</li>
                <li>React, FastAPI, Django</li>
                <li>SQL, PostgreSQL</li>
                <li>Docker, Git, CI/CD</li>
                <li>Test automation (Appium)</li>
                <li>Data analysis (Pandas, scikit-learn)</li>
              </ul>
            </div>

            <div>
              <h2>Certifications & courses</h2>
              <ul className="list">
                <li>Machine Learning (Andrew Ng, Coursera)</li>
                <li>Mobile Automation Testing with Appium</li>
                <li>API Testing with Postman</li>
                <li>Agile with Jira</li>
                <li>Fintech Foundations (UPenn)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
