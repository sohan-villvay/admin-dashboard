import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "dashboard app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <div className="flex min-h-screen max-h-screen w-screen bg-white ">
            <Sidebar />
            <Header />
            <div className="flex flex-col bg-white w-full min-h-screen ml-64 m-4 mt-20 rounded-xl p-10 shadow-[rgba(0.1,0,0,0.1)_0px_0px_7px_0.3px]">
              {children}
            </div>
            <Toaster />
          </div>
        </Theme>
      </body>
    </html>
  );
}
