import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/commons/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "/manifest.json",
};

const cabinetGrotesk = localFont({
  variable: "--font-cabinet",
  src: [
    {
      path: "../../public/fonts/CabinetGrotesk-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Light.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Bold.otf",
      weight: "600",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabinetGrotesk.className} min-h-screen bg-white`}>
        <div className="flex h-screen">
          <div className="fixed top-0 left-0 w-[20%] h-full flex flex-col justify-center items-center ">
            <Navbar />
          </div>

          <div className="ml-[20%] w-[80%] h-screen overflow-y-scroll">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
