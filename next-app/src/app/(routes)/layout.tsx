import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner"


const getPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Login ReadSoulAPP",
  description: "Welcome to ReadSoulAPP",
};

export default function RoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head />
      <body
        className={`${getPoppins.variable} antialiased flex flex-col h-full bg-background`}
      >
        <div className="flex-grow">
          <main className="w-full h-full max-w-7xl mx-auto">
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html >
  );
}
