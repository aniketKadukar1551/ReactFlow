import { RouterProvider } from "react-router"

import { appRouter } from "./utils/AppRouterConfiguration"

const AppRouter = () => {
  return (
      <RouterProvider router={appRouter}/>
  )
}

export default AppRouter
