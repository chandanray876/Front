import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../_api/apiService";
import { blogBanner } from "../../assets/images/index";
import Loader from "../../components/Loader";

export default function Blog() {
  const [blogsList, setBlogsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({ search: "" });

  async function fetchBlogs(filter = null) {
    setLoading(true);
    const { data } = await api({
      url: `/blog-list`,
      method: "POST",
      data: filter || "",
    });

    data?.code === 200 && data?.status === true
      ? setBlogsList(data.data)
      : toast.error("Blog not found");
    setLoading(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!blogsList.length) fetchBlogs();
  }, [blogsList]);

  function handleInputChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  async function searchBlog(e) {
    if (e.key === "Enter") {
      await fetchBlogs(inputs);
    }
  }

  return (
    <>
      <div className="inner-banner">
        <img src={blogBanner} alt="FAQ" />
        <div className="inner-banner-text">
          <h1>Blog</h1>
          <ul className="breadcrumbs">
            <li>
              <a href={() => false}>Home</a>
            </li>
            <li>
              <span>Blog</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog-page inner-page-content">
        <div className="container">
          <div className="blog-filter d-flex flex-wrap justify-content-between">
            <div className="blog-search">
              <input
                name="search"
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={handleInputChange}
                onKeyPress={searchBlog}
              />
            </div>
            <div className="blog-fl-right">
              <div className="form-group">
                <select className="form-control">
                  <option>All Topics</option>
                  <option>Buyers Guides</option>
                  <option>Events Planning</option>
                  <option>DIY Inspiration</option>
                  <option>Home Inspiration</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option>Ordered by date</option>
                  <option>Ordered by popularity</option>
                </select>
              </div>
            </div>
          </div>
          <ul className="blogs-listing d-flex flex-wrap">
            {loading ? (
              <Loader height={100} width={15} />
            ) : (
              blogsList?.map((blog, index) => (
                <li key={index}>
                  <Link to={`/blog_detail/${blog.id}`}>
                    <span className="blog-top">
                      <img src={blog?.blog_image_path} alt="blog1" />
                    </span>
                    <span className="blog-bottom">
                      <span className="post-detail d-flex align-items-center">
                        <span className="post-category">
                          {blog?.category?.title}
                        </span>
                        <span className="post-author">{blog?.name}</span>
                      </span>
                      <h3>{blog?.title}</h3>
                      <p>{blog?.sub_title}</p>
                    </span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
