function ReportChoices() {
  return (
    <div>
      <select name="reports" id="report-choice">
        <option value="" disabled selected>
          Select Report Type
        </option>
        <option value="schedules">Schedules</option>
        <option value="team members">Team Members</option>
        <option value="job titles">Job Titles</option>
        <label for="report-choice">Choose a report:</label>
      </select>
    </div>
  );
}
export default ReportChoices;
