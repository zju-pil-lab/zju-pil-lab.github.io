import type { Metadata } from 'next';
import './globals.css';

const siteUrl = new URL('https://zju-pil-lab.github.io/');

const themeScript = `
  (() => {
    const storageKey = 'pil-color-theme';
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const getSavedTheme = () => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        return saved === 'light' || saved === 'dark' ? saved : null;
      } catch {
        return null;
      }
    };
    const applyTheme = () => {
      const theme = getSavedTheme() ?? (media.matches ? 'dark' : 'light');
      root.dataset.theme = theme;
      root.style.colorScheme = theme;
    };
    applyTheme();
    media.addEventListener('change', () => {
      if (!getSavedTheme()) applyTheme();
    });
    window.addEventListener('storage', (event) => {
      if (event.key === storageKey) applyTheme();
    });
  })();
`;

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
