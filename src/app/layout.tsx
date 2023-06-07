import Head from "next/head";

import { metaData } from "@/config/meta";
import { robotoMono } from "@/config/font";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Head>
      <body className={`${robotoMono.className}`}>{children}</body>
    </html>
  );
}
