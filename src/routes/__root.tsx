import { TanStackRouterDevtools } from "@/utils/dev/TanStackRouterDevtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createRootRoute({
  component: () => (
    <>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
      <Outlet />
    </>
  ),
});
