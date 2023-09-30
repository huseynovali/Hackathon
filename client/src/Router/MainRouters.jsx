import React from "react";
import { useRoutes } from "react-router";
import AdminPage from "../pages/adminPage/AdminPage";
import Login from "../pages/login/Login";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Appeals from "../components/AdminComp/Appeals/Appeals";
import Owerviev from "../components/Overview/Overview"
export default function MainRoutes() {
  const Routes = useRoutes([
    {
      path: "/",
      element: <PrivateRoutes />,
      children: [
        {
          path: "/",
          element: <AdminPage />,
          children:[
            {
              path:"appeals",
              element:<Appeals/>
            },
            {
              path:'/owerviev',
              element:<Owerviev/>
            }
          ]
        },
      ],
    },
    {
      path: "/login",
      element: <AuthRoutes />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
  ]);
  return Routes;
}
