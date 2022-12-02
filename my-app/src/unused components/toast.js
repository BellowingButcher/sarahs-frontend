
function Toast() {
  return (
    <>
      <CToast
        autohide={false}
        visible={true}
        color="success"
        className="text-white align-items-center"
      >
        <div className="d-flex">
          <CToastBody>Hello, world! This is a toast message.</CToastBody>
          <CToastClose className="me-2 m-auto" white />
        </div>
      </CToast>
      ; console.log("Uploaded a file!");
    </>
  );
}

export default Toast;
