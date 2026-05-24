import Link from 'next/link';
import { ArrowRight, Briefcase, Download, ExternalLink, FileText, GraduationCap, Layers } from 'lucide-react';

const resumePdfPath = '/Kazi_Mahmudul_Hasan_CV.pdf';

const resumeHighlights = [
  {
    icon: Briefcase,
    title: 'AI Engineering Experience',
    detail: 'Production delivery of LLM applications, automation systems, and backend AI pipelines for international clients.',
  },
  {
    icon: Layers,
    title: 'Technical Stack',
    detail: 'LangChain, LangGraph, FastAPI, Neo4j, PostgreSQL, Docker, GCP, Redis, and workflow orchestration tools.',
  },
  {
    icon: GraduationCap,
    title: 'Research Foundation',
    detail: 'IEEE-published applied deep learning work with strong fundamentals in model development and experimentation.',
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-shell pb-8">
        <div className="content-wrap text-center">
          <p className="section-kicker">Resume</p>
          <h1 className="section-heading">Professional Resume</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            A concise summary of AI engineering experience, technical capabilities, and delivery impact for recruiter and hiring manager review.
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {resumeHighlights.map((item) => (
              <article key={item.title} className="panel p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>

          <aside className="panel h-fit p-6 md:p-7">
            <h2 className="text-xl font-semibold">Resume Access</h2>
            <p className="mt-2 text-sm text-muted-foreground">You can view or download my latest CV directly from here.</p>

            <div className="mt-5 space-y-3">
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                View CV
              </a>
              <a
                href={resumePdfPath}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
              >
                <FileText className="h-4 w-4" />
                Review Project Case Studies
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
              >
                <ArrowRight className="h-4 w-4" />
                Contact for Hiring Discussion
              </Link>
            </div>

            <div className="mt-5 rounded-xl border border-border/70 bg-background/60 p-4 text-sm text-muted-foreground">
              <p className="inline-flex items-center gap-1 font-medium text-foreground">
                <Download className="h-4 w-4 text-primary" />
                File Name
              </p>
              <p className="mt-1">Kazi_Mahmudul_Hasan_CV.pdf</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap">
          <div className="panel overflow-hidden p-2 md:p-3">
            <iframe
              src={resumePdfPath}
              title="Kazi Mahmudul Hasan CV"
              className="h-[75vh] w-full rounded-lg border border-border/70 bg-background"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
