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

export default ScheduleButton;
