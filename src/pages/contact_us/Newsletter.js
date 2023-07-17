import React, { useState } from "react";
import { checkEmail, checkName } from "../../utils/validations";
import Loader from "../../components/Loader";
import { api } from "../../_api/apiService";
import { toast } from "react-toastify";

function Newsletter({ setView }) {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleInputChange(e) {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
    handleValidations(e);
  }

  async function postNewsLetter(e) {
    e.preventDefault();
    if (handleValidations()) {
      setLoading(true);
      const response = await api({
        url: `/newsletter`,
        method: "post",
        data: inputs,
      });
      setLoading(false);
      if (response?.data?.code === 200 && response?.data?.status === true) {
        toast.success(response?.data?.message);
        setView(false);
      } else
        toast.error(
          response?.data?.message ? response?.data?.message : "Server error .."
        );
    }
  }

  function handleValidations(e = null) {
    let error = {};
    if (e) {
      if (e.target.name === "email") {
        error = {
          ...errors,
          email: checkEmail(e.target.value),
        };
      } else if (e.target.name === "name") {
        error = {
          ...errors,
          name: checkName(e.target.value),
        };
      }
    } else
      error = {
        email: checkEmail(inputs.email),
        name: checkName(inputs.name),
      };
    if (error.email || error.name) {
      setErrors(error);
      return false;
    }
    setErrors(null);
    return true;
  }

  return (
    <>
      <div className="modal-header">
        <h3>Subscribe Newsletter</h3>
      </div>
      <div className="modal-body">
        <form className="login-form" onSubmit={postNewsLetter}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email address"
              onChange={handleInputChange}
              name="email"
            />
            {errors?.email ? (
              <div className="validation">{errors?.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={handleInputChange}
              name="name"
            />
            {errors?.name ? (
              <div className="validation">{errors?.name}</div>
            ) : null}
          </div>
          <button
            disabled={loading}
            className="btn-custom"
            type="submit"
            name="Subscribe"
          >
            {loading ? (
              <Loader color="#fff" height={20} width={5} />
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default Newsletter;
