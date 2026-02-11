import { Header } from '@/components/layout/header';

export default async function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Caelestia',
    url: 'https://caelestiashell.com',
  };

  return (
    <>
      <div className="app-frame">
        <Header />

        <main className="home">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
            }}
          />
        </main>
      </div>
    </>
  );
}
