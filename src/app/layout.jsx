import Navbar from "@/components/NavBar";

import { tw } from "@/lib/utils";

import "./globals.css";

const name = "Udoh Jeremiah";

export const metadata = {
  applicationName: name,
  authors: [
    {
      name,
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  ],
  creator: name,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: name,
    locale: "en_GB",
  },
  publisher: name,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={tw(
          "min-h-screen font-system antialiased",
          "bg-white",
          "selection:bg-green-100",
          "dark:bg-neutral-950 dark:selection:bg-green-900",
        )}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
