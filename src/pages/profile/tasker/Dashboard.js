import React from "react";
import {
  booking,
  booking1,
  credit,
  earning,
  offer1,
  offer1HR,
  offer2,
  offer2HR,
  offer3,
  offer3HR,
  offer4,
  offer4HR,
  offer5,
  offer5HR,
  offer6,
  offer6HR,
  offer7,
  offer7HR,
  offer8,
  offer8HR,
  offer9,
  offer9HR,
  offer10,
  offer10HR,
  reqPending,
} from "../../../assets/images";

export default function TaskerDashboard() {
  return (
    <div id="main" class="dashboard-content">
      <div class="dash-con-inner">
        <div class="row">
          <div class="col-md-3">
            <div class="counting-card">
              <p>Total booking</p>
              <div class="count-botttom d-flex align-items-center justify-content-between">
                <h3>0</h3>
                <img src={booking} alt="Total Booking" />
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counting-card">
              <p>Request Pending</p>
              <div class="count-botttom d-flex align-items-center justify-content-between">
                <h3>0</h3>
                <img src={reqPending} alt="Total Booking" />
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counting-card">
              <p>Total earning</p>
              <div class="count-botttom d-flex align-items-center justify-content-between">
                <h3>0</h3>
                <img src={earning} alt="Total Booking" />
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="counting-card">
              <p>wallet credits</p>
              <div class="count-botttom d-flex align-items-center justify-content-between">
                <h3>0</h3>
                <img src={credit} alt="Total Booking" />
              </div>
            </div>
          </div>
        </div>
        <div class="task-offer dashright-block">
          <h2>Post a task & get offers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
          </p>
          <ul class="task-list d-flex flex-wrap">
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer1} alt="dash-pay" class="task-img" />
                    <img src={offer1HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Furniture Assembly</span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer2} alt="dash-pay" class="task-img" />
                    <img src={offer2HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Delivery</span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer3} alt="dash-pay" class="task-img" />
                    <img src={offer3HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Home & Gardening</span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer4} alt="dash-pay" class="task-img" />
                    <img src={offer4HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Computers & IT</span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer5} alt="dash-pay" class="task-img" />
                    <img src={offer5HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Events & Photography</span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer6} alt="dash-pay" class="task-img" />
                    <img src={offer6HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Handyman</span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer7} alt="dash-pay" class="task-img" />
                    <img src={offer7HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Fun & Quirky</span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer8} alt="dash-pay" class="task-img" />
                    <img src={offer8HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Business & Admin</span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer9} alt="dash-pay" class="task-img" />
                    <img src={offer9HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Marketing & Design</span>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="task-listbox d-flex flex-wrap justify-content-center align-items-center">
                  <span class="task-icon d-flex justify-content-center align-items-center">
                    <img src={offer10} alt="dash-pay" class="task-img" />
                    <img src={offer10HR} alt="dash-pay" class="task-hrimg" />
                  </span>
                  <span class="task-title">Tutoring & Training</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="instant-booking dashright-block">
          <h2>Popular Instant Bookings</h2>
          <div class="booking-slider owl-carousel owl-theme">
            <div class="item">
              <a href={() => false} class="booking-block">
                <span class="booking-img">
                  <img src={booking1} alt="" />
                  <span class="task-price">From $88</span>
                </span>
                <span class="booking-content">
                  <span class="booking-title">Once-off 2BR home clean</span>
                  <p>2 Bedroom, 1 Bathroom</p>
                </span>
              </a>
            </div>
            <div class="item">
              <a href={() => false} class="booking-block">
                <span class="booking-img">
                  <img src={booking1} alt="" />
                  <span class="task-price">From $88</span>
                </span>
                <span class="booking-content">
                  <span class="booking-title">Once-off 2BR home clean</span>
                  <p>2 Bedroom, 1 Bathroom</p>
                </span>
              </a>
            </div>
            <div class="item">
              <a href={() => false} class="booking-block">
                <span class="booking-img">
                  <img src={booking1} alt="" />
                  <span class="task-price">From $88</span>
                </span>
                <span class="booking-content">
                  <span class="booking-title">Once-off 2BR home clean</span>
                  <p>2 Bedroom, 1 Bathroom</p>
                </span>
              </a>
            </div>
            <div class="item">
              <a href={() => false} class="booking-block">
                <span class="booking-img">
                  <img src={booking1} alt="" />
                  <span class="task-price">From $88</span>
                </span>
                <span class="booking-content">
                  <span class="booking-title">Once-off 2BR home clean</span>
                  <p>2 Bedroom, 1 Bathroom</p>
                </span>
              </a>
            </div>
            <div class="item">
              <a href={() => false} class="booking-block">
                <span class="booking-img">
                  <img src={booking1} alt="" />
                  <span class="task-price">From $88</span>
                </span>
                <span class="booking-content">
                  <span class="booking-title">Once-off 2BR home clean</span>
                  <p>2 Bedroom, 1 Bathroom</p>
                </span>
              </a>
            </div>
            <div class="item">
              <a href={() => false} class="booking-block">
                <span class="booking-img">
                  <img src={booking1} alt="" />
                  <span class="task-price">From $88</span>
                </span>
                <span class="booking-content">
                  <span class="booking-title">Once-off 2BR home clean</span>
                  <p>2 Bedroom, 1 Bathroom</p>
                </span>
              </a>
            </div>
            <div class="item">
              <a href={() => false} class="booking-block">
                <span class="booking-img">
                  <img src={booking1} alt="" />
                  <span class="task-price">From $88</span>
                </span>
                <span class="booking-content">
                  <span class="booking-title">Once-off 2BR home clean</span>
                  <p>2 Bedroom, 1 Bathroom</p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
