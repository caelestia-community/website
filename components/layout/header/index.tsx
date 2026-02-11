import { getTranslations } from 'next-intl/server';
import styles from './header.module.scss';
import SVG from 'react-inlinesvg';
import Link from 'next/link';

export const Header = async () => {
  const t = await getTranslations();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <SVG src="/logo.svg" />
        <span>Caelestia</span>
      </Link>
      <div className={styles.actions}>
        <Link href="/get-started">{t('Common.getStarted')}</Link>
      </div>
    </header>
  )
}
