import { Linter } from "eslint";
import reactPlugin from "eslint-plugin-react";
import recommendedReact from "eslint-plugin-react/configs/recommended.js";
import babelParser from "@babel/eslint-parser";

/** @type {Linter.FlatConfig} */
const config = [
    {
        languageOptions: {
            ecmaVersion: 12,
            sourceType: "module",
            parser: babelParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                requireConfigFile: false,
                babelOptions: {
                    plugins: [
                        "@babel/plugin-syntax-jsx",
                    ],
                },
            },
            globals: {
                document: "readonly",
                navigator: "readonly",
                window: "readonly",
            },
        },
        plugins: {
            react: reactPlugin,
        },
        ...recommendedReact, // Spread the recommended React config directly
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            semi: ["error", "always"],
            quotes: ["error", "double"],
            // Add your custom rules here
        },
    },
];

export default config;