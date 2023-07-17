import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../_api/apiService";
import {
  checkAddress,
  checkCnfPassword,
  checkEmail,
  checkLastName,
  checkPassword,
  checkUserType,
  checkFirstName,
} from "../../utils/validations";
import Loader from "../Loader";

export default function SignUp({ setView }) {
  const [errors, setErrors] = useState(null);
  const [inputs, setInputs] = useState({
    user_type: "",
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    password: "",
    cnfPassword: "",
  });
  const [passwordShown, showPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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
      if (e.target.name === "user_type")
        error = {
          ...errors,
          user_type: checkUserType(e.target.value),
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
      else if (e.target.name === "email")
        error = {
          ...errors,
          email: checkEmail(e.target.value),
        };
      else if (e.target.name === "address")
        error = {
          ...errors,
          address: checkAddress(e.target.value),
        };
      else if (e.target.name === "password")
        error = {
          ...errors,
          password: checkPassword(e.target.value),
          cnfPassword: checkCnfPassword(
            inputs.cnfPassword,
            inputs.cnfPassword === e.target.value
          ),
        };
      else if (e.target.name === "cnfPassword")
        error = {
          ...errors,
          password: checkPassword(inputs.password),
          cnfPassword: checkCnfPassword(
            e.target.value,
            inputs.password === e.target.value
          ),
        };
    } else
      error = {
        user_type: checkUserType(inputs.user_type),
        first_name: checkFirstName(inputs.first_name),
        last_name: checkLastName(inputs.last_name),
        email: checkEmail(inputs.email),
        address: checkAddress(inputs.address),
        password: checkPassword(inputs.password),
        cnfPassword: checkCnfPassword(
          inputs.cnfPassword,
          inputs.password === inputs.cnfPassword
        ),
      };

    if (
      error.user_type ||
      error.first_name ||
      error.last_name ||
      error.email ||
      error.address ||
      error.password ||
      error.cnfPassword
    ) {
      setErrors(error);
      return false;
    }
    setErrors(null);
    return true;
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (handleValidations()) {
      console.log(inputs);
      setLoading(true);
      const res = await api({
        url: `/register`,
        method: "POST",
        data: inputs,
      });
      console.log(res);
      setLoading(false);
      if (res?.data?.status === true && res?.data?.code === 200) {
        toast.success("Please verify your registered email address.");
        setView("SignIn");
      } else {
        toast.error(res?.data?.message);
      }
    }
  }

  return (
    <>
      <div className="modal-header">
        <h3>SIGN UP</h3>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSignup}>
          <div className="login-form">
            <div className="form-group">
              <select
                className="form-control"
                name="user_type"
                onChange={handleInputChange}
                autoComplete={""}
              >
                <option value={""}>--select user-type--</option>
                <option value={"Customer"}>Customer</option>
                <option value={"Tasker"}>Tasker</option>
              </select>
              {errors?.user_type ? (
                <div className="validation">{errors?.user_type}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                onChange={handleInputChange}
                autoComplete={""}
                name="first_name"
                type="text"
                className="form-control"
                placeholder="First name"
              />
              {errors?.first_name ? (
                <div className="validation">{errors?.first_name}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                onChange={handleInputChange}
                autoComplete={""}
                name="last_name"
                type="text"
                className="form-control"
                placeholder="Last name"
              />
              {errors?.last_name ? (
                <div className="validation">{errors?.last_name}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                name="email"
                onChange={handleInputChange}
                autoComplete={""}
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              {errors?.email ? (
                <div className="validation">{errors?.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                name="address"
                onChange={handleInputChange}
                autoComplete={""}
                type="text"
                className="form-control"
                placeholder="Postal Address"
              />
              {errors?.address ? (
                <div className="validation">{errors?.address}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                name="password"
                onChange={handleInputChange}
                autoComplete={""}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              {errors?.password ? (
                <div className="validation">{errors?.password}</div>
              ) : null}
            </div>
            <div className="form-group">
              <div
                className="form-control bor"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <input
                  style={{
                    width: "calc(100% - 50px)",
                    height: "100%",
                    outline: "none",
                    border: "none",
                  }}
                  type={passwordShown ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="cnfPassword"
                  onChange={handleInputChange}
                  autoComplete={""}
                />
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => showPassword(!passwordShown)}
                >
                  Show
                </span>
              </div>
              {errors?.cnfPassword ? (
                <div className="validation">{errors?.cnfPassword}</div>
              ) : null}
            </div>
            <button disabled={loading} className="btn-custom" type="submit">
              {loading ? (
                <Loader color="#fff" height={20} width={5} />
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
        <button className="btn-custom apple-signin">
          <i className="fab fa-apple"></i> Sign up with Apple
        </button>
        <div className="login-social-media">
          <span className="or-box">
            <strong>or sign up with</strong>
          </span>
          <ul className="d-flex justify-content-center">
            <li>
              <span className="d-flex justify-content-center align-items-center">
                <i className="fab fa-facebook-f"></i>
              </span>
            </li>
            <li>
              <span className="d-flex justify-content-center align-items-center">
                <i className="fab fa-twitter"></i>
              </span>
            </li>
            <li>
              <span className="d-flex justify-content-center align-items-center">
                <i className="fab fa-instagram"></i>
              </span>
            </li>
            <li>
              <span className="d-flex justify-content-center align-items-center">
                <i className="fab fa-google"></i>
              </span>
            </li>
          </ul>
        </div>

        <span className="already-link" onClick={() => setView("SignIn")}>
          Already have an account? <span>Sign in</span>
        </span>
      </div>
    </>
  );
}
