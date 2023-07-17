import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../_api/apiService";
import { checkCnfPassword, checkPassword } from "../../utils/validations";
import Loader from "../Loader";

export default function ResetPassword({ setView, email }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [inputs, setInputs] = useState({
    temporary_password: "",
    new_password: "",
    cnfPassword: "",
  });
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
    setView(null);
    navigate(path);
  }

  function handleValidations(e = null) {
    let error = {};
    if (e) {
      if (e.target.name === "temporary_password")
        error = {
          ...errors,
          temporary_password:
            e.target.value.length >= 6 ? null : "Please enter reset code",
        };
      else if (e.target.name === "new_password")
        error = {
          ...errors,
          new_password: checkPassword(e.target.value),
          cnfPassword: checkCnfPassword(
            inputs.cnfPassword,
            inputs.cnfPassword === e.target.value
          ),
        };
      else if (e.target.name === "cnfPassword")
        error = {
          ...errors,
          new_password: checkPassword(inputs.new_password),
          cnfPassword: checkCnfPassword(
            e.target.value,
            inputs.new_password === e.target.value
          ),
        };
    } else {
      error = {
        temporary_password:
          inputs.temporary_password.length >= 6
            ? null
            : "Please enter reset code",
        new_password: checkPassword(inputs.new_password),
        cnfPassword: checkCnfPassword(
          inputs.cnfPassword,
          inputs.new_password === inputs.cnfPassword
        ),
      };
    }
    if (error.new_password || error.temporary_password || error.cnfPassword) {
      setErrors(error);
      return false;
    }
    setErrors(null);
    return true;
  }

  async function resetPassword(e) {
    e.preventDefault();
    if (handleValidations()) {
      setLoading(true);
      const { data } = await api({
        url: `/changepassword`,
        method: "POST",
        data: { ...inputs, email: email },
      });
      console.log(data);

      if (data.status === true && data.code === 200) {
        toast.success(data.message);
        handleNavigation(`/login`);
      } else {
        toast.error(data.message);
      }
      setLoading(false);
    }
  }

  return (
    <>
      <div className="modal-header">
        <h3>RESET PASSWORD</h3>
      </div>
      <div className="modal-body">
        <div>
          <form className="login-form" onSubmit={resetPassword}>
            <div className="form-group">
              <input
                name="temporary_password"
                onChange={handleInputChange}
                autoComplete={""}
                type="password"
                className="form-control"
                placeholder="Verification code"
              />
              {errors?.temporary_password ? (
                <div className="validation">{errors?.temporary_password}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                name="new_password"
                onChange={handleInputChange}
                autoComplete={""}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              {errors?.new_password ? (
                <div className="validation">{errors?.new_password}</div>
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

            <button disabled={loading} type="submit" className="btn-custom">
              {loading ? (
                <Loader color="#fff" height={20} width={5} />
              ) : (
                "Reset"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
