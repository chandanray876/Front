import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  avatar,
  dashAccount,
  dashboardImage,
  dashNotification,
  dashPassword,
  dashPay,
  dashPayMethod,
  dashProfile,
} from "../../../assets/images";
import { UserContext } from "../../../context/userContext";

export default function CustomerProfileLayout() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="sidenav">
        <div className="user-profile">
          <div className="dashuser-img">
            <img src={avatar} alt="user-img" />
            <span className="edit-profile">
              <i className="fas fa-pencil-alt"></i>
            </span>
          </div>
          <span className="user-name">{user?.name}</span>
        </div>
        <ul className="sidenav-bar d-flex flex-column">
          <Link
            to={user.userType === "Tasker" ? "/tasker/profile" : "/profile"}
          >
            <li>
              <div className="active">
                <img src={dashboardImage} alt="" />
                <span>Dashboard</span>
              </div>
            </li>
          </Link>
          <Link
            to={user.userType === "Tasker" ? "/tasker/profile" : "/profile"}
          >
            {" "}
            <li>
              <div>
                <img src={dashPay} alt="" />
                <span>Payment History</span>
              </div>
            </li>{" "}
          </Link>
          <Link to="/profile">
            {" "}
            <li>
              <div>
                <img src={dashPayMethod} alt="" />
                <span>Payment Method</span>
              </div>
            </li>{" "}
          </Link>
          <Link to="/profile">
            {" "}
            <li>
              <div>
                <img src={dashNotification} alt="" />
                <span>Notifications</span>
              </div>
            </li>{" "}
          </Link>
          <Link to="/profile">
            <li>
              <div>
                <img src={dashAccount} alt="" />
                <span>Account detail</span>
              </div>
            </li>{" "}
          </Link>
          <Link to="/profile">
            {" "}
            <li>
              <div>
                <img src={dashPassword} alt="" />
                <span>Change password</span>
              </div>
            </li>{" "}
          </Link>
          <Link to="/profile">
            {" "}
            <li>
              <div>
                <img src={dashProfile} alt="" />
                <span>Public profile</span>
              </div>
            </li>{" "}
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
