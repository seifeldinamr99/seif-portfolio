import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsPage() {
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
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
