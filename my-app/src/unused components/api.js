import axios from "axios";
import { outlet } from "react-rounter-dom"
async function postApiCall() {
  const api = await axios.post("");
  return api;
}
export default apiCall;
