import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fyno",
  description: "Plan your trips with Fyno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sf-pro">{children}</body>
    </html>
  );
}
