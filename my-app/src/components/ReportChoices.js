function ReportChoices() {
  return (
    <>
      <li className="nav-item">
        <div className="row">
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-bar-chart-2 align-text-bottom"
              aria-hidden="true"
            >
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
            Reports
          </div>
          <div className="col">
            <select name="reports" id="report-choice" className="pl-4">
              <option value="" disabled selected>
                Select Report Type
              </option>
              <option value="schedules">Schedules</option>
              <option value="team members">Team Members</option>
              <option value="job titles">Job Titles</option>
            </select>
          </div>
        </div>
      </li>
    </>
  );
}
export default ReportChoices;
