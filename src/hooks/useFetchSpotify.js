import React, { useEffect, useState } from "react";
import { fetchSpotifyAccessToken } from "../services/fetchSpotifyAccessToken";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useFetchSpotify(url, method) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [storedAccessToken, setStoredAccessToken] = useState(null);
  const [storedExpireTime, setStoredExpireTime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const resp = await fetchSpotifyAccessToken();

      fetch(url, {
        method,
        headers: { Authorization: "Bearer " + resp.accessToken },
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setIsFetching(false));
    };

    fetchData();
  }, [url]);

  return { data, error, isFetching };
}
