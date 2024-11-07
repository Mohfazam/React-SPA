// hooks/useFetch.js
import { useState, useEffect } from 'react'


export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [Loading, setLoading] = useState(true);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  return { finalData, Loading };
}