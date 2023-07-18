import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { contactBanner, mailing } from "../../assets/images";
import {
  checkEmail,
  checkName,
  checkSubject,
  checkPhone,
  checkEnquiry,
} from "../../utils/validations";
import { api } from "../../_api/apiService";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import { contactFormFields } from "../../utils/fixers";
import { getStaticProps } from "../../_api/staticPageServices";

export default function ContactUs() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState(contactFormFields);
  const [staticProps, setStaticProps] = useState([]);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    let settings = localStorage.getItem("static_props");
    if (settings) {
      settings = JSON.parse(settings);
      if (!staticProps.length) {
        setStaticProps(settings);
        settings.forEach((setting) => {
          if (setting.slug === "ADDRESS") {
            setAddress(setting.config_value);
          }
          if (setting.slug === "PHONE") {
            setPhone(setting.config_value);
          }
        });
      }
    } else getStaticProps({ setStaticProps, setError });
  }, [staticProps]);

  useEffect(() => {
    if (staticProps) {
    }
  }, [staticProps]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function postEnquiry(e) {
    e.preventDefault();
    if (handleValidations()) {
      let formData = new FormData();
      formData.append("email", inputs?.email);
      formData.append("name", inputs?.name);
      formData.append("subject", inputs?.subject);
      formData.append("mobile", inputs?.phone);
      formData.append("message", inputs?.enquiry);
      setLoading(true);
      const response = await api({
        url: `/enquiry`,
        method: "post",
        data: inputs,
      });
      setLoading(false);
      console.log(response);
      if (response?.status === 200 && response?.data?.status === true) {
        toast.success(response?.data?.message);
        setInputs(contactFormFields);
      } else toast.error(response?.data?.message);
    }
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
      } else if (e.target.name === "subject") {
        error = {
          ...errors,
          subject: checkSubject(e.target.value),
        };
      } else if (e.target.name === "phone") {
        error = {
          ...errors,
          phone: checkPhone(e.target.value),
        };
      } else if (e.target.name === "enquiry") {
        error = {
          ...errors,
          enquiry: checkEnquiry(e.target.value),
        };
      }
    } else
      error = {
        email: checkEmail(inputs?.email),
        name: checkName(inputs?.name),
        subject: checkSubject(inputs?.subject),
        phone: checkPhone(inputs?.phone),
        enquiry: checkEnquiry(inputs?.enquiry),
      };

    if (
      error.email ||
      error.name ||
      error.subject ||
      error.phone ||
      error.enquiry
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
          <h1>Contact Us</h1>
          <ul className="breadcrumbs">
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Contact Us</span>
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
                <h3>Send a message</h3>
                <img src={mailing} alt="mail" />
              </div>
              <form className="contact-form" onSubmit={postEnquiry}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the subject"
                        onChange={handleInputChange}
                        value={inputs?.subject}
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
                        value={inputs?.name}
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
                        value={inputs?.email}
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
                        value={inputs?.phone}
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
                      <label>Enquiry</label>
                      <textarea
                        className="form-control"
                        value={inputs?.enquiry}
                        onChange={handleInputChange}
                        name="enquiry"
                      ></textarea>
                      {errors?.enquiry ? (
                        <div className="validation">{errors?.enquiry}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <button className="btn btn-custom" name="submit" type="submit">
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
                  <p>{address}</p>
                </div>
                <div className="link-block">
                  <i className="fas fa-mobile-alt"></i>
                  <p>{phone}</p>
                </div>
                <div className="link-block">
                  <span onClick={() => setOpen(!open)}>
                    Subscribe Newsletter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--modal-popup--newsletter--> */}
      <Modal view={open} close={() => setOpen(false)} setView={setOpen} />
    </div>
  );
}
