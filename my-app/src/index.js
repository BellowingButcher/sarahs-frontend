import React from "react";
import ReactDOM from "react-dom/client";
// import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import LogIn from "./components/LogIn";
import { createBrowserRouter, RouterProvider, Route, Redirect } from "react-router-dom";
// import Root from "./routes/root";
import ErrorPage from "./error-page";
// import Contact from "./routes/Contact";
import Dashboard from "./components/Dashboard";
import { GlobalProvider } from "./context/GlobalState";
import { Auth, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ScheduleButton from './components/ScheduleButton';
// import StartDate from './components/StartDate';
// import EndDate from './components/EndDate';
// import TMA from './components/TMA';
// import TMB from './components/TMB';
// import ReportChoices from './components/ReportChoices';
// import RunReportsButton from './components/RunReportsButton';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECTID,
  storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FB_APPID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENTID,
};
const app = initializeApp(firebaseConfig);
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root />,
    element: <LogIn />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
  {
    path: "dashboard/",
    element: <Dashboard  />,
    errorElement: <ErrorPage />
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
      {/* <Dashboard /> */}
    </GlobalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
