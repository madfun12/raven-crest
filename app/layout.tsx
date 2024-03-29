import type { Metadata } from "next";
import { Sassy_Frass, Crimson_Text } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const sassyFrass = Sassy_Frass({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});
const crimsonText = Crimson_Text({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/eet3xfm.css"
                ></link>
            </Head>
            <body className={crimsonText.className}>
                <a
                    href="/"
                    className={`text-center block font-bold text-6xl py-4 ${sassyFrass.className}`}
                >
                    Raven Crest
                </a>
                {children}
            </body>
        </html>
    );
}
