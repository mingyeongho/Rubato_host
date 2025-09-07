import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";

const Reviews = lazy(() => import("remote/reviews"));

export const Route = createFileRoute("/reviews")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Reviews />;
}
