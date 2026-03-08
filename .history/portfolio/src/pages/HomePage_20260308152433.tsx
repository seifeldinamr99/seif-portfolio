import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Modal } from "../components/Modal";
import meImage from "../assets/Me.png";

export function HomePage() {
  const featured = projects.slice(0, 3);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const openProject = (id: string) => setActiveProjectId(id);
  const closeProject = () => setActiveProjectId(null);

  const activeProject = activeProjectId ? projects.find((p) => p.id === activeProjectId) : null;

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
              <ProjectCard key={project.id} project={project} onView={openProject} />
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

      {activeProject && (
        <Modal open={Boolean(activeProject)} onClose={closeProject} title={activeProject.title}>
          {activeProject.subtitle && <p className="modal-subtitle">{activeProject.subtitle}</p>}
          <p className="modal-paragraph">{activeProject.description}</p>
          <p className="modal-paragraph">
            <strong>Key role:</strong> {activeProject.role}
          </p>
          {activeProject.tags?.length ? (
            <div className="modal-tags">
              <strong>Tags:</strong>
              <div className="tag-grid">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {activeProject.tech?.length ? (
            <div className="modal-tags">
              <strong>Tech:</strong>
              <div className="tag-grid">
                {activeProject.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          <div className="modal-actions">
            {activeProject.repo && (
              <a href={activeProject.repo} target="_blank" rel="noreferrer" className="button button--outline">
                View repo
              </a>
            )}
          </div>
        </Modal>
      )}
    </main>
  );
}
