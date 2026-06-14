import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
      <TanStackRouterDevtools />
    </>
  ),
});
