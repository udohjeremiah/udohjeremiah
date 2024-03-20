// Styles
import "@/styles/globals.css";

// Fonts
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// Dependencies
import { Toaster } from "@/components/ui/sonner";

// Components
import { TooltipProvider } from "@/components/ui/tooltip";
import DesktopNav from "@/components/DesktopNav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/providers/ThemeProvider";

// Lib
import { cn } from "@/lib/utils";

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
        "touch-manipulation scroll-pt-20 font-sans antialiased [text-rendering:optimizelegibility]",
      )}
    >
      <body className="flex min-h-[100dvh] max-w-[100dvw] flex-col overflow-x-hidden bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <Header />
            <div className={cn("flex-1", "lg:flex")}>
              <DesktopNav />
              <div className="w-full">
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
