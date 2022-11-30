import reportHandleClick from "../helper functions/reportHandleClick";

function RunReportsButton() {
  return (
    <div>
      Display the Results{" "}
      <button id="runReports" onClick={reportHandleClick}>
        Run Report
      </button>
    </div>
  );
}

export default RunReportsButton;
