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
      <body className="">
        {children}
      </body>
    </html>
  );
}