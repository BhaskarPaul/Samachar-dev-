import axios from "axios";
import { getNewsAPI } from "..";
import { Utils } from "../../../utils";

export const NewsRepository = {
  fetch: ({ params = {} }) => {
    const queryParams = Utils.objectToQueryString(params);
    const url = getNewsAPI() + (!!queryParams ? `&${queryParams}` : "");
    return axios.get(url);
  },
};
