import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Code2, FileText, Handshake, Mail, MessageSquare } from 'lucide-react';

const contactChannels = [
  {
    title: 'Email',
    value: 'km.hasan.tech@gmail.com',
    href: 'mailto:km.hasan.tech@gmail.com',
    icon: Mail,
    detail: 'Best for role opportunities, collaboration, and project discussions.',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/kazi-mahmudul-hasan',
    href: 'https://linkedin.com/in/kazi-mahmudul-hasan',
    icon: Handshake,
    detail: 'Professional updates and recruiter communication.',
  },
  {
    title: 'GitHub',
    value: 'github.com/Kazi-Mahmudul',
    href: 'https://github.com/Kazi-Mahmudul',
    icon: Code2,
    detail: 'Code samples, repositories, and technical build history.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-shell pb-8">
        <div className="content-wrap text-center">
          <p className="section-kicker">Contact</p>
          <h1 className="section-heading">Let&apos;s Build Impactful AI Products</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Open to remote international roles, cross-border consulting, and high-impact onsite opportunities in AI engineering.
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {contactChannels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="panel block p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">{channel.title}</h2>
                    <p className="text-sm text-primary">{channel.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{channel.detail}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <aside className="panel h-fit p-6 md:p-7">
            <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-xl border border-border/70">
              <Image
                src="https://i.ibb.co.com/V0zR3TMb/shared-image2.jpg"
                alt="Kazi Mahmudul Hasan"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold">Hiring Snapshot</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MessageSquare className="mt-0.5 h-4 w-4 text-primary" />
                Responds quickly for role and project-related discussions.
              </li>
              <li className="flex gap-2">
                <CalendarDays className="mt-0.5 h-4 w-4 text-primary" />
                Available for interviews and technical conversations.
              </li>
              <li className="flex gap-2">
                <FileText className="mt-0.5 h-4 w-4 text-primary" />
                Resume and detailed project case studies ready to share.
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-border/70 bg-background/60 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Location and Timezone</p>
              <p className="mt-1">Dhaka, Bangladesh (UTC+6)</p>
            </div>

            <Link
              href="/resume"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
