import React, { useState } from "react";
import request from "../services/api.request";
import ScheduleList from "./ScheduleList";

function Filters() {
  const [reportType, setReportType] = useState("");
  const [objSchedules, setObjSchedules] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [tma, setTma] = useState();
  const [tmb, setTmb] = useState();

  function filterButton() {
    console.log("you have pressed the run filters button");
    request({
      url: "/save/",
      method: "GET",
    }).then((res) => {
      console.log("res.data:", res.data);
      setObjSchedules(res.data);
      console.log("setObjSchedules: ", objSchedules);
      setReportType("Schedules");
      console.log("reportType: ", reportType);
    });
  }
  if (reportType === "") {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  </svg>
                  <label className="pb-1">Start date: </label>
                </div>
                <div className="col-6">
                  <input
                    type="date"
                    onChange={(e) => {
                      setStart(e.currentTarget);
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  </svg>
                  <label className="pb-1">End date: </label>
                </div>
                <div className="col-6">
                  <input
                    type="date"
                    onChange={(e) => {
                      setEnd(e.currentTarget);
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bar-chart-2 align-text-bottom"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                  Reports:
                </div>
                <div className="col-6">
                  <select name="reports" id="report-choice" className="pl-4">
                    <option value="">Select Report Type</option>
                    <option value="schedules">Schedules</option>
                    <option value="team members">Team Members</option>
                    <option value="job titles">Job Titles</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  <label className="pb-1">Team Member A:</label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    onChange={(e) => {
                      setTma(e.currentTarget);
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  <label className="pb-1">Team Member B: </label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    onChange={(e) => {
                      setTmb(e.currentTarget);
                    }}
                  />
                </div>
              </div>

              <div className="row pb-4">
                <div className="col text-center pt-2">
                  <button
                    className="btn btn-success active"
                    onClick={filterButton}
                  >
                    Report Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (reportType === "Schedules") {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  </svg>
                  <label className="pb-1">Start date: </label>
                </div>
                <div className="col-6">
                  <input
                    type="date"
                    onChange={(e) => {
                      setStart(e.currentTarget);
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  </svg>
                  <label className="pb-1">End date: </label>
                </div>
                <div className="col-6">
                  <input
                    type="date"
                    onChange={(e) => {
                      setEnd(e.currentTarget);
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bar-chart-2 align-text-bottom"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                  Reports:
                </div>
                <div className="col-6">
                  <select name="reports" id="report-choice" className="pl-4">
                    <option value="">Select Report Type</option>
                    <option value="schedules">Schedules</option>
                    <option value="team members">Team Members</option>
                    <option value="job titles">Job Titles</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  <label className="pb-1">Team Member A:</label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    onChange={(e) => {
                      setTma(e.currentTarget);
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 text-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  <label className="pb-1">Team Member B: </label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    onChange={(e) => {
                      setTmb(e.currentTarget);
                    }}
                  />
                </div>
              </div>

              <div className="row pb-4">
                <div className="col text-center pt-2">
                  <button
                    className="btn btn-success active"
                    onClick={filterButton}
                  >
                    Report Results
                  </button>
                </div>
              </div>

              <hr className="bg-success" />

              <div className="row">
                <div className="col d-flex mx-auto">
                  <ScheduleList data={objSchedules} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Filters;
