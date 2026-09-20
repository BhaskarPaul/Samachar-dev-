import { useEffect, useState } from "react";
import { CONSTANT } from "../../constant";
import { IPRepository } from "../api/repository/ip.api";

const useIPQuery = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const { status, data } = await IPRepository.fetch();
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

export default useIPQuery;
