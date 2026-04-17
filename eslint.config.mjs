import next from 'eslint-config-next';

export default [
    ...next.coreWebVitals,
    {
        ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    },
];                  