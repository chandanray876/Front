import React, { useState, useEffect } from "react";
import JobSideBar from "./JobSidebar";
import JobHeader from "./Header";
import JobMap from "./Map";
import JobDetail from "./JobDetail";
import { api } from "../../_api/apiService";

export default function BrowseJob() {
  const [check, setCheck] = useState("browse_job");
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const handleChange = (value) => {
    setCheck(value);
  };

  async function fetchJobs() {
    setLoading(true);
    const response = await api({
      url: `/jobs-list`,
      method: "GET",
    });
    if (response?.data?.code === 200) {
      setJobs(response?.data?.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (!jobs.length) fetchJobs();
  }, []); // eslint-disable-line

  return (
    <>
      <JobHeader />
      <div className="job-map-page inner-page-content">
        <div className="map-block d-flex">
          <JobSideBar
            handleChange={handleChange}
            loading={loading}
            jobs={jobs}
          />
          {check === "browse_job" ? <JobMap /> : <JobDetail check={check} />}
        </div>
      </div>
    </>
  );
}
