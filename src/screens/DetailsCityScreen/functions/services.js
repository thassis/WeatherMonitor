import axios from "axios";

import { ONE_CALL_WEATHER_URL } from '../../../utils/urls';

export const getAllDataWeatherCity = async (user, coords) => {
  var url = ONE_CALL_WEATHER_URL
    .replace('{lat}', coords.lat)
    .replace('{lon}', coords.lon)
    .replace('{lang}', user.language)
    .replace('{units}', user.units);
  try {
    const response = (await axios.get(url)).data;
    const weatherCity = {
      temp: Math.round(response.current.temp),
      feels_like: Math.round(response.current.feels_like),
      description: response.current.weather[0].description,
      icon: response.current.weather[0].icon,
      hourly: response.hourly.splice(0, 24),
      daily: response.daily
    }
    return weatherCity;
  } catch (e) {
    return null;
    // console.log(e);
  }
}