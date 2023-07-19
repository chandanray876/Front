import React from "react";
import { termBanner } from "../../assets/images/index";
import { ListFixer } from "../../utils/fixers";
import { Storage_URL } from "../../config";

export default function List() {
  return (
    <div>
      <div className="inner-banner">
        <img src={termBanner} alt="terms and condition" />
        <div className="inner-banner-text">
          <h1>List</h1>
          <ul className="breadcrumbs">
            <li>
              {/* <NavLink to='/'>Home</NavLink> */}
              <a className='breadcrumbs-link' href="/" onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </li>
            <li>
              <span>List</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="cms-content inner-page-content">
        <div className="row custom-margin">
          {ListFixer?.map((item, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
              <div
                className="why-choose-block d-flex justify-content-between flex-wrap"
                key={index}
              >
                <i>
                  <img src={item.icon1} className="icon1" alt="" />
                  <img src={item.icon2} className="icon2" alt="" />
                </i>
                <div className="why-choose-content">
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>

                  <a href={Storage_URL+item.url} target="_blank" rel="noreferrer">See PDF</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
