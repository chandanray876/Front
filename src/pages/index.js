import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import {
  completedTaskFixer,
  monthNames,
  popularServicesFixer,
  serviceFinderFixer,
  whyChoosefixer,
} from "../utils/fixers";
import Loader from "../components/Loader";
import {
  serviceIcon1,
  serviceIcon2,
  serviceIcon3,
  serviceIcon4,
  serviceIcon5,
  serviceIcon6,
  tag,
  whyChooseUs,
} from "../assets/images";
import { api } from "../_api/apiService";

export default function Home() {
  const { banner } = useOutletContext();
  const [blogList, setBlogList] = useState([]);
  const [testimonialsList, setTestimonialsList] = useState([]);

  async function fetchBlogs() {
    const { data } = await api({
      url: `/blog-list`,
      method: "GET"
    });
    setBlogList(data.data);
  }

  async function fetchTestimonials() {
    const { data } = await api({
      url: `/get-testimonial-list`,
      method: "GET",
    });
    setTestimonialsList(data.data);
  }

  useEffect(() => {
    if (!blogList.length) fetchBlogs();
    if (!testimonialsList.length) fetchTestimonials();
  }, []); // eslint-disable-line

  return (
    <>
      <div className="home-page-banner">
        <div className="container">
          <span className="banner-img">
            <img src={banner} alt="" />
          </span>
          <div className="search-section">
            <h1>3,000+ service provider</h1>
            <span className="sub-heading">
              Use Our awesome Search tool to FIND service provider!!!
            </span>
            {/* <div className="d-flex flex-wrap justify-content-between">
              <div className="search-input-field">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        className="form-control"
                        placeholder="Job title, keywords or company name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        className="form-control"
                        placeholder="City, Province or region"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-secton">
                <button type="button" className="search-btn">
                  Search
                </button>
              </div>
            </div>
            <span className="trending-keywords">
              <i>
                <img src={tag} alt="" />
              </i>
              Trending Keywords: Clown, Cocktails specialist, DJ music player,
              Dancers, Chef, Host
            </span> */}
          </div>
          <i className="serervice-icon1">
            <img src={serviceIcon1} alt="" />
          </i>
          <i className="serervice-icon2">
            <img src={serviceIcon2} alt="" />
          </i>
          <i className="serervice-icon3">
            <img src={serviceIcon3} alt="" />
          </i>
          <i className="serervice-icon4">
            <img src={serviceIcon4} alt="" />
          </i>
          <i className="serervice-icon5">
            <img src={serviceIcon5} alt="" />
          </i>
          <i className="serervice-icon6">
            <img src={serviceIcon6} alt="" />
          </i>
        </div>
      </div>
      <div className="popular-services mid-block">
        <div className="container">
          <h2>Popular Professional Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          {!popularServicesFixer.length ? (
            <Loader height={50} width={10} />
          ) : (
            <OwlCarousel
              items={4}
              margin={8}
              className="popular-service-slider owl-carousel owl-theme"
              nav
            >
              {popularServicesFixer?.map((item, index) => (
                <div className="item" key={index}>
                  <Link to="list">
                    <span className="item-img">
                      <img src={item.image} alt="" />
                    </span>
                    <span>{item.taskerType}</span>
                  </Link>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </div>
      <div className="how-service-finder-works mid-block text-center">
        <div className="container">
          <h2>How Service Finder Works</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          </p>
          <div className="row">
            {!serviceFinderFixer.length ? (
              <Loader height={50} width={10} />
            ) : (
              serviceFinderFixer?.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="service-finder-block create-account">
                    <img src={item.boxImage} alt="" />
                    <div className="service-inn">
                      <i>
                        <img src={item.actionIcon} alt="" />
                      </i>
                      <h3>Create An Account</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          </p>
          <div className="d-flex flex-wrap">
            <div className="why-choose-col1">
              <img src={whyChooseUs} alt="" />
            </div>
            <div className="why-choose-col2">
              {!whyChoosefixer.length ? (
                <Loader height={50} width={10} />
              ) : (
                whyChoosefixer?.map((item, index) => (
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
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="what-people-says mid-block text-center">
        <h2>What People Says</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
        {!testimonialsList.length ? (
          <Loader height={50} width={10} />
        ) : (
          <OwlCarousel
            items={3}
            margin={8}
            className="testimonial-slider owl-carousel owl-theme"
            nav
            center={true}
            loop={true}
          >
            {testimonialsList?.map((testimonial, index) => (
              <div className="item" key={index}>
                <div className="customer-block">
                  <div className="customer-comment">{testimonial.description}</div>
                  <div className="customer-info">
                    <figure>
                      <img src={serviceIcon6} alt="" />
                    </figure>
                    <p className="customer-name">{testimonial.name}</p>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
      {/* <div className="popular-services mid-block">
        <div className="container">
          <h2>See what others are getting done</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          {!completedTaskFixer.length ? (
            <Loader height={50} width={10} />
          ) : (
            <OwlCarousel
              items={3}
              margin={8}
              className="profess-service-slider owl-carousel owl-theme"
              nav
            >
              {completedTaskFixer?.map((task, index) => (
                <div className="item" key={index}>
                  <div className="service-block">
                    <div className="service-top d-flex align-items-center justify-content-between">
                      <span>{task.status}</span>
                      <span className="service-amount">{task.price}</span>
                    </div>
                    <div className="service-bottom d-flex justify-content-between">
                      <i>
                        <img src={task.image} alt="service" />
                      </i>
                      <div className="service-content">
                        <p>{task.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </div> */}
      {/* <div className="get-started mid-block text-center">
        <div className="container">
          <h2>Get Started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          </p>
          <div className="d-block">
            <span className="btn-bdr">Existing User</span>
            <span className="btn-gradient">New User</span>
          </div>
        </div>
      </div> */}
      {/* <div className="our-blog mid-block text-center">
        <div className="container">
          <h2>Our Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          </p>
          <div className="row">
            {!blogList.length ? (
              <Loader height={50} width={10} />
            ) : (
              blogList
                ?.slice(0, 3)
                .filter((blog) => blog.status)
                .map((blog, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="blog-list">
                      <figure>
                        <img src={blog.blog_image_path} alt="" />
                        <div className="date-sec">
                          <span className="date-top">
                            <em>
                              {blog.created_at.split("-")[2].substring(0, 2)}
                            </em>
                            {
                              monthNames[
                                parseInt(blog.created_at?.split("-")[1]) - 1
                              ]
                            }
                          </span>
                          <span className="date-btm">
                            <i className="far fa-comment" /> {blog.comment || 0}
                          </span>
                        </div>
                      </figure>
                      <div className="list-content">
                        <div className="blog-list-title">{blog.title}</div>
                        <p>{blog?.sub_title}</p>
                        <span className="d-block">
                          <Link to={`/blog_detail/${blog.id}`}>
                            Read More{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div> */}
    </>
  );
}
