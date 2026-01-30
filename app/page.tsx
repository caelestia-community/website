export default async function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Caelestia',
    url: 'https://caelestiashell.com',
  };

  return (
    <>
      <div className="appFrame">
        <main className="home w-full">
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
