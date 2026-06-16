import {
  createRootRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import CookieBanner from "@/components/CookieBanner";

function RootComponent() {
  const { location } = useRouterState();
  const isPrivacy = location.pathname === "/privacy";

  return (
    <>
      {!isPrivacy && <Navbar />}
      <CookieBanner />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
      {!isPrivacy && <BackToTop />}
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
