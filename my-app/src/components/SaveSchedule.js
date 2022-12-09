import { useState } from 'react';
import axios from 'axios';


function SaveSchedule(downloadURL, client) {
    const [options, setOptions] = useState({
      url: "/save/", // just the endpoint
      method: "post", // sets the method of the request
      data: {
        schedule: downloadURL,
        uploaded_by: client,
        beginning: "2022-11-06",
        ending: "2022-11-13",
        status: "True",
      },
    });
    const handleChange = (e) => {
      const value = e.target.value;
      setOptions({
        ...options,
        [e.target.name]: value,
      });
    };
    // Maybe make it into function handleSubmit(){
    const handleSubmit = (e) => {
      e.preventDefault();
      const scheduleData = {
        schedule: options.schedule,
        uploaded_by: options.uploaded_by,
        beginning: options.beginning,
        ending: options.ending,
        status: options.status,
      };
      axios
      .post("https://8000-bellowingbu-totaltimetr-y9izd4wroz0.ws-us77.gitpod.io/api/save/", scheduleData)
      .then((response) => {
        console.log(response);
      })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        });
      };
    handleSubmit();
    return;
    // await the response and pass in this fancy object of request options
    // setSomeState(resp.data) // set the response
  }
  export default SaveSchedule;