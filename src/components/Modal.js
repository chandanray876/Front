import React from "react";
import BrowseTasks from "./header/BrowseTasks";
import Newsletter from "../pages/contact_us/Newsletter";
import SignIn from "./header/SignIn";
import SignUp from "./header/SignUp";
import ResetPassword from "./header/ResetPassword";

export default function Modal({ view, setView, email, close }) {
  return view ? (
    <div
      className="modal popup-default login-popup"
      id="posttask-popup"
      data-backdrop="static"
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            onClick={() => close()}
            data-dismiss="modal"
          >
            <span>&times;</span>
          </button>
          {view === "BrowseTasks" ? (
            <BrowseTasks setView={setView} />
          ) : view === "SignIn" ? (
            <SignIn setView={setView} />
          ) : view === "SignUp" ? (
            <SignUp setView={setView} />
          ) : view === "ResetPassword" ? (
            <ResetPassword email={email} setView={setView} />
          ) : (
            <Newsletter setView={setView} />
          )}
        </div>
      </div>
    </div>
  ) : null;
}
