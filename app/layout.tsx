import { robotoMono } from "@/config/font";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className}`}>{children}</body>
    </html>
  );
}
