import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ScheduleButton from './components/ScheduleButton';
import StartDate from './components/StartDate';
import EndDate from './components/EndDate';
import TMA from './components/TMA';
import TMB from './components/TMB';
import ReportChoices from './components/ReportChoices';
import RunReportsButton from './components/RunReportsButton';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ScheduleButton />
    <StartDate />
    <EndDate />
    <TMA />
    <TMB />
    <ReportChoices />
    <RunReportsButton />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
