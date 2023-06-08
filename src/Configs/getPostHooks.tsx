import { useState } from "react";
import axios from "axios";
import { baseURL, CONFIG } from ".";
import { useCallback } from "react";

const GetPostHooks = () => {
  // custom hook post request
  const [data, setData] = useState(null);
  const [isLoading, setLoad] = useState(false);
  const callAPI: any = useCallback((pro: any): void => {
    setLoad(true);
    axios.get(`${baseURL + pro.url}`, CONFIG).then((res: any) => {
        setData(res);
        setLoad(false);
      })
      .catch((err) => {
        setData(err);
        setLoad(false);
      });
  }, []);
  return [isLoading, data, callAPI];
};
export default GetPostHooks;
