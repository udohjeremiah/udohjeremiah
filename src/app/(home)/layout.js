import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import ThemeProvider from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        "touch-manipulation font-sans antialiased [text-rendering:optimizelegibility]",
      )}
    >
      <body className="min-h-[100dvh] max-w-[100dvw]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div>
            <main className="lg:ml-60">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
