import React, { useState, useEffect } from "react";
import { termBanner } from "../../assets/images/index";
import { getCMSPages } from "../../_api/staticPageServices";
import BadRequest from "../500";
import Loader from "../../components/Loader";

export default function PrivacyPolicy() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    getCMSPages("privacy-policy", {
      setItems,
      setLoading,
      setError,
    });
  }, []);

  return error ? (
    <BadRequest />
  ) : (
    <div>
      <div className="inner-banner">
        <img src={termBanner} alt="terms and condition" />
        <div className="inner-banner-text">
          <h1>Privacy Policy</h1>
          <ul className="breadcrumbs">
            <li>
            <a className='breadcrumbs-link' href="/" onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </li>
            <li>
              <span>PRIVACY POLICY</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="cms-content inner-page-content">
        {loading ? (
          <Loader height={100} width={15} />
        ) : (
          <div
            className="container"
            dangerouslySetInnerHTML={{ __html: items.description }}
          />
        )}
      </div>
    </div>
  );
}
