import type React from "react";
import { SidebarProvider } from "./components/ui/sidebar";
import { ThemeProvider } from "./provider/theme-provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 64)",
              "--sidebar-width-icon": "3rem",
              "--header-height": "calc(var(--spacing) * 14)",
            } as React.CSSProperties
          }
        >
          {children}
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
};

export default Provider;
