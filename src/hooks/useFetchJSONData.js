import React, { useState, useEffect } from 'react';

function useFetchJSONData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Unable to fetch data: " + error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}

export default useFetchJSONData;
