import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <>
      <div className="appFrame h-[100vh]">
        <main className="notFound w-full flex-col items-center justify-center">
          <h2>{t('NotFound.oops')}</h2>
          <div className="subtitle">{t('NotFound.pageNotFound')}</div>
          <div className="content">{t('NotFound.content')}</div>
        </main>
      </div>
    </>
  );
}
