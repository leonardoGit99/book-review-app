import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "../components/Footer";

const getPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Book Review App",
  description: "By <LFC />",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head />
      <body
        className={`${getPoppins.variable} antialiased flex flex-col min-h-screen bg-background`}
      >
        <main className="flex-grow pt-[5.75rem] w-full">
          <div className="max-w-6xl mx-auto">
            <Navbar />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
