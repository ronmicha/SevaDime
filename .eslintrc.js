module.exports = {
    env: {
        browser: true,
        es6: true,
        "jest/globals": true
    },
    extends: [
        "google",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/all"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    rules: {
        "max-len": ["error", { "code": 120, "tabWidth": 4 }],
        // off
        "jest/prefer-expect-assertions": "off",
        "object-curly-spacing": "off",
        "require-jsdoc": "off",
        // warning

        // error
        "@typescript-eslint/explicit-function-return-type": "error",
        "no-extra-semi": "error",
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
    },
    overrides: [
        {
            files: ["react-app-env.d.ts"],
            rules: {
                "spaced-comment": "off"
            }
        }
    ]
};