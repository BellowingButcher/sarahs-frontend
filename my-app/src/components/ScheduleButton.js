import { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import toast, { Toaster } from "react-hot-toast";

// todo: When uploading a schedule after refresh the page state still contains that file
//I need to make it to where after successful upload it clears the file state.

function ScheduleButton() {
  const successNotify = () => toast.success("Successful Upload!");
  const failedNotify = () => toast.error("No File Selected!");
  let stamp = Date.now();
  const [file, setFile] = useState("");

  const upload = () => {
    if (file == null) {
      return;
    } else {
      // 'file' comes from the Blob or File API

      const storage = getStorage();
      const storageRef = ref(storage, "file.xls" + stamp);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          failedNotify();
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
          successNotify();
          // todo: navigate or conditional render the success of the file being uploaded
          // get the path to the file after upload
          // store the path to the file in state
          // console.log('successful upload');
        }
      );
    }
  };

  return (
    <div>
      <li className="nav-item">
        <div className="" aria-current="page" href="#">
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button onClick={upload}>Upload</button>
          <Toaster />
        </div>
      </li>
    </div>
  );
}

{
  /* <>
  <li className="nav-item">
    <div className="" aria-current="page" href="#">
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={upload}>Upload</button>
    </div>
  </li>
</>; */
}

export default ScheduleButton;
