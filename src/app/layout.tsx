import type { Metadata } from "next";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {children}
        <Script id="tawk-to-chat" strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            Tawk_API.customStyle = {
              visibility: {
                desktop: {
                  position: "br",
                  xOffset: 100,
                  yOffset: 100
                },
                mobile: {
                  position: "br",
                  xOffset: 50,
                  yOffset: 50
                }
              }
            };

            (function () {
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/6a9ea231d0128c3449822f52/1k1tqj573";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
