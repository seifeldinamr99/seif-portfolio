export function ContactPage() {
  return (
    <main className="page contact-page">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h1>Contact</h1>
            <p>Let’s connect—whether it’s a potential role, collaboration, or a quick question.</p>
          </header>

          <div className="grid grid--2">
            <div className="contact-card">
              <h2>Get in touch</h2>
              <ul className="contact-list">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:seifeldinamreltohamy@gmail.com">
                    seifeldinamreltohamy@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> 01117884660
                </li>
                <li>
                  <strong>Location:</strong> New Cairo, Cairo, Egypt
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a href="https://www.linkedin.com/in/seifeltohamy" target="_blank" rel="noreferrer">
                    linkedin.com/in/seifeltohamy
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-card">
              <h2>Quick message</h2>
              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert("Thanks! This demo form doesn\'t send messages yet.");
                }}
              >
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Message
                  <textarea name="message" placeholder="Tell me what you need" required />
                </label>
                <button type="submit" className="button button--primary">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
