"use client";

import { AppHeader } from "@/components/app-header";

export interface AppProps {
  children: React.ReactNode;
}

export const App = ({ children }: AppProps) => {
  return (
    <div className="min-h-screen w-screen bg-[#F0F2F6] flex flex-col">
      <AppHeader />
      <div className="w-full flex-1">{children}</div>
    </div>
  );
};
