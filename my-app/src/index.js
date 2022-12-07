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
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ScheduleButton from './components/ScheduleButton';
// import StartDate from './components/StartDate';
// import EndDate from './components/EndDate';
// import TMA from './components/TMA';
// import TMB from './components/TMB';
// import ReportChoices from './components/ReportChoices';
// import RunReportsButton from './components/RunReportsButton';

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
    </GlobalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
