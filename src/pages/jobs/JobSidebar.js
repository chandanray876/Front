import React from "react";
import { userImage, taskOnline, taskDate } from "../../assets/images";
import Loader from "../../components/Loader";

export default function JobSideBar({ handleChange, loading, jobs }) {
  const options = {
    weekday: "short",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <div className="map-left">
        <div className="job-list-scroll">
          <ul className="new-task-list">
            {loading ? (
              <Loader height={100} width={15} />
            ) : (
              jobs?.map((job, index) => (
                <li key={index} onClick={() => handleChange(job.id)}>
                  <span className="job-info d-flex">
                    <span className="job-info-left">
                      <img src={userImage} alt="avatar-img" />
                    </span>
                    <span className="job-info-right">
                      <span className="jtask-price">${job?.price}</span>
                      <span className="task-title">{job?.title}</span>
                      <span className="task-body d-flex">
                        <span>
                          <img src={taskOnline} alt="img" />
                          {job?.job_category === 1
                            ? "In Person"
                            : job?.job_category === 1
                            ? "Remotely"
                            : "All"}
                        </span>
                        <span>
                          <img src={taskDate} alt="img" />
                          {new Date(job?.available_date).toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </span>
                      </span>
                      <span className="task-footer d-flex justify-content-between align-items-center">
                        <span className="task-status">
                          {job?.status || "Open"}
                        </span>
                        <span className="task-bids">17 offers</span>
                      </span>
                    </span>
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
