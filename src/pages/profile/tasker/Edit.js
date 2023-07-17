import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";

export default function EditTaskerProfile() {
  const { user } = useContext(UserContext);

  return (
    <div id="main" className="dashboard-content">
      <div className="dash-con-inner">
        <h2>Edit Profile of Tasker</h2>
        <div className="profile-block">
          <div className="dashwhite-block">
            <div className="profile-img">
              <img src={""} alt="user-img" />
              <div className="up-btn-wrapper">
                <button className="btn btn-custom">
                  <i className="fas fa-camera" /> Upload Photos
                </button>
                <input type="file" name="myfile" />
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.name.split(" ")[0]}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.name.substring(user?.name.indexOf(" ") + 1)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Tagline</label>
                    <input className="form-control" type="text" value={""} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Location</label>
                    <input
                      className="form-control"
                      type="text"
                      value={"Jaipur, India"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.email}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Birthday</label>
                    <input
                      className="form-control dob"
                      type="text"
                      value={""}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>ABN</label>
                    <input className="form-control" type="number" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group custom-check-block">
                    <label className="common-label">Display Information</label>
                    <div className="custom-check custom-control-inline">
                      <input id="task" type="checkbox" name="dis-info" />
                      <label for="task" className="custom-check-label">
                        Post tasks
                      </label>
                    </div>
                    <div className="custom-check custom-control-inline">
                      <input id="money" type="checkbox" name="dis-info" />
                      <label for="money" className="custom-check-label">
                        Earn money
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control">ddd</textarea>
                  </div>
                </div>
              </div>
              <button className="btn btn-custom">Save Profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
