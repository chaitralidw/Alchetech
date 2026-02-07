import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { ReadAloudButton } from "@/components/ui/ReadAloudButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pb-24 md:pb-20 lg:pb-12 overflow-auto w-full">
        {children}
      </main>
      <ReadAloudButton variant="floating" />
      <BottomNav />
    </div>
  );
}
