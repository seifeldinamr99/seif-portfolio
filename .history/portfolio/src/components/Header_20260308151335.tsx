import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          Seif ElTohamy
        </NavLink>

        <button
          className="mobile-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="hamburger" />
        </button>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
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
