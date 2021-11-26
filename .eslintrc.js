module.exports = {
  ignorePatterns: [
    ".eslintrc.js",
    "*.spec.tsx",
    "*.spec.ts",
    "**/stories/**", // Tests and stories
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-shadow": "error",
    "prefer-const": "warn",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": [2, { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": [1],
  },
};
