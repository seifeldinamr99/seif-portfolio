import { useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Modal } from "../components/Modal";

export function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const openProject = (id: string) => setActiveProjectId(id);
  const closeProject = () => setActiveProjectId(null);

  const activeProject = activeProjectId ? projects.find((p) => p.id === activeProjectId) : null;

  return (
    <main className="page projects-page">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h1>Projects</h1>
            <p>Highlights of my work across full-stack applications, analytics tools, and automation systems.</p>
          </header>
          <div className="grid grid--3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onView={openProject} />
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
