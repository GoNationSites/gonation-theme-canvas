import { useState, useEffect } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

/**  
    A custom hook used for data fetching.
    @param url (String)
    @returns 3 pieces of state (error, isLoaded, data)
*/

const useApiRequest = url => {
  console.log('url revieved: ', url);
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios({
        url: `${url}`,
        adapter: jsonpAdapter,
        callbackParamName: 'callback',
      })
        .then(response => {
          setIsLoaded(true);
          setData(response.data);
        })
        .catch(error => {
          setError(error);
        });
    };
    fetchData();
  }, [url]);

  return { error, isLoaded, data };
};

export default useApiRequest;
