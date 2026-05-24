import type { Metadata } from 'next';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kazi Mahmudul Hasan - AI Engineer',
  description: 'AI Engineer building production LLM systems, agentic automation, and scalable backend AI infrastructure for real business outcomes.',
  keywords: ['AI Engineer', 'LLM Engineer', 'RAG', 'GraphRAG', 'Agentic AI', 'FastAPI', 'Python', 'Automation'],
  authors: [{ name: 'Kazi Mahmudul Hasan' }],
  openGraph: {
    title: 'Kazi Mahmudul Hasan - AI Engineer',
    description: 'AI Engineer building production LLM systems, agentic automation, and scalable backend AI infrastructure.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${mono.variable} font-sans`} suppressHydrationWarning>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
