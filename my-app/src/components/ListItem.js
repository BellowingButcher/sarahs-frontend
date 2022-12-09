import request from "../services/api.request";

function ListItem(props) {
  function deleteSchedule() {
    request({
      url: `/patch/${props.item.id}`,
      method: "DELETE",
      data: {
        pk: props.item,
      },
    }).then((res) => {
      console.log(res);
    });
    window.location.reload(false);
  }
  let beginning = props.item.beginning;
  let ending = props.item.ending;
  function dateSplit(date) {
    let format = date.slice(0, 10);
    let day = format.slice(8);
    let month = format.slice(5, 7);
    let year = format.slice(0, 4);
    return `${month}/${day}/${year}`;
  }
  beginning = dateSplit(beginning);
  ending = dateSplit(ending);
  return (
    <div className="row pb-2">
      <div className="d-flex gap-2" key={props.item.id}>
        <div className="col-1">
          <input
            className="form-check-input flex-shrink-0 bg-success"
            type="checkbox"
            value=""
          />
        </div>

        <div className="col-10">
          Schedule from {beginning} through {ending}
          <hr className="bg-success" />
        </div>

        <div className="col-1 mx-0 pb-4 w-auto ps-3">
          <button
            className="btn btn-sm btn-success active"
            onClick={deleteSchedule}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ListItem;
