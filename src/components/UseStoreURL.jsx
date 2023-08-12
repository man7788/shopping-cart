import { useState, useEffect } from 'react';

const useStoreURL = () => {
  const [storeURL, setStoreURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setStoreURL(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { storeURL, error, loading };
};

export default useStoreURL;
