import React from "react";
import { useRoutes } from "react-router";
import AdminPage from "../pages/adminPage/AdminPage";
import Login from "../pages/login/Login";

export default function MainRoutes() {
  const Routes = useRoutes([
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/",
          element: <AdminPage />,
        },
      ],
    },
    {
      element: <AuthRoutes />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return Routes;
}
