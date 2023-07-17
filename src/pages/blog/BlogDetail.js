import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../_api/apiService";
import { blogBanner } from "../../assets/images/index";
import Loader from "../../components/Loader";

export default function BlogDetail() {
  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  async function fetchBlog() {
    const { data } = await api({
      url: `/get-blog?id=${id}`,
      method: "POST",
    });

    if (data?.code === 200 && data.status === true) setBlog(data?.data);
    // else setError(data?.message);
    setLoading(false);
  }

  useEffect(() => {
    fetchBlog();
  }, []); // eslint-disable-line

  return (
    <>
      <div className="inner-banner">
        <img src={blogBanner} alt="FAQ" />
        <div className="inner-banner-text">
          <h1>Blog Detail</h1>
          <ul className="breadcrumbs">
            <li>
              <a href={() => false}>Home</a>
            </li>
            <li>
              <span>Blog Detail</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog-page inner-page-content">
        <div className="container">
          {loading ? (
            <Loader height={100} width={15} />
          ) : (
            <div className="blog-detail">
              <h2>{blog?.title}</h2>
              <div className="post-info-top d-flex justify-content-between align-items-center flex-wrap">
                <ul className="post-info d-flex flex-wrap">
                  <li className="post-cat-list">
                    <a href={() => false} className="post-category">
                      {blog?.category?.title}
                    </a>
                  </li>
                  <li>
                    <span>By</span> {blog?.name}
                  </li>
                  <li>
                    <span>Updated</span>{" "}
                    {new Date(blog?.updated_at).toLocaleDateString(
                      "en-US",
                      options
                    )}
                  </li>
                </ul>
                <ul className="post-share">
                  <li>
                    <span>SHARE IT: </span>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-facebook-square"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-twitter-square"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="post-img">
                <img src={blog?.blog_image_path} alt="blog" />
              </div>
              <h6>{blog?.sub_title}</h6>
              <p
                className="entry-summary"
                dangerouslySetInnerHTML={{ __html: blog?.description }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
