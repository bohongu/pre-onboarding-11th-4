import { useState } from "react";
import { EXPIRE_SECONDS } from "../constants/cache";
import sliceData from "../utils/sliceData";
import { SickListProps } from "../types/sick";

const useFetch = (keyword: string | number) => {
  const [result, setResult] = useState<SickListProps>([]);

  const fetchData = async () => {
    const URL = `http://localhost:4000/sick?q=${keyword}`;
    const cacheStorage = await caches.open("search");

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
  };

  return [result, setResult, fetchData] as const;
};

export default useFetch;
