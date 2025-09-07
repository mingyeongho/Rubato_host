import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Provider from "@/Provider";
import Navigation from "@/components/navigation";
import { SidebarInset } from "@/components/ui/sidebar";
import Header from "@/components/header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Provider>
        <Navigation />
        <SidebarInset>
          <Header />
          <Outlet />
        </SidebarInset>
      </Provider>
    </React.Fragment>
  );
}
