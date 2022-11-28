import scheduleHandleClick from "../helper functions/scheduleHandleClick";
function ScheduleButton() {
    return (
        <div>
        Upload or Update a <button id="schedulebtn" onClick={scheduleHandleClick}>Schedule</button>
        </div>
    )
}
export default ScheduleButton;
