import type { Metadata } from 'next';
import './globals.css';

const siteUrl = new URL('https://zju-pil-lab.github.io/');

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'PIL Lab · Probabilistic Inference and Learning',
    template: '%s · PIL Lab',
  },
  description: 'Probabilistic Inference and Learning Lab at Zhejiang University. Research in probabilistic modeling, generative models, inverse problems, diffusion language models, and agents.',
  alternates: { canonical: siteUrl },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'PIL Lab · Probabilistic Inference and Learning',
    description: 'Foundations and algorithms for probabilistic inference, generative modeling, and learning.',
    siteName: 'PIL Lab',
  },
  twitter: {
    card: 'summary',
    title: 'PIL Lab · Probabilistic Inference and Learning',
    description: 'Foundations and algorithms for probabilistic inference, generative modeling, and learning.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
