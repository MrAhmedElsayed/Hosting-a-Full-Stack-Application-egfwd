import axios from "axios";

axios.defaults.baseURL = "http://storefront-env.eba-mm2w3dke.us-east-1.elasticbeanstalk.com";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
