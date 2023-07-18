import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Footer({ setting }) {
  const { logo, address, email, phone, appName } = setting;
  const location = useLocation();
  const { user } = useContext(UserContext);

  return (
    <footer
      className="footer"
      style={{
        display:
          location.pathname.includes("profile") ||
          location.pathname.includes("job_detail") ||
          location.pathname.includes("browse_job")
            ? "none"
            : "block",
      }}
    >
      <div className="container">
        <div className="ft-top">
          <div className="row">
            <div className="col-lg-4 col-md-6 ft-about">
              <p>
                <Link to="">
                  <img src={logo} alt="" />
                </Link>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincid unt ut laoreet dolore.
              </p>
              <ul className="ft-social d-flex">
                <li>
                  <Link to="">
                    <i className="fab fa-facebook-square" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fab fa-google" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fab fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 ft-links">
              {/* <span className="ft-link-head">Navigation</span>
              <ul className="ft-link">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link
                    to={
                      user?.userType === "Tasker" ? "tasker/profile" : "profile"
                    }
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/how_it_works">How It Works</Link>
                </li>
                <li>
                  <Link to="/about_us">About Us</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ’s</Link>
                </li>
                <li>
                  <Link to="/contact_us">Contact Us</Link>
                </li>
              </ul> */}
            </div>
            <div className="col-lg-3 col-md-6 quick-links">
              {/* <span className="ft-link-head">Quick Links</span>
              <ul className="ft-link">
                <li>
                  <Link to="/terms_conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy_policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Copyright Content</Link>
                </li>
                <li>
                  <Link to="/help_support">Help & Support</Link>
                </li>
              </ul> */}
            </div>
            <div className="col-lg-3 col-md-6">
              <span className="ft-link-head">Contacts</span>
              <ul className="ft-link">
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <span>{address}</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt" />
                  <span>{phone}</span>
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <span>{email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ft-bottom d-flex align-items-center justify-content-between">
          <p>
            <strong>&copy; {appName}</strong> 2022 | All Right Reserved
          </p>
          <div className="ft-bottom-link">
            <Link to="/">Home</Link>
            <Link to="/about_us">About us</Link>
            {/* <Link to="/blog">Blogs</Link> */}
            <Link to="/terms_conditions">Terms</Link>
            <Link to="/privacy_policy">Privacy</Link>
            <Link to="/contact_us">Contacts</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
