import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Reviews = lazy(() => import("remote/reviews"));

export const Route = createFileRoute("/reviews")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Reviews />
      </Suspense>
    </ErrorBoundary>
  );
}
