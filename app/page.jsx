import LandingPage from '@/components/LandingPage';

export const metadata = { title: 'Cella AI Model Atlas', alternates: { canonical: '/' } };

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Qatrix Infotech Pvt. Ltd.',
  url: 'https://www.qatrixinfotech.com/',
  email: 'qatrixinfotech@gmail.com',
  areaServed: 'Worldwide',
  knowsAbout: ['Artificial intelligence', 'Software development', 'Cloud architecture', 'Automation', 'Digital growth'],
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><LandingPage /></>;
}
