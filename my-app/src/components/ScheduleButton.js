import { useState } from "react";
import { auth } from "../firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";

function ScheduleButton() {
  const [file, setFile] = useState("");

  const upload = () => {
    if (file == null) return;
    // 'file' comes from the Blob or File API
    const storage = getStorage();
    // todo: prepend filename to include timestamp
    const storageRef = ref(storage, "file.xls");

    uploadBytes(storageRef, file).then((snapshot) => {
      // todo: navigate or conditional render the success of the file being uploaded
      // get the path to the file after upload
      // store the path to the file in state
      console.log("Uploaded a file!");
    });
  };

  return (
    <div>
      <center>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button onClick={upload}>Upload</button>
      </center>
    </div>
  );
}


<>
<li className="nav-item">
  <div className="" aria-current="page" href="#">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-plus-square"
      viewBox="0 0 16 16"
    >
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
    Report Results
  </div>
</li>
</>

export default ScheduleButton;
