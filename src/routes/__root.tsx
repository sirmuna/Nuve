import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
      <BackToTop />
      <TanStackRouterDevtools />
    </>
  ),
});
