function ListItem(props) {
    let beginning = props.item.beginning;
    let ending = props.item.ending;
    function dateSplit (date){
        let format = date.slice(0,10);
        let day = format.slice(8);
        let month = format.slice(5,7);
        let year = format.slice(0,4);
        return (`${month}/${day}/${year}`)
    }
    beginning = dateSplit(beginning);
    ending = dateSplit(ending);

  return (
      <label className="list-group-item d-flex gap-2">
        <input
          className="form-check-input flex-shrink-0"
          type="checkbox"
          value=""
        />
        <span>
          Schedule from {beginning} through {ending}
          <small className="d-block text-muted">
            Would you like to remove this schedule?
          </small>
        </span>
      </label>
  );
}
export default ListItem;
