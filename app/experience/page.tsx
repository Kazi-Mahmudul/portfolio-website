import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { experience } from '@/data';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-shell pb-8">
        <div className="content-wrap text-center">
          <p className="section-kicker">Experience</p>
          <h1 className="section-heading">Professional AI Engineering Experience</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            From architecture to deployment, delivering AI systems and automation workflows for production environments and international stakeholders.
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap space-y-6">
          {experience.map((exp) => (
            <article key={exp.id} className="panel p-6 md:p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{exp.title}</h2>
                  <p className="mt-1 text-base font-medium text-primary">{exp.company}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                {exp.current && (
                  <span className="inline-flex items-center gap-1 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    Current
                  </span>
                )}
              </div>

              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {exp.description.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {exp.highlights.map((highlight) => (
                  <div key={highlight.label} className="rounded-lg border border-border/70 bg-background/60 p-3">
                    <p className="text-lg font-semibold text-primary">{highlight.value}</p>
                    <p className="text-xs text-muted-foreground">{highlight.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

