import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Sidebar from "./components/sidebar/Sidebar";

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
          <div className="flex h-screen w-full bg-gray-100">
            <Sidebar/>
            <div className="flex flex-col bg-white w-full h-full ml-64 p-4">
              {children}
            </div>
          </div>
        </Theme>
        </body>
    </html>
  );
}
