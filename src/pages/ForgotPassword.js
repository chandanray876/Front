import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../_api/apiService";
import { checkEmail } from "../utils/validations";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

export default function ForgotPassword() {
  const [modalView, setModalView] = useState(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    handleValidations(e);
  }

  function handleValidations(e = null) {
    let errors = {};
    if (e) {
      errors = {
        ...error,
        emails: checkEmail(e.target.value),
      };
    } else
      errors = {
        emails: checkEmail(email),
      };
    if (errors.emails) {
      setError(errors);
      return false;
    }
    setError(null);
    return true;
  }

  async function sendResetPasswordEmail(e) {
    e.preventDefault();
    if (handleValidations()) {
      setLoading(true);
      const { data } = await api({
        url: `/forgot-password?email=${email}`,
        method: "POST",
      });
      console.log(data);
      if (data.status === true && data.code === 200) {
        toast.success(data.message);
        setModalView("ResetPassword");
      } else {
        toast.error(data.message);
      }
      setLoading(false);
    }
  }

  return (
    <>
      <div className="common-back forgot-block">
        <div className="container">
          <div className="heading-rg">
            <span className="join-hd">Forgot Password</span>
            <span className="get-hd">
              Don’t worry, it happens to all of us.
            </span>
          </div>
          <form onSubmit={sendResetPasswordEmail}>
            <div className="forgot-form-block">
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  name="email"
                  onChange={handleEmailChange}
                  value={email}
                />
                {error?.emails ? (
                  <div className="validation">{error?.emails}</div>
                ) : null}
              </div>
              <button
                disabled={loading}
                type="submit"
                className="btn-custom btn-submit-form"
              >
                {loading ? (
                  <Loader color="#fff" height={20} width={5} />
                ) : (
                  "Send Password Reset Link"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        view={modalView}
        close={() => setModalView(null)}
        email={email}
        setView={setModalView}
      />
    </>
  );
}
