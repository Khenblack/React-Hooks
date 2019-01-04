import { useEffect, useState } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  }

  useEffect(() => {
    fetchResource(resource);
  }, [resource]); //  If present, effect will only activate if the values in the list change.
  return resources;
};

export default useResources;
