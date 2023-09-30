import React from "react";
import "./AdminSidebar.css";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
function AdminSideBar() {
  const location = useLocation();

  return (
    <div className="Admin__Sidebar__Container">
      <h1 className="Admin__Sidebar__IconText">StudyMosaic</h1>
      <div className="Admin__Sidebar__bottom d-flex flex-col justify-between">
        <ul className="Admin__Sidebar__list">
          <li
            className={`Admin__Sidebar__list__item ${
              location.pathname == "/owerviev" ? "isactive" : ""
            } `}
          >
            <Link
              to={"/owerviev"}
              className={`d-flex items-center ${
                location.pathname == "/owerviev" ? "isactive-text" : ""
              }`}
            >
              <HiOutlineSquares2X2 />
              <span className="Admin__Sidebar__list__item__text">Overview</span>
            </Link>
          </li>
          <li
            className={`Admin__Sidebar__list__item ${
              location.pathname == "/appeals" ? "isactive" : ""
            } `}
          >
            <Link
              to={"/appeals"}
              className={`d-flex items-center ${
                location.pathname == "/appeals" ? "isactive-text" : ""
              }`}
            >
              <HiOutlineSquares2X2 />
              <span className="Admin__Sidebar__list__item__text ">Appeals</span>
            </Link>
          </li>
        </ul>

        <div className="logout__btn__content d-flex items-center">
          <BiLogOut />
          <span className="Admin__Sidebar__logout__text">Log out</span>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
