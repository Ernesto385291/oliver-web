import React from "react";

import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

import { QueryContext } from "./queryContext";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fontSans.variable}`}>
      <QueryContext>
        <ClerkProvider>
          <body>
            <div className="min-h-screen w-screen bg-[#F0F2F6] flex flex-col">
              <div className="w-full flex-1">{children}</div>
            </div>
          </body>
        </ClerkProvider>
      </QueryContext>
    </html>
  );
}