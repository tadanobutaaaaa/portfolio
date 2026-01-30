import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tadanobutaaaaa`s Portfolio",
  description: "ただのぶたぁのポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}