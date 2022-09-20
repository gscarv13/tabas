import { useState, useEffect, useCallback } from "react";

import { httpGetProperties } from "../utils/requests";

const useProperty = () => {
  const [ properties, setProperties ] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const getProperties = useCallback( async () => {
    setIsLoading(true);
    const fetchedProperties = await httpGetProperties();
    setProperties(fetchedProperties);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getProperties();
  }, [getProperties])

  return {
    properties,
    isLoading,
  }
}

export default useProperty;
