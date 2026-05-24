import Link from 'next/link';
import { ArrowRight, Code2, ExternalLink } from 'lucide-react';
import { projects } from '@/data';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="section-shell">
      <div className="content-wrap space-y-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div>
            <p className="section-kicker">Case Studies</p>
            <h2 className="section-heading">Production AI Projects</h2>
          </div>
          <p className="mx-auto max-w-3xl text-muted-foreground md:mx-0">
            Selected projects focused on LLM infrastructure, agentic automation, and backend AI systems with measurable technical and business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.id} className="panel p-6 transition-all hover:-translate-y-1 hover:border-primary/40 md:p-7">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border px-2 py-1">{project.role ?? 'AI Engineer'}</span>
                <span className="rounded-full border border-border px-2 py-1">{project.duration ?? 'Production Project'}</span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {project.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-border/60 bg-background/70 p-3">
                    <p className="text-xl font-semibold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 5).map((tag) => (
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
                  Technical Breakdown
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

        <div className="text-center md:text-left">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View Full Project Portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

