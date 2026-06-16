import { createRouter, RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {import.meta.env.DEV && <TanStackRouterDevtools router={router} />}
    </>
  );
};

export default App;
