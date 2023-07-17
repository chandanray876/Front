import React, { useContext, useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { avatar, location } from "../../assets/images";
import { api } from "../../_api/apiService";
import {
  checkTitle,
  checkDate,
  checkTime,
  checkLocation,
  checkBudget,
  checkBudgetType,
  checkCategory,
  checkTaskToBeDone,
  checkDescription,
} from "../../utils/validations";
import Loader from "../../components/Loader";
import { UserContext } from "../../context/userContext";

export default function PostJob() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    available_date: "",
    available_time: "",
    location: "",
    job_category: "",
    price: "",
    budget_type: "",
    image: "",
    category_id: "",
    latitude: "",
    longitude: "",
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [places, setPlaces] = useState("");

  async function fetchCategories() {
    const response = await api({
      url: `/categories-list`,
      method: "GET",
    });
    if (response.data.code === 200) {
      setCategories(response.data.data);
    }
  }

  useEffect(() => {
    if (!categories.length) fetchCategories();
  }, []); // eslint-disable-line

  function handleInputChangeFile(e) {
    console.log("handleInputChangeFile");
    var tgt = e.target || window.event.srcElement,
      files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
      var fr = new FileReader();
      fr.onload = function () {
        document.getElementById("user-img").src = fr.result;
      };
      fr.readAsDataURL(files[0]);
    }

    // Not supported
    else {
      // fallback -- perhaps submit the input to an iframe and temporarily store
      // them on the server until the user's session ends.
    }
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.files[0],
    }));
  }

  function handleInputChange(e) {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
    handleValidations(e);
  }

  function handleValidations(e = null) {
    let error = {};
    if (e) {
      if (e.target.name === "title")
        error = {
          ...errors,
          title: checkTitle(e.target.value),
        };
      if (e.target.name === "description")
        error = {
          ...errors,
          description: checkDescription(e.target.value),
        };
      else if (e.target.name === "available_date")
        error = {
          ...errors,
          available_date: checkDate(e.target.value),
        };
      else if (e.target.name === "available_time")
        error = {
          ...errors,
          available_time: checkTime(e.target.value),
        };
      else if (e.target.name === "job_category")
        error = {
          ...errors,
          job_category: checkTaskToBeDone(e.target.value),
        };
      else if (e.target.name === "budget_type")
        error = {
          ...errors,
          budget_type: checkBudgetType(e.target.value),
        };
      else if (e.target.name === "location")
        error = {
          ...errors,
          location: checkLocation(e.target.value),
        };
      else if (e.target.name === "price")
        error = {
          ...errors,
          price: checkBudget(e.target.value),
        };
      else if (e.target.name === "category_id")
        error = {
          ...errors,
          category_id: checkCategory(e.target.value),
        };
    } else
      error = {
        title: checkTitle(inputs.title),
        description: checkDescription(inputs.description),
        available_date: checkDate(inputs.available_date),
        available_time: checkTime(inputs.available_time),
        job_category: checkTaskToBeDone(inputs.job_category),
        budget_type: checkBudgetType(inputs.budget_type),
        location: checkLocation(inputs.location),
        price: checkBudget(inputs.price),
        category_id: checkCategory(inputs.category_id),
      };
    if (
      error.title ||
      error.description ||
      error.available_date ||
      error.available_time ||
      error.job_category ||
      error.budget_type ||
      error.location ||
      error.price ||
      error.category_id
    ) {
      setErrors(error);
      return false;
    }
    setErrors(null);
    return true;
  }

  async function handlePostJob(e) {
    if (user.token) {
      e.preventDefault();
      if (handleValidations()) {
        setLoading(true);
        console.log("inputs", inputs);
        let form_data = new FormData();
        for (let key in inputs) {
          form_data.append(key, inputs[key]);
        }
        const res = await api({
          url: `/jobs-post`,
          method: "POST",
          data: form_data,
          token: user.token,
        });
        if (res?.data?.code === 200 && res?.data?.status === true) {
          toast.success(res?.data?.message);
          navigate("/browse_job");
        } else {
          toast.error(res?.data?.message);
        }
        console.log("Response", res);
        setLoading(false);
      }
    } else {
      toast.error("Please login first");
      navigate("/login");
    }
  }

  const handleSelect = async (value) => {
    if (places) {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setPlaces(value);
      setInputs({
        ...inputs,
        location: value,
        latitude: latLng.lat,
        longitude: latLng.lng,
      });
    } else {
      setPlaces("");
      setInputs({
        ...inputs,
        location: "",
      });
    }
  };
  console.log("value", inputs, places);
  useEffect(() => {
    if (!places) {
      setPlaces("");
      setInputs({
        ...inputs,
        location: "",
      });
    } else {
      setErrors({ ...errors, location: null });
    }
  }, [places]); // eslint-disable-line

  return (
    <div id="main" className="dashboard-content">
      <div className="dash-con-inner">
        <h2>Post a Job</h2>
        <div className="profile-block">
          <div className="dashwhite-block">
            <form onSubmit={handlePostJob}>
              <div className="profile-img">
                <img src={avatar} alt="user-img" id="user-img" />
                <div className="up-btn-wrapper">
                  <button className="btn btn-custom">
                    <i className="fas fa-camera" /> Upload Photos
                  </button>
                  <input
                    type="file"
                    name="image"
                    onChange={handleInputChangeFile}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      autoComplete={""}
                      onChange={handleInputChange}
                    />
                    {errors?.title ? (
                      <div className="validation">{errors?.title}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      className="form-control"
                      type="text"
                      autoComplete={""}
                      onChange={handleInputChange}
                      name="category_id"
                    >
                      <option value={""}>Select category</option>
                      {categories &&
                        categories?.map((category, index) => (
                          <option value={category.id} key={index}>
                            {category.title}
                          </option>
                        ))}
                    </select>
                    {errors?.category_id ? (
                      <div className="validation">{errors?.category_id}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      className="form-control"
                      type="date"
                      autoComplete={""}
                      onChange={handleInputChange}
                      name="available_date"
                    />
                    {errors?.available_date ? (
                      <div className="validation">{errors?.available_date}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Time</label>
                    <input
                      className="form-control"
                      type="time"
                      autoComplete={""}
                      onChange={handleInputChange}
                      name="available_time"
                    />
                    {errors?.available_time ? (
                      <div className="validation">{errors?.available_time}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Location</label>
                    <PlacesAutocomplete
                      value={places}
                      onChange={setPlaces}
                      onSelect={handleSelect}
                      name="location"
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <>
                          <input
                            className="form-control"
                            {...getInputProps({
                              placeholder: "Type Location",
                            })}
                          />
                          <div className="suggestion-list">
                            {loading ? <div>...loading</div> : null}
                            {suggestions.map((suggestion, index) => {
                              const style = {
                                background: suggestion.active
                                  ? "aliceblue"
                                  : "",
                                cursor: "pointer",
                              };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    style,
                                  })}
                                  key={index}
                                >
                                  <img
                                    alt="location"
                                    src={location}
                                    height={20}
                                    width={15}
                                  />
                                  {suggestion.description}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </PlacesAutocomplete>
                    {errors?.location ? (
                      <div className="validation">{errors?.location}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Task to be Done</label>
                    <select
                      className="form-control"
                      type="text"
                      autoComplete={""}
                      onChange={handleInputChange}
                      name="job_category"
                    >
                      <option value={""}>Select value</option>
                      <option value={3}>All</option>
                      <option value={1}>In Person</option>
                      <option value={2}>Remotely</option>
                    </select>
                    {errors?.job_category ? (
                      <div className="validation">{errors?.job_category}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Budget Type</label>
                    <select
                      className="form-control dob"
                      type="date"
                      autoComplete={""}
                      onChange={handleInputChange}
                      name="budget_type"
                    >
                      <option value={""}>Select budget type</option>
                      <option value={1}>Full price</option>
                      <option value={2}>Hourly rate</option>
                    </select>
                    {errors?.budget_type ? (
                      <div className="validation">{errors?.budget_type}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Budget</label>
                    <input
                      className="form-control"
                      type="number"
                      autoComplete={""}
                      onChange={handleInputChange}
                      name="price"
                    />
                    {errors?.price ? (
                      <div className="validation">{errors?.price}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      onClick={handleInputChange}
                      onChange={handleInputChange}
                      name="description"
                    ></textarea>
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
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
