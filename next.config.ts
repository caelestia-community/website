import type { NextConfig } from 'next';
import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/landing',
                permanent: false,
                has: [
                    {
                        type: 'host',
                        value: 'caelestiashell.com',
                    },
                ],
            },
        ];
    },
    pageExtensions: ['ts', 'tsx', 'mdx'],
    env: {
        BASE_URL: process.env.BASE_URL,
        DISCORD_INVITE: process.env.DISCORD_INVITE,
        DOTS_REPO: process.env.DOTS_REPO,
        SHELL_REPO: process.env.SHELL_REPO,
        CLI_REPO: process.env.CLI_REPO,
    },
    outputFileTracingRoot: path.join(__dirname),
};

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

export default withNextIntl(nextConfig);
