import React, {  useState } from "react";
import authService from "../services/auth.service";
import { useGlobalState } from "../context/GlobalState";
import Login from "./LogIn";
import ScheduleButton from "./ScheduleButton";
import Filters from "./Filters";


function Dashboard() {
  const [state, dispatch] = useGlobalState();
  const [objSchedules, setObjSchedules] = useState([]);
  let authorizer = state.currentUser;
  if (authorizer.token_type === "access") {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center pt-4">
            <img src="/images/WF_logo.png" alt="" width="200" height="200" />
          </div>
        </div>
        <div className="row py-4">
          <h1 className="col-10 cordaFont">Hello, {authorizer.username}</h1>
          <div className="col-2">
            <a href="/">
              <button
                className="btn btn-success active circularFont"
                onClick={authService.logout}
              >
                Log out
              </button>
            </a>
          </div>
        </div>

        <div className="row border rounded-3 border-success border-1 mb-5 circularFont">
          <div className="col">
            <ScheduleButton />
            <hr className="bg-success" />
            <Filters />
          </div>
        </div>
        <div className="">
          <div className="col">TODO: CHARTS GO HERE</div>
        </div>
      </div>
    );
  } else return <Login />;
}

export default Dashboard;
