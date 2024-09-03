import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                typing: "blink-caret 0.75s step-end infinite",
                appear: "appear 1.5s ease-in",
            },
            keyframes: {
                "blink-caret": {
                    "0%": {
                        "border-color": "transparent",
                    },
                    "50%": {
                        "border-color": "rgb(0, 0, 0)",
                    },
                },
                appear: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%:": {
                        opacity: "1",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
