import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { avatar } from "../../../assets/images";
import { UserContext } from "../../../context/userContext";

export default function CustomerDashboard() {
  const { user } = useContext(UserContext);

  return (
    <div id="main" className="dashboard-content">
      <div className="dash-con-inner">
        <h2>Public Profile</h2>
        <div className="profile-block">
          <form>
            <div className="dashwhite-block public-form">
              <div className="d-flex justify-content-between">
                <div className="pro-left d-flex">
                  <div className="profile-img">
                    <img src={avatar} alt="user-img" />
                    <div className="up-btn-wrapper">
                      <button className="btn btn-custom">
                        <i className="fas fa-camera" /> Upload Photos
                      </button>
                      <input type="file" name="myfile" />
                    </div>
                  </div>
                  <div className="profile-text">
                    <div className="pro-edit-text">
                      <span>{user?.name}</span>
                      <p>
                        <i className="fas fa-map-marker-alt" /> India
                      </p>
                      <p>Member since 18th Apr 2022</p>
                    </div>
                  </div>
                </div>
                <Link to="edit_profile">
                  <span className="form-edit">
                    <i className="fas fa-pencil-alt" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="dashwhite-block public-form">
              <div className="d-flex justify-content-between align-items-center mrg-b15">
                <h3>About</h3>
                <span className="form-edit">
                  <i className="fas fa-pencil-alt" />
                </span>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Tagline</label>
                    <span className="form-text">{user?.tagline || "N/A"}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Description</label>
                    <span className="form-text">
                      {user?.description || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashwhite-block public-form">
              <div className="d-flex justify-content-between align-items-center mrg-b15">
                <h3>Portfolio</h3>
                <span className="form-edit">
                  <i className="fas fa-pencil-alt" />
                </span>
              </div>
              <p>
                Upload a maximum of 30 items. File formats accepted include
                JPG/PNG/PDF/TXT and must not be larger than 5MB.
              </p>
              <ul className="d-flex flex-wrap portfolio-list">
                {user?.portfolio?.length
                  ? user.portfolio.map((image) => (
                      <li>
                        <div className="up-img-block">
                          <div className="up-img">
                            <img src={image} alt="upload-gallery" />
                          </div>
                          <button
                            type="button"
                            className="close d-flex justify-content-center align-items-center"
                            aria-label="Close"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </li>
                    ))
                  : "Start uploading snaps .."}
              </ul>
            </div>
            <div className="dashwhite-block public-form">
              <div className="d-flex justify-content-between align-items-center mrg-b15">
                <h3>Skills</h3>
                <span className="form-edit">
                  <i className="fas fa-pencil-alt" />
                </span>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Education</label>
                    <span className="form-text">
                      {user?.education || "N/A"}
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Specialities</label>
                    <span className="form-text">
                      {user?.specialities || "N/A"}
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Languages</label>
                    <span className="form-text">
                      {user?.languages || "N/A"}
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Work</label>
                    <span className="form-text">{user?.work || "N/A"}</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
