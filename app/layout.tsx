import type { Metadata } from "next";
import SearchDialog from "@/components/SearchDialog";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AppHeader from "@/components/AppHeader";
import { chapters } from "@/lib/chapters";
import "./globals.css";

export const metadata: Metadata = {
  title: "frontend internals — SDE-2 Interview Guide",
  description: "Comprehensive guide to frontend engineering internals for SDE-2 interviews.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <AppSidebar className="border-r border-sidebar-border" />
            <SidebarInset>
              <AppHeader />
              <main className="flex-1 min-w-0 min-h-screen">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
          <SearchDialog chapters={chapters} />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
