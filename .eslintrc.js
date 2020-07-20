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
        // off
        "jest/prefer-expect-assertions": "off",
        "linebreak-style": "off",
        "no-unused-vars": "off",
        "require-jsdoc": "off",
        // error
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "arrow-spacing": "error",
        "indent": ["error", 3],
        "max-len": ["error", { "code": 140, "tabWidth": 4 }],
        "no-extra-semi": "error",
        "object-curly-spacing": ["error", "always"],
        "react/jsx-space-before-closing": ["error", "always"],
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "semi": ["error", "always"],
        "space-infix-ops": "error",
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