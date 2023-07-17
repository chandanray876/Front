import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../Modal";
import { avatar, postTask } from "../../assets/images/index";
import { UserContext } from "../../context/userContext";
// import { api } from "../../_api/apiService";

export default function Header({props}) {
  const { user, updateUser } = useContext(UserContext);
  const location = useLocation();
  const { logo } = props;
  // const [categories, setCategories] = useState([]);
  const [dropdownClass, setDropdownClass] = useState(null);
  const [subDropdown, setSubDropdown] = useState("TASKER");
  const [modalView, setModalView] = useState(null);
  const [logoutMenu, setLogoutMenu] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const categoriesRef = useRef(null);
  const logoutRef = useRef(null);

  // async function fetchCategories() {
  //   const response = await api({
  //     url: `/categories-list`,
  //     method: "GET",
  //   });
  //   if (response.data.code === 200) {
  //     setCategories(response.data.data);
  //   }
  // }

  // useEffect(() => {
  //   if (!categories.length) fetchCategories();
  // }, []); // eslint-disable-line

  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/login") setModalView("SignIn");
  }, [location]); // eslint-disable-line

  function handleDropdown(e) {
    if (e.target.nextSibling.className.includes("show")) setDropdownClass(null);
    else setDropdownClass(e.target.nextSibling.className + " show");
  }

  function handleSubDropdown(e) {
    setSubDropdown(e.target.innerText);
  }

  // User logout
  function handleLogout() {
    updateUser({});
  }

  // useEffect(() => {
  //   // Alert if clicked on outside of element
  //   function handleClickOutside(event) {
  //     if (
  //       categoriesRef.current &&
  //       !categoriesRef.current.contains(event.target)
  //     )
  //       setDropdownClass(null);
  //     if (logoutRef.current && !logoutRef.current.contains(event.target))
  //       setLogoutMenu(null);
  //   }
  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [categoriesRef, logoutRef]);

  return (
    <header
      className={`site-header ${user?.email ? "dashboard" : "inner"}-header`}
    >
      <div className="head-top-bar">
        <nav
          className={`navbar navbar-expand-lg navbar-light ${
            scrollPosition > 300 ? "nav-shrink" : ""
          }`}
        >
          <div className={`container${user?.email ? "-2" : ""}`}>
            <span
              className="post-task-link icon"
              data-toggle="modal"
              data-target="#postjob-popup"
            >
              <span>Post a task</span>
              <img src={postTask} alt="mob-post" />
            </span>{" "}
            <span className="navbar-brand">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
                <img src={logo} alt="logo" className="logo-shrink" />
              </Link>
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/post_job">
                    <span
                      className="nav-link post-job"
                      data-toggle="modal"
                      data-target="#postjob-popup"
                    >
                      Post a Job
                    </span>
                  </Link>
                </li>
                <li
                  ref={categoriesRef}
                  className="nav-item dropdown desk-category"
                >
                  <span
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={handleDropdown}
                  >
                    Categories
                  </span>
                  <div
                    className={
                      dropdownClass || "dropdown-menu category-dropdown"
                    }
                  >
                    <span className="cat-drop-title">
                      What are you looking for?
                    </span>
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs category-tab">
                      <li className="nav-item" onClick={handleSubDropdown}>
                        <span
                          className={`nav-link${
                            subDropdown === "TASKER" ? " active" : ""
                          }`}
                          data-toggle="tab"
                        >
                          TASKER
                        </span>
                      </li>
                      <li className="nav-item" onClick={handleSubDropdown}>
                        <span
                          className={`nav-link${
                            subDropdown === "POSTER" ? " active" : ""
                          }`}
                          data-toggle="tab"
                        >
                          POSTER
                        </span>
                      </li>
                    </ul>
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                      <div
                        className={`tab-pane${
                          subDropdown === "TASKER" ? " active" : " fade"
                        }`}
                        id="tasker"
                      >
                        <p>I am looking for work in...</p>
                        {/* <div className="tab-catlist-outer">
                          <ul className="tab-catlist">
                            {categories &&
                              categories.map((category, index) => (
                                <li key={index}>
                                  <span>{category.title}</span>
                                </li>
                              ))}
                          </ul>
                        </div> */}
                      </div>
                      <div
                        className={`tab-pane${
                          subDropdown === "POSTER" ? " active" : " fade"
                        }`}
                        id="posters"
                      >
                        <p>I need to hire someone for...</p>
                        {/* <div className="tab-catlist-outer">
                          <ul className="tab-catlist">
                            {categories &&
                              categories.map((category, index) => (
                                <li key={index}>
                                  <span>{category.title}</span>
                                </li>
                              ))}
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown mob-category">
                  <span
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Categories for Posters
                  </span>
                  <div className="dropdown-menu mobtab-catlist">
                    <ul>
                      <li>
                        <span>Accounting</span>
                      </li>
                      <li>
                        <span>Admin Assistant</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown mob-category">
                  <span
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Categories for Tasker
                  </span>
                  <div className="dropdown-menu mobtab-catlist">
                    <ul>
                      <li>
                        <span>Accounting</span>
                      </li>
                      <li>
                        <span>Admin Assistant</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="nav-item"
                  onClick={() => setModalView("BrowseTasks")}
                >
                  <span className="nav-link">Browse tasks</span>
                </li>
                <li className="nav-item">
                  <Link to="/how_it_works">
                    <span className="nav-link">How it works</span>
                  </Link>
                </li>
              </ul>
              <div className="right-menu d-flex flex-wrap align-items-center">
                {user?.email ? (
                  <>
                    <span>Help</span>
                    <span>Notification</span>
                    <span>Message</span>
                    <div
                      ref={logoutRef}
                      className="dropdown user-drop"
                      onClick={() =>
                        setLogoutMenu((isActive) => (isActive ? null : "show"))
                      }
                    >
                      <span
                        className="dropdown-toggle d-flex align-items-center"
                        data-toggle="dropdown"
                      >
                        <img className="drop-userimg" src={avatar} alt="img" />
                        <span>{user?.name?.split(" ")[0]}</span>
                      </span>
                      <div className={`dropdown-menu ${logoutMenu}`}>
                        <Link
                          to={
                            user?.userType === "Tasker"
                              ? "tasker/profile"
                              : "profile"
                          }
                        >
                          <span className="dropdown-item">Dashboard</span>
                        </Link>
                        <Link to={() => false}>
                          <span className="dropdown-item">Setting</span>
                        </Link>
                        <Link to={() => false}>
                          <span
                            className="dropdown-item"
                            onClick={handleLogout}
                          >
                            Logout
                          </span>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <span
                      className="nav-link"
                      onClick={() => setModalView("SignUp")}
                    >
                      Sign up
                    </span>
                    <span
                      className="nav-link"
                      onClick={() => setModalView("SignIn")}
                    >
                      Log in
                    </span>
                    <span>
                      <span className="become-job">Become a Job</span>
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Modal
        view={modalView}
        close={() => setModalView(null)}
        setView={setModalView}
      />
    </header>
  );
}
