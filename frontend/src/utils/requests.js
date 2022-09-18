import { BASE_URL, PROPERTIES_INDEX } from "./constants"; 

export const httpGetProperties = async () => {
  try {
      const response = await fetch(BASE_URL + PROPERTIES_INDEX);
      return await response.json()
  }
  catch (error) {
      throw new Error(error.message);
  }
}
