import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SidebarInset } from "./components/ui/sidebar";
import Provider from "./Provider";
import Header from "./components/header";
import Navigation from "./components/navigation";

const Reviews = React.lazy(() => import("remote/reviews"));

function App() {
  return (
    <>
      <Provider>
        <Navigation />
        <SidebarInset>
          <Header />
          <div>
            <ErrorBoundary fallback={<div>Error</div>}>
              <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
              </Suspense>
            </ErrorBoundary>
          </div>
        </SidebarInset>
      </Provider>
    </>
  );
}

export default App;
