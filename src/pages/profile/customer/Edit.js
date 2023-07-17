import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../../_api/apiService";
import { avatar } from "../../../assets/images";
import { UserContext } from "../../../context/userContext";
import {
  checkABN,
  checkAddress,
  checkDescription,
  checkDOB,
  checkEmail,
  checkFirstName,
  checkLastName,
  checkTagline,
  getDate,
} from "../../../utils/validations";
import Loader from "../../../components/Loader";

export default function EditProfile() {
  const { user, updateUser } = useContext(UserContext);

  const [inputs, setInputs] = useState({
    abn: user?.abn || "",
    description: user?.description || "",
    dob: user?.dob || "",
    email: user?.email || "",
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    location: user?.location || "",
    earn_money: user?.earn_money || 0,
    tagline: user?.tagline || "",
    post_tasks: user?.post_tasks || 0,
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]:
        e.target.name === "post_tasks" || e.target.name === "earn_money"
          ? e.target.checked
          : e.target.value,
    }));
    if (errors) handleValidations(e);
  }

  function handleValidations(e = null) {
    let error = {};
    if (e) {
      if (e.target.name === "abn")
        error = {
          ...errors,
          abn: checkABN(e.target.value),
        };
      if (e.target.name === "description")
        error = {
          ...errors,
          description: checkDescription(e.target.value),
        };
      else if (e.target.name === "dob")
        error = {
          ...errors,
          dob: checkDOB(e.target.value),
        };
      else if (e.target.name === "email")
        error = {
          ...errors,
          email: checkEmail(e.target.value),
        };
      else if (e.target.name === "first_name")
        error = {
          ...errors,
          first_name: checkFirstName(e.target.value),
        };
      else if (e.target.name === "last_name")
        error = {
          ...errors,
          last_name: checkLastName(e.target.value),
        };
      else if (e.target.name === "location")
        error = {
          ...errors,
          location: checkAddress(e.target.value),
        };
      else if (e.target.name === "tagline")
        error = {
          ...errors,
          tagline: checkTagline(e.target.value),
        };
    } else
      error = {
        abn: checkABN(inputs.abn),
        description: checkDescription(inputs.description),
        dob: checkDOB(inputs.dob),
        email: checkEmail(inputs.email),
        first_name: checkFirstName(inputs.first_name),
        last_name: checkLastName(inputs.last_name),
        location: checkAddress(inputs.location),
        tagline: checkTagline(inputs.tagline),
      };
    if (
      error.abn ||
      error.description ||
      error.dob ||
      error.email ||
      error.first_name ||
      error.last_name ||
      error.location ||
      error.tagline
    ) {
      setErrors(error);
      return false;
    }
    setErrors(null);
    return true;
  }

  async function updateProfile(e) {
    e.preventDefault();
    if (handleValidations()) {
      setLoading(true);

      const { data } = await api({
        url: `/update-profile`,
        method: "POST",
        data: inputs,
        token: user.token,
      });

      if (data?.code === 200 && data?.status === true) {
        updateUser({ token: user.token, ...data.data });
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }
      setLoading(false);
    }
  }

  return (
    <div id="main" className="dashboard-content">
      <div className="dash-con-inner">
        <h2>Edit Profile</h2>
        <div className="profile-block">
          <div className="dashwhite-block">
            <div className="profile-img">
              <img src={avatar} alt="user-img" />
              <div className="up-btn-wrapper">
                <button className="btn btn-custom">
                  <i className="fas fa-camera" /> Upload Photos
                </button>
                <input type="file" name="myfile" />
              </div>
            </div>
            <form onSubmit={updateProfile}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First name</label>
                    <input
                      name="first_name"
                      onClick={handleInputChange}
                      onChange={handleInputChange}
                      className="form-control"
                      type="text"
                      value={inputs.first_name}
                    />
                    {errors?.first_name ? (
                      <div className="validation">{errors?.first_name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last name</label>
                    <input
                      name="last_name"
                      onClick={handleInputChange}
                      onChange={handleInputChange}
                      className="form-control"
                      type="text"
                      value={inputs.last_name}
                    />
                    {errors?.last_name ? (
                      <div className="validation">{errors?.last_name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Tagline</label>
                    <input
                      name="tagline"
                      onClick={handleInputChange}
                      onChange={handleInputChange}
                      className="form-control"
                      type="text"
                      value={inputs.tagline}
                    />
                    {errors?.tagline ? (
                      <div className="validation">{errors?.tagline}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Location</label>
                    <input
                      name="location"
                      onClick={handleInputChange}
                      onChange={handleInputChange}
                      className="form-control"
                      type="text"
                      value={inputs.location}
                    />
                    {errors?.location ? (
                      <div className="validation">{errors?.location}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      onClick={handleInputChange}
                      onChange={handleInputChange}
                      className="form-control"
                      type="text"
                      value={inputs?.email}
                    />
                    {errors?.email ? (
                      <div className="validation">{errors?.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Birthday</label>
                    <input
                      name="dob"
                      className="form-control dob"
                      onClick={handleInputChange}
                      onChange={handleInputChange}
                      type="date"
                      value={inputs?.dob}
                      min={getDate().min}
                      max={getDate().max}
                    />
                    {errors?.dob ? (
                      <div className="validation">{errors?.dob}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>ABN</label>
                    <input
                      name="abn"
                      value={inputs?.abn}
                      onClick={handleInputChange}
                      onChange={handleInputChange}
                      className="form-control"
                      type="number"
                    />
                    {errors?.abn ? (
                      <div className="validation">{errors?.abn}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group custom-check-block">
                    <label className="common-label">Display Information</label>
                    <div className="custom-check custom-control-inline">
                      <input
                        id="post_tasks"
                        name="post_tasks"
                        checked={inputs.post_tasks ? true : false}
                        onChange={handleInputChange}
                        type="checkbox"
                      />
                      <label for="post_tasks" className="custom-check-label">
                        Post tasks
                      </label>
                    </div>
                    <div className="custom-check custom-control-inline">
                      <input
                        id="earn_money"
                        type="checkbox"
                        onChange={handleInputChange}
                        name="earn_money"
                        checked={inputs.earn_money ? true : false}
                      />
                      <label for="earn_money" className="custom-check-label">
                        Earn money
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      name="description"
                      value={inputs.description}
                      onClick={handleInputChange}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      ddd
                    </textarea>
                    {errors?.description ? (
                      <div className="validation">{errors?.description}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <button className="btn btn-custom">
                {loading ? (
                  <Loader color="#fff" height={20} width={5} />
                ) : (
                  "Save Profile"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
