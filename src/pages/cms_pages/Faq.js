import React, { useState, useEffect } from "react";
import { faqBanner } from "../../assets/images/index";
import { getCMSPages } from "../../_api/staticPageServices";
import BadRequest from "../500";
import Loader from "../../components/Loader";

export default function FAQ() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    getCMSPages("faqdetails", {
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
        <img src={faqBanner} alt="terms and condition" />
        <div className="inner-banner-text">
          <h1>FAQ</h1>
          <ul className="breadcrumbs">
            <li>
              <a href={() => false}>Home</a>
            </li>
            <li>
              <span>Faq</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="inner-page-content">
        <div className="container">
          <h2 className="text-center">Frequently Asked Question</h2>
          <div className="faq-block">
            {loading ? (
              <Loader height={100} width={15} />
            ) : (
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-4 faq-left">
                    <ul className="nav nav-tabs faq-tabs">
                      {items?.data?.map((item, ind) => (
                        <li className="nav-item" key={ind}>
                          <a
                            className={`nav-link ${
                              index === ind ? "active" : ""
                            } `}
                            data-toggle="tab"
                            href={() => false}
                            onClick={() => setIndex(ind)}
                          >
                            {item.question}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-9 col-md-8 faq-right">
                    <div className="tab-content faq-tab-content">
                      <div className="tab-pane container active">
                        <h2 className="faq-head">
                          {items?.data?.[index]?.question}
                        </h2>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: items?.data?.[index]?.answer,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
