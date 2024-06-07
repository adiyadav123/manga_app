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
      <script
        async="async"
        data-cfasync="false"
        src="//pl23502765.highcpmgate.com/108fb0849e665a8897f61751716b6c74/invoke.js"
      ></script>
      <div id="container-108fb0849e665a8897f61751716b6c74"></div>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
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
