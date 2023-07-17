import { useCallback, useEffect, useState } from "react";
import { SickListProps } from "../types/sick";
import { DEBOUNCE_TIME } from "../constants/debounce";
import sliceData from "../utils/sliceData";

const useSearch = (keyword: string | number) => {
  const [result, setResult] = useState<SickListProps>([]);

  const onHandleSearch = useCallback(async () => {
    const URL = `http://localhost:4000/sick?q=${keyword}`;
    const cacheStorage = await caches.open("search");
    const responseCache = await cacheStorage.match(URL);
    if (keyword !== "") {
      try {
        if (responseCache) {
          const data = sliceData(await responseCache.json());
          setResult(data);
        } else {
          const response = await fetch(URL);
          const data = sliceData(await response.clone().json());
          setResult(data);
          cacheStorage.put(URL, response);
          console.log("calling api");
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [keyword]);

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
