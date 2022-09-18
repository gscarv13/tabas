import { useState, useEffect, useCallback } from "react";

import { httpGetProperties } from "../utils/requests";

const useProperty = () => {
  const [ properties, setProperties ] = useState([])
  // const [isPendingLaunch, setPendingLaunch] = useState(false);

  const getProperties = useCallback( async () => {
    const fetchedProperties = await httpGetProperties();
    setProperties(fetchedProperties);
  }, []);

  useEffect(() => {
    getProperties();
  }, [getProperties])

  return {
    properties: properties,
  }
}

export default useProperty;
