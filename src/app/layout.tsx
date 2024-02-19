import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "dashboard app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Theme>
            <div className="flex min-h-screen w-screen bg-gray-50 ">
              <Sidebar />
              <Header />
              <div className="m-4 ml-[272px] mt-20 flex min-h-screen w-full flex-col bg-none ">
                {children}
              </div>
              <Toaster />
            </div>
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
