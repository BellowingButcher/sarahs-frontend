import axios from "axios";
async function apiCall() {
  const api = await axios.post("");
  return api;
}
export default apiCall;
