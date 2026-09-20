import { CONSTANT } from "../../constant";

export const getNewsAPI = () => {
  return `${CONSTANT.BASE_NEWS_API}/${CONSTANT.BASE_NEWS_API_VERSION}${CONSTANT.BASE_NEWS_API_PATH}?apikey=${process.env.NEWSAPI_API_KEY}`;
};

export const getIPAPI = () => {
  return `${CONSTANT.BASE_IP_API}`;
};
