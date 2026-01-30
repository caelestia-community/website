import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    // Static for now, we'll change this later
    const locale = 'en-US';

    return {
        locale,
        messages: (await import(`@/i18n/${locale}.json`)).default,
    };
});
