import Link from 'next/link';
import { ArrowRight, Code2, ExternalLink } from 'lucide-react';
import { projects } from '@/data';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-shell pb-8">
        <div className="content-wrap text-center">
          <p className="section-kicker">Portfolio</p>
          <h1 className="section-heading">AI Engineering Project Portfolio</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            End-to-end case studies covering architecture, engineering trade-offs, and measurable outcomes across LLM systems, automation platforms, and backend AI infrastructure.
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="panel p-6 transition-all hover:-translate-y-1 hover:border-primary/40 md:p-7">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border px-2 py-1">{project.role ?? 'AI Engineer'}</span>
                <span className="rounded-full border border-border px-2 py-1">{project.duration ?? 'Production Project'}</span>
                {project.featured && <span className="rounded-full bg-primary/10 px-2 py-1 font-semibold text-primary">Featured</span>}
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {project.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-border/70 bg-background/60 p-3">
                    <p className="text-lg font-semibold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Detailed Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

