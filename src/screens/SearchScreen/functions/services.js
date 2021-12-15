import { AUTOCOMPLETE_URL } from "../../../utils/urls";

import axios from "axios";

export const getAutocompleteCities = async (text) => {
  const url = AUTOCOMPLETE_URL.replace('{text}', text);
  try {
    const response = (await axios.get(url)).data;
    const cities = [];
    response.features.forEach(element => {
      if (element.properties.locality &&
        !cities.find((city) => (
          element.properties.locality === city.name
          || `${element.properties.locality}, ${element.properties.country_code}` === city.name
        ))
      ) {
        var cityName;
        if (element.properties.country && element.properties.country_code) {
          cityName = `${element.properties.locality}, ${element.properties.country_code}`;
        } else {
          cityName = element.properties.locality;
        }
        cities.push({
          name: cityName,
          coord: {
            lat: element.geometry.coordinates[1],
            lon: element.geometry.coordinates[0]
          }
        })
      }
    });
    return cities.slice(0, 5);
  } catch (e) {
    // console.log(e);
    return [];
  }
}