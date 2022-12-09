import React, { createContext, useReducer, useContext } from "react";

import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import request from "../services/api.request";

let user = JSON.parse(localStorage.getItem("user"));

// React.useEffect(() => {
//   request({
//     url: "/save/",
//     method: "GET",
//   }).then((res) => {
//     console.log(res.data);
//   });
// }, []);

const initialState = {
  currentUser: user ? jwtDecode(user.access) : null,
  currentUserToken: user ? user.access : null,
};

const GlobalStateContext = createContext(initialState);
const DispatchStateContext = createContext(undefined);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    initialState
  );

  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => [
  useContext(GlobalStateContext),
  useContext(DispatchStateContext),
];
