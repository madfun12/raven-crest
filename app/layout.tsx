import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const plexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravencrest",
  description: "Truth will set you free",
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

      <body className={plexMono.className}>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #fff",
              padding: "16px",
              color: "#fff",
              backgroundColor: "#000",
            },
          }}
        />
        <a href="/" className="block p-4 underline">
          home
        </a>
        {children}
      </body>
    </html>
  );
}
