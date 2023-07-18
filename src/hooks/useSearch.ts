import { useCallback, useEffect, useState } from "react";
import { SickListProps } from "../types/sick";
import { DEBOUNCE_TIME } from "../constants/debounce";
import sliceData from "../utils/sliceData";
import { EXPIRE_SECONDS } from "../constants/cache";

const useSearch = (keyword: string | number) => {
  const [result, setResult] = useState<SickListProps>([]);
  const onHandleSearch = useCallback(async () => {
    const URL = `http://localhost:4000/sick?q=${keyword}`;
    const cacheStorage = await caches.open("search");
    const responseCache = await cacheStorage.match(URL);
    if (keyword) {
      try {
        if (responseCache) {
          const data = sliceData(await responseCache.json());
          setResult(data);

          const cacheControl = responseCache.headers.get("Cache-Control");
          const maxAge = cacheControl?.substring(8);
          const cachedTime = responseCache.headers.get("Cached-Date");
          const expireTime = Number(cachedTime) + Number(maxAge) * 1000;

          if (expireTime <= Number(Date.now())) {
            const response = await fetch(URL);
            const newData = sliceData(await response.clone().json());
            setResult(newData);

            const headers = new Headers(response.headers);
            headers.set("Cache-Control", `max-age=${EXPIRE_SECONDS}`);
            headers.set("Cached-Date", String(Date.now()));

            const modifiedResponse = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: headers,
            });
            cacheStorage.put(URL, modifiedResponse);
          }
        } else {
          const response = await fetch(URL);
          const data = sliceData(await response.clone().json());
          setResult(data);

          const headers = new Headers(response.headers);
          headers.set("Cache-Control", `max-age=${EXPIRE_SECONDS}`);
          headers.set("Cached-Date", String(Date.now()));

          const modifiedResponse = new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: headers,
          });

          cacheStorage.put(URL, modifiedResponse);
          console.log("calling API");
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
