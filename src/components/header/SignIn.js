import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../_api/apiService";
import { checkEmail, checkPassword } from "../../utils/validations";
import Loader from "../Loader";
import { UserContext } from "../../context/userContext";

export default function SignIn({ setView }) {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
  const [errors, setErrors] = useState(null);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [passwordShown, showPassword] = useState(false);

  function handleInputChange(e) {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
    handleValidations(e);
  }

  function handleNavigation(path) {
    navigate(path);
    setView(null);
  }

  function handleValidations(e = null) {
    let error = {};
    if (e) {
      if (e.target.name === "email") {
        error = {
          ...errors,
          email: checkEmail(e.target.value),
        };
      } else if (e.target.name === "password") {
        error = {
          ...errors,
          password: checkPassword(e.target.value),
        };
      }
    } else
      error = {
        email: checkEmail(inputs.email),
        password: checkPassword(inputs.password),
      };

    if (error.email || error.password) {
      setErrors(error);
      return false;
    }
    setErrors(null);
    return true;
  }

  async function login(e) {
    e.preventDefault();
    if (handleValidations()) {
      setLoading(true);
      const { data } = await api({
        url: `/login`,
        method: "POST",
        data: inputs,
      });
      console.log(data);
      if (data.status === true && data.code === 200) {
        if (!data?.data.is_verified) {
          updateUser({ token: data.data.access_token, ...data.data.user });
          setView(null);
          toast.success(data.message);

          if (data?.user?.userType === "Tasker") navigate("tasker/profile");
          else navigate("/profile");
        } else {
          toast.error(data?.message);
        }
      } else {
        toast.error(data.message);
      }
      setLoading(false);
    }
  }

  return (
    <>
      <div className="modal-header">
        <h3>SIGN IN</h3>
      </div>
      <div className="modal-body">
        <div>
          <form className="login-form" onSubmit={login}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
                autoComplete={""}
              />
              {errors?.email ? (
                <div className="validation">{errors?.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <div
                className="form-control"
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
                  placeholder="Password"
                  name="password"
                  value={inputs.password}
                  onChange={handleInputChange}
                  autoComplete={inputs.password}
                />
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => showPassword(!passwordShown)}
                >
                  Show
                </span>
              </div>
              {errors?.password ? (
                <div className="validation">{errors?.password}</div>
              ) : null}
            </div>
            <span
              onClick={() => handleNavigation("/forgot_password")}
              className="for-link"
            >
              Forgot your password?
            </span>
            <button disabled={loading} type="submit" className="btn-custom">
              {loading ? (
                <Loader color="#fff" height={20} width={5} />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
        <button className="btn-custom apple-signin">
          <i className="fab fa-apple" /> Sign in with Apple
        </button>
        <div className="login-social-media">
          <span className="or-box">
            <strong>or sign in with</strong>
          </span>
          <ul className="d-flex justify-content-center">
            <li>
              <span className="d-flex justify-content-center align-items-center">
                <i className="fab fa-facebook-f" />
              </span>
            </li>
            <li>
              <span className="d-flex justify-content-center align-items-center">
                <i className="fab fa-google" />
              </span>
            </li>
          </ul>
        </div>

        <span className="already-link" onClick={() => setView("SignUp")}>
          Don't have an account? <span>Sign up</span>
        </span>
      </div>
    </>
  );
}
