import { Brain, Cloud, Code, Database, Layers, ShieldCheck } from 'lucide-react';
import { skills } from '@/data';

const iconMap = {
  brain: Brain,
  code: Code,
  database: Database,
  layers: Layers,
  cloud: Cloud,
};

const engineeringPrinciples = [
  'Production-first implementation with observability and fallback paths',
  'Data-aware architecture balancing quality, latency, and cost',
  'Clear API boundaries for AI services, orchestration, and client layers',
  'Deployment and iteration loops optimized for rapid business feedback',
];

export default function SkillsSection() {
  return (
    <section className="section-shell">
      <div className="content-wrap space-y-10">
        <div className="text-center">
          <p className="section-kicker">Technical Stack</p>
          <h2 className="section-heading">AI Engineering Capabilities</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            End-to-end strength across LLM application development, backend architecture, retrieval systems, and production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Code;
            return (
              <div key={category.category} className="panel p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-content-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="panel grid gap-6 p-6 md:grid-cols-[auto_1fr] md:p-8">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">How I Engineer AI Systems</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {engineeringPrinciples.map((principle) => (
                <li key={principle} className="flex gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

