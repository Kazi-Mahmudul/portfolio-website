import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BrainCircuit, Code2, ExternalLink, Layers, Rocket, ShieldCheck, Wrench } from 'lucide-react';
import { projects } from '@/data';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  const scope = project.scope ?? [];
  const architecture = project.architecture ?? [];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-shell pb-8">
        <div className="content-wrap">
          <Link href="/projects" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="panel p-7 md:p-9">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full border border-border px-2 py-1">{project.role ?? 'AI Engineer'}</span>
              <span className="rounded-full border border-border px-2 py-1">{project.duration ?? 'Production Project'}</span>
              {scope.map((scopeItem) => (
                <span key={scopeItem} className="rounded-full border border-border px-2 py-1">
                  {scopeItem}
                </span>
              ))}
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{project.title}</h1>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">{project.longDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Code2 className="h-4 w-4" />
                View Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="metric-tile p-5">
              <p className="text-2xl font-semibold text-primary">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap grid gap-6 lg:grid-cols-2">
          <article className="panel p-6 md:p-7">
            <h2 className="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
              <Wrench className="h-5 w-5 text-primary" />
              Problem
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
          </article>

          <article className="panel p-6 md:p-7">
            <h2 className="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
              <BrainCircuit className="h-5 w-5 text-primary" />
              Solution
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap grid gap-6 lg:grid-cols-2">
          <article className="panel p-6 md:p-7">
            <h2 className="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-primary" />
              Architecture Highlights
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {architecture.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
              {architecture.length === 0 && (
                <li className="text-muted-foreground">Architecture details will be added soon.</li>
              )}
            </ul>
          </article>

          <article className="panel p-6 md:p-7">
            <h2 className="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Technical Challenges
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {project.technicalChallenges.map((challenge) => (
                <li key={challenge} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap grid gap-6 lg:grid-cols-2">
          <article className="panel p-6 md:p-7">
            <h2 className="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
              <BrainCircuit className="h-5 w-5 text-primary" />
              AI Pipeline
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.aiMlPipeline}</p>
          </article>

          <article className="panel p-6 md:p-7">
            <h2 className="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
              <Rocket className="h-5 w-5 text-primary" />
              Deployment and Operations
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.deployment}</p>
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap panel p-6 md:p-7">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="mt-5 space-y-5">
            {project.techStack.map((category) => (
              <div key={category.category}>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span key={tech} className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

