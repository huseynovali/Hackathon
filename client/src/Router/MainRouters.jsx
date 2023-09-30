import React from "react";
import { useRoutes } from "react-router";
import AdminPage from "../pages/adminPage/AdminPage";
import Login from "../pages/login/Login";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";

export default function MainRoutes() {
  const Routes = useRoutes([
    {
      path: "/",
      element: <PrivateRoutes />,
      children: [
        {
          index:true,
          element: <AdminPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthRoutes />,
      children: [
        {
            index:true,
          element: <Login />,
        },
      ],
    },
  ]);
  return Routes;
}
