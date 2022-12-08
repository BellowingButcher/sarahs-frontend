import ListItem from "./ListItem";

function ScheduleList(props) {
  return (
    <>
      <div className="row list-group mx-0 pb-4 w-auto">
        {props.data.map((object) => (
          <ListItem key={object.id} item={object} />
        ))}
      </div>
      <div className="row mx-0 pb-4 w-auto">
          
      </div>
    </>
  );
}
export default ScheduleList;
