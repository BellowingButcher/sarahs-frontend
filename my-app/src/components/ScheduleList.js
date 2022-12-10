import ListItem from "./ListItem";

function ScheduleList(props) {
  return (
    <>
      <div className="row list-group mx-auto py-2 w-auto">
        {props.data?.map((object) => (
          <ListItem key={object.id} item={object} />
        ))}
      </div>
    </>
  );
}
export default ScheduleList;
