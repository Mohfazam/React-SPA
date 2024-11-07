// hooks/useFetch.js
import { useState, useEffect } from 'react'

export function usePostTitle() {
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/1");
  return finalData.title;
}

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return { finalData };
}