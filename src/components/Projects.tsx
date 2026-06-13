import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <p className="font-mono text-sm text-accent mb-2">$ ls /projects/</p>
        <h2 className="text-2xl font-mono text-white mb-10">Proyectos</h2>
        <div className="space-y-10">
          {projects.map((project, i) => (
            <article key={project.title}>
              {i > 0 && <hr className="border-line mb-10" />}
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-[15px] text-muted leading-relaxed mb-3">
                {project.description}
              </p>
              <p className="font-mono text-sm text-muted mb-4">
                <span className="text-accent">$</span> tech:{' '}
                {project.tech.join(', ')}
              </p>
              <div className="flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted border-b border-transparent hover:text-white hover:border-white transition-colors"
                  >
                    github →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted border-b border-transparent hover:text-accent hover:border-accent transition-colors"
                  >
                    demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
