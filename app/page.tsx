import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import SVG from 'react-inlinesvg';

export default async function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Caelestia',
    url: 'https://caelestiashell.com',
  };

  const t = await getTranslations();

  return (
    <>
      <div className="content-frame">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />

        <SVG
          src="/logo.svg"
          className="w-[128px]"
        />
        <h1>{t('Common.caelestiaShell', { caelestia: 'Caelestia' })}</h1>
        <div className="links">
          <Link
            href={process.env.DOTS_REPO ?? ''}
            target="_blank"
          >
            <span>{t('Common.dots')}</span>
          </Link>
          <Link
            href={process.env.SHELL_REPO ?? ''}
            target="_blank"
          >
            <span>{t('Common.shell')}</span>
          </Link>
          <Link
            href={process.env.CLI_REPO ?? ''}
            target="_blank"
          >
            <span>{t('Common.cli')}</span>
          </Link>
        </div>
        <Link
          href={process.env.DISCORD_INVITE ?? ''}
          className="join-discord"
        >
          {t('Common.joinDiscord')}
        </Link>
        <div className="surface-container">
          <strong>{t('Common.liveTitle')}</strong>
          <p>{t.rich('Common.liveDesc', {
            clickHere: (chunks) => <a href="https://packages.caelestiashell.com/iso"><span>{chunks}</span></a>
          })}</p>
        </div>
      </div>
    </>
  );
}
