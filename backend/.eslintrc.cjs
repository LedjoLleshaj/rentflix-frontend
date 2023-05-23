module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'no-console': 'off',
    },
}
