import React from "react";
import { useNavigate } from "react-router-dom";
import { postTaskBack } from "../../assets/images/index";

export default function BrowseTasks({ setView }) {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
    setView(null);
  }
  return (
    <div className="modal-body posttask-modal pad0">
      <div className="posttask-top">
        <h2>Task Posted</h2>
        <div className="posttask-img">
          <img src={postTaskBack} alt="post-task" />
        </div>
      </div>
      <div className="posttask-content">
        <h2>pick an offer</h2>
        <p>
          Now tasker can ask questions and make offers to do your task- make
          sure you check back on it regularly!
        </p>

        <button
          className="btn btn-custom btn-sm"
          onClick={() => navigateTo("/browse_job")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
