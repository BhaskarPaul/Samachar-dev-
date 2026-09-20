import axios from "axios";
import { getIPAPI } from "..";

export const IPRepository = {
  fetch: () => {
    return axios.get(getIPAPI());
  },
};
