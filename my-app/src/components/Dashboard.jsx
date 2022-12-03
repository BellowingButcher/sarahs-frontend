import React from "react";
import authService from "../services/auth.service";
import { useGlobalState } from "../context/GlobalState";
import Login from "./LogIn";
import ScheduleButton from "./ScheduleButton";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import ReportChoices from "./ReportChoices";
import TMA from "./TMA";
import TMB from "./TMB";
import RunReportsButton from "./RunReportsButton";

function Dashboard() {
  const [state, dispatch] = useGlobalState();
  let authorizer = state.currentUser;
  // console.log(JSON.parse(JSON.stringify(authorizer)));
  if (authorizer.token_type == "access") {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block sidebar collapse bg-success"
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <ScheduleButton />
                <StartDate />
                <EndDate />
                <ReportChoices />
                <TMA />
                <TMB />
                <RunReportsButton />
              </ul>
            </div>
          </nav>
          <div className="col">
            <div className="row bg-success">
              <p className="col">Hello, {authorizer.username}</p>
              <div className="col">
                <a href="/">
                  <button onClick={authService.logout}>Log out</button>
                </a>
              </div>
            </div>
          </div>
          <div>TODO: CHARTS GO HERE</div>
        </div>
      </div>
    );
  } else return <Login />;
}

export default Dashboard;
