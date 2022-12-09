import { useState } from "react";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "reactjs-popup/dist/index.css";
import toast, { Toaster } from "react-hot-toast";
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";
import { Auth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// todo: When uploading a schedule after refresh the page state still contains that file

function ScheduleButton() {
  const [state, dispatch] = useGlobalState();
  const successNotify = () => toast.success("Successful Upload!");
  const failedNotify = () => toast.error("No file selected!");
  const existsNotify = () =>
    toast.error(
      "A schedule containing these dates already exists! Try another or delete the existing schedule."
    );
  let stamp = Date.now();
  const [file, setFile] = useState("");

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECTID,
    storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FB_APPID,
    measurementId: process.env.REACT_APP_FB_MEASUREMENTID,
  };
  const app = initializeApp(firebaseConfig);
  const upload = () => {
    if (file === null) {
      return;
    } else {
      // 'file' comes from the Blob or File API
      const storage = getStorage();
      const storageRef = ref(storage, stamp + "file.xls");
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
            default:
              break;
          }
        },
        (error) => {
          failedNotify();
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            request({
              url: "/save/",
              method: "POST",
              data: {
                blob_name: storageRef,
                schedule: downloadURL,
                uploaded_by: state.currentUser.user_id,
              },
            }).then((res) => {
              if (res.data.errors) {
                existsNotify();
              } else {
                successNotify();
              }
            });
          });
        }
      );
    }
  };
  return (
    <div>
      <div className="pt-4" aria-current="page">
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <label className="input-group-text bg-success">
            <div className="text-white" onClick={upload}>
              Upload
            </div>
          </label>
        </div>
        <Toaster />
      </div>
    </div>
  );
}
// }

export default ScheduleButton;
