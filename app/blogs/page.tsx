import Link from 'next/link';
import { ArrowRight, NotebookPen } from 'lucide-react';

const upcomingTopics = [
  'Designing agentic RAG systems for production reliability',
  'Latency and cost optimization strategies for LLM applications',
  'Building resilient automation pipelines with AI + backend services',
  'Practical architecture decisions for retrieval and orchestration layers',
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-shell pb-8">
        <div className="content-wrap text-center">
          <p className="section-kicker">Insights</p>
          <h1 className="section-heading">Engineering Notes and Technical Writing</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Practical write-ups from building production AI systems, with a focus on architecture decisions, implementation details, and lessons from real deployments.
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap panel p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <NotebookPen className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">Upcoming Topics</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {upcomingTopics.map((topic) => (
                  <li key={topic} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-muted-foreground">
                In the meantime, you can review project breakdowns and engineering outcomes in the portfolio.
              </p>
              <Link href="/projects" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Explore Project Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

