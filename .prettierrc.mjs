/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
    printWidth: 100,
    singleQuote: true,
    bracketSameLine: false,
    singleAttributePerLine: true,
    trailingComma: 'es5',
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
    importOrder: [
        '.*styles.css$',
        '',
        '^react$',
        '^next$',
        '^next/.*$',
        '<BUILTIN_MODULES>',
        '<THIRD_PARTY_MODULES>',
        '^@/.*$',
        '^../(?!.*.css$).*$',
        '^./(?!.*.css$).*$',
        '\\.css$',
    ],
};

export default config;
