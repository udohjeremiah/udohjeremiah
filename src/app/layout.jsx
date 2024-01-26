import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import ThemeProvider from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { ScrollArea } from "@/components/ui/scroll-area";
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
          <div
            className={cn(
              "flex-1",
              "lg:grid lg:grid-cols-[240px_minmax(0,1fr)]",
            )}
          >
            <div
              className={cn(
                "fixed top-14 hidden h-[calc(100vh-3.5rem)] w-60 border-r bg-muted",
                "lg:sticky lg:block",
              )}
            >
              <ScrollArea className="h-full py-4">
                <Navigation />
              </ScrollArea>
            </div>
            <div className="w-full">
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
