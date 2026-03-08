import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import meImage from "../assets/Me.png";

export function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <main className="page home-page">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <h1>Hi, I’m Seif</h1>
            <p className="hero-subtitle">
              Computer Science student building practical full-stack systems for finance,
              analytics, and advertising automation.
            </p>
            <p>
              I create clean, usable interfaces and reliable backend services that solve
              real business problems. Explore my work below.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="button button--primary">
                View my work
              </Link>
              <Link to="/about" className="button button--outline">
                About me
              </Link>
            </div>
          </div>
          <div className="hero-image" aria-hidden="true">
            <img src={meImage} alt="Seif ElTohamy" className="hero-photo" />
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <header className="section-header">
            <h2>Featured projects</h2>
            <p>Recent work that highlights systems, automation, and data-driven solutions.</p>
          </header>
          <div className="grid grid--3">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} onView={() => {}} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/projects" className="button button--secondary">
              See all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg--alt">
        <div className="container">
          <header className="section-header">
            <h2>Skills & technologies</h2>
            <p>Core technologies I use to build fast, maintainable solutions.</p>
          </header>
          <div className="grid grid--4">
            {[
              "React",
              "TypeScript",
              "Python",
              "Django",
              "FastAPI",
              "Tailwind CSS",
              "PostgreSQL",
              "Docker",
            ].map((tech) => (
              <div key={tech} className="skill-card">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
