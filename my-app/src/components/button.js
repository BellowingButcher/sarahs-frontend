import handleClick from "../helper functions/handleclick";
function Button() {
    return (
        <div>
        Upload or Update a <button id="schedulebtn" onClick={handleClick}>Schedule</button>
        </div>
    )
}
export default Button;
