import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/Header";

// 1. Initialize the font with your desired configuration
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // 2. Inject the font's CSS variable into the html tag
      className={`${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      {/* 3. Add `font-sans` to apply the font globally */}
      <body className="font-sans min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          
          {/* Main content with padding to account for fixed header */}
          <main className="">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}