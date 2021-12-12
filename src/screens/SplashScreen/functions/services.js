import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { USER_STORAGE_KEY } from '../../../utils/constants';
import { CURRENT_WEATHER_URL } from '../../../utils/urls';

export const getUserData = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_STORAGE_KEY);
    if (value !== null) {
      return (JSON.parse(value));
    }
    return value;
  } catch (e) {
    alert("Houve um erro interno, por favor reinicie o aplicativo.")
  }
}

export const getWeatherCitiesData = async (cities) => {
  const weatherCities = [];
  for (city of cities) {
    var url = CURRENT_WEATHER_URL
      .replace('{city}', city)
      .replace('{lang}', 'pt_Br')
      .replace('{units}', 'metric');
    try {
      const response = (await axios.get(url)).data;
      const weatherCity = {
        name: response.name,
        temp: Math.round(response.main.temp),
        temp_min: Math.round(response.main.temp_min),
        temp_max: Math.round(response.main.temp_max),
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        country: response.sys.country,
        OpwId: response.id,
      }
      weatherCities.push(weatherCity);
    } catch (e) {
      // console.log(e);
    }
  }
  return weatherCities;
}