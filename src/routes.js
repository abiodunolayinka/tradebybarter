import MainLayout from "./layout/mainLayout/mainLayout";
import {useRoutes} from "react-router"
import Landing from "./pages/landing/landing";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "/", element: <Landing /> }],
    },
  ]);
};
export default Routes ;