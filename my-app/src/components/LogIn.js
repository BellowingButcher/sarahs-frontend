import { outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";

const Login = () => {
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(async (resp) => {
      let data = jwtDecode(resp.access);

      await dispatch({
        currentUserToken: resp.access,
        currentUser: data,
      });
      navigate("dashboard/");
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center pt-4 pb-4">
          <img src="/images/WF_logo.png" alt="" width="200" height="200" />
        </div>
      </div>

      <div className="row mx-auto circularFont">
        <div className="col text-center">
          <div className="c-form circularFont">
            <form onSubmit={handleLogin}>
              <div className="pb-2">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="pass">Password:</label>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minLength="8"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input className="mt-2 btn btn-sm btn-success circularFont active" type="submit" value="Sign in" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
