import type { Project } from "../data/projects";

type Props = {
  project: Project;
  onView?: (id: string) => void;
};

export function ProjectCard({ project, onView }: Props) {
  return (
    <article className="card project-card">
      <header>
        <h3>{project.title}</h3>
        {project.subtitle && <p className="card-subtitle">{project.subtitle}</p>}
      </header>
      <p className="card-description">{project.description}</p>
      <div className="card-meta">
        <div className="card-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-links">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="button button--outline">
              View repo
            </a>
          )}
          {onView && (
            <button className="button" onClick={() => onView(project.id)}>
              Learn more
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
