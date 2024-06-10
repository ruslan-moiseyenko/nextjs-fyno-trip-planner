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
      <body className="box-content font-sf-pro" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
