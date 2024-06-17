import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MangaFam",
  description: "Read manga online for free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-2370912465550854"
        ></meta>
      </head>
      <body className={inter.className}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2370912465550854"
          crossorigin="anonymous"
        ></script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystemd 
          disableTransitionOnChange
        >
          <ClerkProvider>{children}</ClerkProvider>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
