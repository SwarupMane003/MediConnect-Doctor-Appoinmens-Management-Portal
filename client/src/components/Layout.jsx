import { Sidebar, adminSidebar , doctorSidebar} from "./Sidebar.jsx";
import React from "react";
import "../styles/LayoutStyle.css";
// import "../styles/tmp.css"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Bell } from "react-bootstrap-icons";
import Navbar from "./Navbar.jsx";
import { Avatar, Badge, Space } from "antd";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  const Navigate = useNavigate();

  // const SiderBarMenu = user?.isAdmin ? adminSidebar : Sidebar;

  const SiderBarMenu = user?.isAdmin ? adminSidebar : user?.isDoctor ? doctorSidebar : Sidebar;


  return (
    <div>
      {/* <Navbar /> */}
      <div className="main">
        <SiderBarMenu />

        <div className="content">
          <div className="header">
            <div className="header-content">
              <div className="mx-5 ">
                <a
                  onClick={() => Navigate("/notification")}
                  style={{ cursor: "pointer" }}
                >
                  <Badge count={user && user.notification.length}>
                    <Avatar shape="square" size="medium" />
                  </Badge>
                </a>
              </div>

              <Link to="/ProfilePage"> {user?.name}</Link>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
