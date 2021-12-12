import { AUTOCOMPLETE_URL } from "../../../utils/urls";

import axios from "axios";

export const getAutocompleteCities = async (text) => {
  const url = AUTOCOMPLETE_URL.replace('{text}', text);
  try {
    const response = (await axios.get(url)).data;
    const cities = [];
    response.features.forEach(element => {
      if (element.properties.locality
        && cities.indexOf(element.properties.locality) === -1)
        cities.push(element.properties.locality)
    });
    return cities.slice(0, 5);
  } catch (e) {
    // console.log(e);
    return [];
  }
}