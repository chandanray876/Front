import React, { useState } from "react";
import { toast } from "react-toastify";
import { contactBanner, mailing } from "../assets/images";
import {
  checkEmail,
  checkName,
  checkSubject,
  checkPhone,
  checkEnquiry,
} from "../utils/validations";
import { api } from "../_api/apiService";
import Loader from "../components/Loader";
import { testimonialFormfiels } from "../utils/fixers";

export default function Testimonials() {
  const [inputs, setInputs] = useState(testimonialFormfiels);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const postTestimonials = async (e) => {
    e.preventDefault();
    if (handleValidations()) {
      let formData = new FormData();
      formData.append("email", inputs.email);
      formData.append("name", inputs.name);
      formData.append("subject", inputs.subject);
      formData.append("mobile", inputs.phone);
      formData.append("message", inputs.message);
      setLoading(true);
      const res = await api({
        url: "/testimonial",
        method: "post",
        data: formData,
      });
      setLoading(false);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        handleResetInputs();
      } else toast.error(res?.data?.message);
    }
  };

  function handleResetInputs() {
    setInputs(testimonialFormfiels);
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
      if (e.target.name === "email")
        error = {
          ...errors,
          email: checkEmail(e.target.value),
        };
      else if (e.target.name === "name")
        error = {
          ...errors,
          name: checkName(e.target.value),
        };
      else if (e.target.name === "subject")
        error = {
          ...errors,
          subject: checkSubject(e.target.value),
        };
      else if (e.target.name === "phone")
        error = {
          ...errors,
          phone: checkPhone(e.target.value),
        };
      else if (e.target.name === "enquiry")
        error = {
          ...errors,
          message: checkEnquiry(e.target.value),
        };
    } else
      error = {
        email: checkEmail(inputs.email),
        name: checkName(inputs.name),
        subject: checkSubject(inputs.subject),
        phone: checkPhone(inputs.phone),
        message: checkEnquiry(inputs.message),
      };

    if (
      error.email ||
      error.name ||
      error.subject ||
      error.phone ||
      error.message
    ) {
      setErrors(error);
      return false;
    }
    setErrors(null);
    return true;
  }

  return (
    <div>
      <div className="inner-banner">
        <img src={contactBanner} alt="Contact us" />
        <div className="inner-banner-text">
          <h1>Testimonials</h1>
          <ul className="breadcrumbs">
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Testimonials</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="inner-page-content">
        <div className="container">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="contact-block d-flex flex-wrap">
            <div className="contact-left">
              <div className="contact-msg-head d-flex justify-content-between align-items-start">
                <h3>Write a testimonial</h3>
                <img src={mailing} alt="mail" />
              </div>
              <form className="contact-form" onSubmit={postTestimonials}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the subject"
                        value={inputs.subject}
                        onChange={handleInputChange}
                        name="subject"
                      />
                      {errors?.subject ? (
                        <div className="validation">{errors?.subject}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter your name"
                        value={inputs.name}
                        onChange={handleInputChange}
                        name="name"
                      />
                      {errors?.name ? (
                        <div className="validation">{errors?.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter email address"
                        value={inputs.email}
                        onChange={handleInputChange}
                        name="email"
                      />
                      {errors?.email ? (
                        <div className="validation">{errors?.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter phone number"
                        value={inputs.phone}
                        onChange={handleInputChange}
                        name="phone"
                      />
                      {errors?.phone ? (
                        <div className="validation">{errors?.phone}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        value={inputs.message}
                        onChange={handleInputChange}
                        name="message"
                      ></textarea>
                      {errors?.message ? (
                        <div className="validation">{errors?.message}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-custom"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader color="#fff" height={20} width={5} />
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
            <div className="contact-right">
              <h3>Contact Information</h3>
              <div className="contct-link-block">
                <div className="link-block">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    301 The Greenhouse, Custard <br />
                    Factory, London, E2 8DY.
                  </p>
                </div>
                <div className="link-block">
                  <i className="fas fa-mobile-alt"></i>
                  <p>+855 93 979706</p>
                </div>
                <div className="link-block">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    301 The Greenhouse, Custard <br />
                    Factory, London, E2 8DY.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
