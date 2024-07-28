import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoldenMed",
  description: "Med website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
