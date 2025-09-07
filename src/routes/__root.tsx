import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Provider from "@/Provider";
import Navigation from "@/components/navigation";
import { SidebarInset } from "@/components/ui/sidebar";
import Header from "@/components/header";
import { ErrorBoundary } from "react-error-boundary";

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
          {/* <div>
            <ErrorBoundary fallback={<div>Error</div>}>
              <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
              </Suspense>
            </ErrorBoundary>
          </div> */}
          <ErrorBoundary fallback={<div>Error</div>}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </React.Suspense>
          </ErrorBoundary>
        </SidebarInset>
      </Provider>
    </React.Fragment>
  );
}
