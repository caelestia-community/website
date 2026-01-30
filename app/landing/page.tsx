import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import SVG from 'react-inlinesvg';

export default async function Landing() {
  const t = await getTranslations();
  return (
    <div className="content-frame">
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
    </div>
  );
}
