import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/header";

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
            <Sidebar/>
            <Header/>
            <div className="flex flex-col bg-white w-full min-h-full ml-60 mt-20 p-10 shadow-lg">
              {children}
            </div>
          </div>
        </Theme>
        </body>
    </html>
  );
}
