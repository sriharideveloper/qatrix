import { Instrument_Serif, Poppins } from 'next/font/google';
import './globals.scss';
import SmoothScroll from '@/components/SmoothScroll';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';

const display = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-display' });
const body = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-body' });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.qatrixinfotech.com'),
  title: { default: 'Cella AI Model Atlas — Qatrix Infotech', template: '%s — Qatrix Infotech' },
  description: 'Explore and compare the Cella AI model family by Qatrix Infotech. Find the right model for your work, device, and ambitions.',
  keywords: ['Cella AI', 'Qatrix Infotech', 'AI model comparison', 'local AI models', 'AI software India'],
  alternates: { canonical: '/' },
  openGraph: { title: 'One family. Seven ways to think.', description: 'Meet and compare the Cella AI model family by Qatrix Infotech.', type: 'website', locale: 'en_IN', siteName: 'Qatrix Infotech', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Cella AI Model Atlas', description: 'One family. Seven ways to think.', images: ['/og.png'] },
  robots: { index: true, follow: true },
  icons: { icon: '/qatrix-logo.png', shortcut: '/qatrix-logo.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SmoothScroll>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
