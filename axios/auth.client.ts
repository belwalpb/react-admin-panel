import { AxiosInstance } from "axios";
import logger from "@utils/Logger";
const axios = require("axios");

const authClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
  validateStatus: function (status: any) {
    logger.debug(`Status Code: ${status}`);
    return true; // default
  },
});

export default authClient;
