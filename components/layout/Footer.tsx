import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="panel p-8 md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Kazi Mahmudul Hasan</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                AI Engineer focused on shipping LLM systems, automation pipelines, and resilient backend AI services for real-world production environments.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/projects" className="text-muted-foreground transition-colors hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="text-muted-foreground transition-colors hover:text-primary">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="text-muted-foreground transition-colors hover:text-primary">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Recruiter Actions</h3>
              <div className="flex flex-col gap-2">
                {socialLinks
                  .filter((link) => link.display)
                  .map((link) => {
                    const sharedClass =
                      'inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary';

                    if (link.url.startsWith('/')) {
                      return (
                        <Link key={link.name} href={link.url} className={sharedClass}>
                          {link.name}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      );
                    }

                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={sharedClass}
                        aria-label={link.name}
                      >
                        {link.name}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-border/70 pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} Kazi Mahmudul Hasan. </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

