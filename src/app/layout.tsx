import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyberwatt | Smart-Home Power Control",
  description:
    "Own every switch, schedule, and power moment with Cyberwatt smart-home control.",
  icons: {
    icon: "/cyberwatt-logo.png",
    apple: "/cyberwatt-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
