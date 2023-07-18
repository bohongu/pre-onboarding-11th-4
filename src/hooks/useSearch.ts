import { useCallback, useEffect } from "react";
import { DEBOUNCE_TIME } from "../constants/debounce";
import sliceData from "../utils/sliceData";
import useFetch from "./useFetch";

const useSearch = (keyword: string | number) => {
  const [result, setResult, fetchData] = useFetch(keyword);
  const onHandleSearch = useCallback(async () => {
    const URL = `http://localhost:4000/sick?q=${keyword}`;
    const cacheStorage = await caches.open("search");
    const responseCache = await cacheStorage.match(URL);
    if (keyword) {
      try {
        if (responseCache) {
          const cacheControl = responseCache.headers.get("Cache-Control");
          const maxAge = cacheControl?.substring(8);
          const cachedTime = responseCache.headers.get("Cached-Date");
          const expireTime = Number(cachedTime) + Number(maxAge) * 1000;

          if (expireTime <= Number(Date.now())) {
            fetchData();
            return;
          }
          const data = sliceData(await responseCache.json());
          setResult(data);
        } else {
          fetchData();
          console.log("calling api");
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [fetchData, keyword, setResult]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      onHandleSearch();
    }, DEBOUNCE_TIME);

    return () => {
      clearTimeout(debounce);
    };
  }, [onHandleSearch]);

  return result;
};

export default useSearch;
