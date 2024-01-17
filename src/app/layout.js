import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import ThemeProvider from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Toaster } from "@/components/ui/sonner";

export const viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
      <body className="flex min-h-[100dvh] max-w-[100dvw] flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="relative flex-1">
            <div
              className={cn(
                "absolute bottom-0 left-0 top-0 hidden w-60 overflow-y-auto border-r bg-muted py-2",
                "lg:block",
              )}
            >
              <Navigation />
            </div>
            <div className="lg:ml-60">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
