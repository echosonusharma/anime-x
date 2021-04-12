import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const x = await fetch(url);
    const res = await x.json();
    setData(res);
    setLoading(false);
  }, [url]);

  return { data, loading };
};

export default useFetch;
