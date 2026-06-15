import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
export const Route = createRootRoute({
    component: () => (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(AnimatePresence, { mode: "wait", children: _jsx(Outlet, {}) }), _jsx(BackToTop, {}), _jsx(TanStackRouterDevtools, {})] })),
});
