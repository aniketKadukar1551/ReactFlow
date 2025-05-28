import { createBrowserRouter } from "react-router";

import Flow from "../components/Flow"

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Flow/>,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
])
