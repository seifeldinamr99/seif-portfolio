export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-text">© {new Date().getFullYear()} Seif ElTohamy</p>
        </div>
        <div className="footer-links">
          <a href="mailto:seifeldinamreltohamy@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/seifeltohamy" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </footer>
  );
}
