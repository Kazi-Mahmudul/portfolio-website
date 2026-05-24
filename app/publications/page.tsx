import { BookOpen, Calendar, ExternalLink } from 'lucide-react';
import { publications } from '@/data';

export default function PublicationsPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-shell pb-8">
        <div className="content-wrap text-center">
          <p className="section-kicker">Research</p>
          <h1 className="section-heading">Publications and Research Work</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Research contributions that strengthen practical engineering with academic rigor in machine learning and applied AI systems.
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="content-wrap space-y-5">
          {publications.map((pub) => (
            <article key={pub.id} className="panel p-6 md:p-7">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </span>

                <div className="flex-1 space-y-3">
                  <div>
                    <h2 className="text-xl font-semibold leading-snug">{pub.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{pub.authors.join(', ')}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {pub.date}
                    </span>
                    <span>{pub.venue}</span>
                  </div>

                  {pub.abstract && <p className="text-sm leading-relaxed text-muted-foreground">{pub.abstract}</p>}

                  <div className="flex flex-wrap gap-4 text-sm">
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                      >
                        View Publication
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        DOI: {pub.doi}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

