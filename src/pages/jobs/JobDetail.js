import React from "react";
import { customerImg, cocktails } from "../../assets/images";

export default function JobDetail({ check }) {
  console.log("check", check);
  return (
    <>
      <div className="map-right job-detail">
        <div className="job-detail-top d-flex justify-content-between flex-wrap">
          <div className="job-dtleft d-flex align-items-start">
            <div className="jbtask-img">
              <img src={customerImg} alt="img" />
            </div>
            <div className="jbtask-text">
              <span className="jbtask-title d-block">
                Need someone to proof read case study
              </span>
              <ul className="location-list d-flex flex-wrap">
                <li>
                  <i className="far fa-calendar"></i>Sunday, 23rd Aug 2020
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>Remote
                </li>
                <li>
                  <a href={() => false}>
                    <i className="far fa-sticky-note"></i>Kodi H.
                  </a>
                </li>
              </ul>
              <div className="jbtask-status">
                <span className="task-time">
                  <i className="far fa-clock"></i>2 hours, ago
                </span>
                <span className="task-status text-uppercase">Open</span>
              </div>
            </div>
          </div>
          <div className="job-dtright">
            <div className="task-budget">
              <span>$15</span>
              <p className="text-uppercase">Task Budget</p>
              <button>Make an offer</button>
            </div>
          </div>
        </div>
        <div className="job-dt-box">
          <span className="jb-title">Details</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry{" "}
            <a href={() => false}>Read More</a>
          </p>
        </div>
        <div className="job-dt-box">
          <span className="jb-title">Offers</span>
          <div className="offer-box">
            <div className="offer-top d-flex justify-content-between align-items-center flex-wrap">
              <div className="offer-left d-flex align-items-center">
                <div className="offer-img">
                  <img src={customerImg} alt="offerimg" />
                </div>
                <div className="offer-title">
                  <span className="off-name">
                    <a href={() => false}>Laura L.</a>
                  </span>
                  <p>81% Completion rate</p>
                </div>
              </div>
              <div className="offer-right">
                <div className="star-rating-outer d-flex">
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="rating-text">4.0 (19)</span>
                </div>
                <ul className="offer-info d-flex">
                  <li>4 hours ago</li>
                  <li>
                    <a href={() => false}>
                      <i className="fas fa-reply"></i> Reply
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
              <a href={() => false}>Read More</a>
            </p>
          </div>
          <div className="offer-box">
            <div className="offer-top d-flex justify-content-between align-items-center flex-wrap">
              <div className="offer-left d-flex align-items-center">
                <div className="offer-img">
                  <img src={customerImg} alt="offerimg" />
                </div>
                <div className="offer-title">
                  <span className="off-name">
                    <a href={() => false}>Laura L.</a>
                  </span>
                  <p>81% Completion rate</p>
                </div>
              </div>
              <div className="offer-right">
                <div className="star-rating-outer d-flex">
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="rating-text">4.0 (19)</span>
                </div>
                <ul className="offer-info d-flex">
                  <li>4 hours ago</li>
                  <li>
                    <a href={() => false}>
                      <i className="fas fa-reply"></i> Reply
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
              <a href={() => false}>Read More</a>
            </p>
          </div>
        </div>

        <div className="job-dt-box">
          <span className="jb-title">Reviews</span>
          <div className="offer-box">
            <div className="offer-top d-flex justify-content-between align-items-center flex-wrap">
              <div className="offer-left d-flex align-items-center">
                <div className="offer-img">
                  <img src={customerImg} alt="offerimg" />
                </div>
                <div className="offer-title">
                  <span className="review-name">
                    <a href={() => false}>Ash A. </a>left a review for{" "}
                    <a href={() => false}>Laura L.</a>
                  </span>
                  <p>4 hours ago</p>
                </div>
              </div>
              <div className="offer-right">
                <div className="star-rating-outer">
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <div className="reply-block">
            <div className="d-flex reply-box">
              <div className="reply-img">
                <img src={customerImg} alt="offerimg" />
              </div>
              <div className="reply-content">
                <span className="off-name">
                  <a href={() => false}>Laura L.</a>
                </span>
                <span className="reply-date">4 hours ago</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button type="button" className="reply-btn">
                  <i className="far fa-comment-dots"></i>Reply
                </button>
              </div>
            </div>
            <div className="d-flex reply-box">
              <div className="reply-img">
                <img src={customerImg} alt="offerimg" />
              </div>
              <div className="reply-content">
                <span className="off-name">
                  <a href={() => false}>Laura L.</a>
                </span>
                <span className="reply-date">4 hours ago</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="attachment-img">
                  <img src={cocktails} alt="" />
                </div>
                <button type="button" className="reply-btn">
                  <i className="far fa-comment-dots"></i>Reply
                </button>
              </div>
            </div>
            <div className="d-flex reply-box">
              <div className="reply-img">
                <img src={customerImg} alt="offerimg" />
              </div>
              <div className="reply-content">
                <span className="off-name">
                  <a href={() => false}>Laura L.</a>
                </span>
                <span className="reply-date">4 hours ago</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
