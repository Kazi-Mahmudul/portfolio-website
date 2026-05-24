import { ArrowRight, Award, BrainCircuit, Building2, Network, ServerCog } from 'lucide-react';
import Link from 'next/link';
import { publications } from '@/data';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import FeaturedProjects from '@/components/sections/FeaturedProjects';


const achievements = [
  'Delivered production AI solutions for international clients across sales automation, fraud analysis, and retrieval systems.',
  'Shipped backend-first systems with observability, retry-safe workflow design, and deployment readiness.',
  'Strong cross-functional communication from scoping through implementation, testing, and rollout.',
];

export default function Home() {
  return (
    <div className="space-y-0 pb-4">
      <HeroSection />
      <SkillsSection />
      <ExperienceTimeline />
      <FeaturedProjects />

      <section className="section-shell bg-muted/35">
        <div className="content-wrap">
          <div className="mb-8 text-center">
            <p className="section-kicker">Research</p>
            <h2 className="section-heading">Publications</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Peer-reviewed research demonstrating strong fundamentals in deep learning and applied AI.
            </p>
          </div>

          <div className="space-y-4">
            {publications.map((pub) => (
              <article key={pub.id} className="panel p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground">{pub.authors.join(', ')}</p>
                    <p className="text-sm text-muted-foreground">{pub.venue}</p>
                    <p className="text-sm text-muted-foreground">{pub.date}</p>
                    {pub.url && (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                        View Publication
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

