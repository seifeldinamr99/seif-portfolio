import { NavLink } from "react-router-dom";

export function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          Seif ElTohamy
        </NavLink>
        <nav className="nav">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/resume" className={linkClass}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
