import React from "react";
import AdminSideBar from "../../components/AdminComp/AdminSidebar/AdminSideBar"
import Header from "../../components/AdminComp/Header/Header";
import { Outlet } from "react-router";
function AdminPage() {
  return (
    <div className="d-flex">
       <AdminSideBar/>
       <div className="d-flex flex-col">
        <Header/>
        <Outlet/>
       </div>
    </div>
  );
}

export default AdminPage;
