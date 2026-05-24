import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code2, FileText, Handshake, Mail, MapPin } from 'lucide-react';

const profileSignals = [
  'Production LLM Systems',
  'Agentic RAG Architecture',
  'Backend AI Infrastructure',
  'Automation at Scale',
];

const quickStats = [
  { label: 'Production Systems', value: '3+', animationClass: '' },
  { label: 'Leads Automated', value: '30K+', animationClass: 'fade-in-delay-1' },
  { label: 'Core Region', value: 'US/UK Clients', animationClass: 'fade-in-delay-2' },
  { label: 'Work Style', value: 'Remote Global', animationClass: 'fade-in-delay-3' },
];

export default function HeroSection() {
  return (
    <section className="section-shell pt-28 md:pt-32">
      <div className="content-wrap">
        <div className="hero-grid animated-border fade-in-up">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="space-y-7">

              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  Kazi Mahmudul Hasan
                </h1>
                <p className="text-lg font-medium text-primary md:text-xl">AI Engineer</p>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  I design and ship production AI systems that solve real business problems.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {profileSignals.map((signal) => (
                  <span key={signal} className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {signal}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Explore Case Studies
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                >
                  <FileText className="h-4 w-4" />
                  View Resume
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <a href="https://github.com/Kazi-Mahmudul" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                  <Code2 className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/kazi-mahmudul-hasan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                  <Handshake className="h-4 w-4" />
                  LinkedIn
                </a>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Dhaka, Bangladesh (UTC+6)
                </span>
              </div>
            </div>

            <div className="grid gap-4 self-start md:grid-cols-2 lg:grid-cols-1">
              <div className="panel overflow-hidden p-0">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="https://i.ibb.co.com/V0zR3TMb/shared-image2.jpg"
                    alt="Kazi Mahmudul Hasan"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
