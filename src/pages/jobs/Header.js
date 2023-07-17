import React, { useState } from "react";

export default function JobHeader() {
  const [taskMenuOne, setTaskMenuOne] = useState(false);
  const [taskMenuTwo, setTaskMenuTwo] = useState(false);
  const [taskMenuThree, setTaskMenuThree] = useState(false);

  return (
    <>
      <div className="job-filter">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="filter-left">
              <div className="desk-filter">
                <div className="dropdown filter-dropdown show">
                  <button
                    type="button"
                    className="btn btn-filter dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                    onClick={() => {
                      setTaskMenuOne(!taskMenuOne);
                      setTaskMenuTwo(false);
                      setTaskMenuThree(false);
                    }}
                  >
                    Task to be done
                  </button>

                  <div
                    className={`dropdown-menu filter-dropmenu ${
                      taskMenuOne ? "show" : ""
                    }`}
                  >
                    <div className="filter-body">
                      <span className="filter-droptitle text-uppercase">
                        Task to be done
                      </span>
                      <ul className="fltask-list">
                        <li>
                          <div className="custom-radio">
                            <input
                              id="buy"
                              type="radio"
                              name="propfor"
                              checked=""
                              onChange={(e) => {}}
                            />
                            <label htmlFor="buy">
                              In person{" "}
                              <span>
                                <i className="fas fa-check"></i>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-radio">
                            <input
                              id="sell"
                              type="radio"
                              name="propfor"
                              onChange={(e) => {}}
                            />
                            <label htmlFor="sell">
                              Remotely{" "}
                              <span>
                                <i className="fas fa-check"></i>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-radio">
                            <input
                              id="rent"
                              type="radio"
                              name="propfor"
                              onChange={(e) => {}}
                            />
                            <label htmlFor="rent">
                              All{" "}
                              <span>
                                <i className="fas fa-check"></i>
                              </span>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <div className="form-group">
                        <label>Suburb</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Noida, Uttar Pradesh"
                          onChange={(e) => {}}
                        />
                      </div>
                    </div>
                    <div className="filter-footer">
                      <button className="btn btn-custom back-btn btn-sm">
                        Cancel
                      </button>
                      <button className="btn btn-custom btn-sm">Apply</button>
                    </div>
                  </div>
                </div>
                <div className="dropdown filter-dropdown show">
                  <button
                    type="button"
                    className="btn btn-filter dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                    onClick={() => {
                      setTaskMenuOne(false);
                      setTaskMenuTwo(!taskMenuTwo);
                      setTaskMenuThree(false);
                    }}
                  >
                    Task Priceee
                  </button>

                  <div
                    className={`dropdown-menu filter-dropmenu ${
                      taskMenuTwo ? "show" : ""
                    }`}
                  >
                    <div className="filter-body">
                      <p>Lorem ipsum is dummy text.</p>
                    </div>
                  </div>
                </div>
                <div className="dropdown filter-dropdown show">
                  <button
                    type="button"
                    className="btn btn-filter dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                    onClick={() => {
                      setTaskMenuOne(false);
                      setTaskMenuTwo(false);
                      setTaskMenuThree(!taskMenuThree);
                    }}
                  >
                    Task Type
                  </button>

                  <div
                    className={`dropdown-menu filter-dropmenu ${
                      taskMenuThree ? "show" : ""
                    }`}
                  >
                    <div className="filter-body">
                      <span className="filter-droptitle text-uppercase">
                        Task Type
                      </span>
                      <div className="fl-task d-flex">
                        <div className="fl-task-left">
                          <span>Suggested for you</span>
                          <p>Show tasks based on your history</p>
                        </div>
                        <div className="fl-task-right">
                          <label className="custom-switch switch">
                            <input
                              type="checkbox"
                              checked
                              onChange={(e) => {}}
                            />
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                      <div className="fl-task d-flex">
                        <div className="fl-task-left">
                          <span>Available tasks only</span>
                          <p>Hide tasks that are already assigned</p>
                        </div>
                        <div className="fl-task-right">
                          <label className="custom-switch switch">
                            <input type="checkbox" onChange={(e) => {}} />
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="filter-footer">
                      <button className="btn btn-custom back-btn btn-sm">
                        Cancel
                      </button>
                      <button className="btn btn-custom btn-sm">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-right">
              <input
                className="form-control filter-search"
                placeholder="Search"
              />
              <button className="mob-search-btn">
                <i className="fas fa-search mob-search"></i>
                <i className="far fa-times-circle mob-close"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
