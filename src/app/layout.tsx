import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyberwatts | Smart-Home Power Control",
  description:
    "Control your home from anywhere with Cyberwatts smart switching, scheduling, energy monitoring, and security alerts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
