import { useEffect, useState } from "react";
import { NewsRepository } from "../api/repository/news.api";
import { CONSTANT } from "../../constant";

const DEFAULT_PARAM = { lang: ["en"] };

const useNewsQuery = ({ params = {} }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const { status, data } = await NewsRepository.fetch({
        params: { ...DEFAULT_PARAM, ...params },
      });
      if (status !== 200) {
        setError(CONSTANT.SOMETHING_WENT_WRONG);
      }

      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, data, error };
};

export default useNewsQuery;
