import ListItem from "./ListItem";

function ScheduleList() {
  //     let list = props.data;
  //     let x = list.map(object => <ListItem key={object.id} item={object} />);
  //     return(x)
  // }
  // export default ScheduleList
  let test = [
    {
      id: 25,
      schedule:
        "https://firebasestorage.googleapis.com/v0/b/total-time-tracker.appspot.com/o/file.xls1670420357902?alt=media&token=8b99b768-ec8b-4227-8a39-d95921ea8921",
      beginning: "2022-11-21T00:00:00Z",
      ending: "2022-11-26T00:00:00Z",
      status: true,
      uploaded_by: 1,
    },
    {
      id: 26,
      schedule:
        "https://firebasestorage.googleapis.com/v0/b/total-time-tracker.appspot.com/o/file.xls1670420812974?alt=media&token=f1ea4e43-a194-4e9c-9a49-a57b93ec219f",
      beginning: "2022-10-24T00:00:00Z",
      ending: "2022-10-29T00:00:00Z",
      status: true,
      uploaded_by: 1,
    },
  ];
//   test = test.map((object) => <ListItem key={object.id} item={object} />);
  function listItem(parameters) {
    console.log("test: ", test);
    return (
      <div className="list-group mx-0 pb-4 w-auto">
        {test.map(object => (
            <ListItem key={object.id} item={object} />)
        )}
      </div>
    );
  }
  return listItem();
}
export default ScheduleList;
