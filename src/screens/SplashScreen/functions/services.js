import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { USER_STORAGE_KEY } from '../../../utils/constants';
import { CURRENT_WEATHER_URL } from '../../../utils/urls';

export const getUserData = async () => {
  try {
    var value = await AsyncStorage.getItem(USER_STORAGE_KEY);
    if (value !== null && value != '{}') {
      return (JSON.parse(value));
    }
    value = {
      addedCities: [],
      language: 'pt_Br',
      units: 'metric'
    }
    return value;
  } catch (e) {
    alert("Houve um erro interno, por favor reinicie o aplicativo.")
  }
}

export const getWeatherCitiesData = async (user) => {
  const cities = user.addedCities;
  const weatherCities = [];
  for (city of cities) {
    const weatherCity = await getWeatherCity(user, city);
    weatherCities.push(weatherCity);
  }
  return weatherCities;
}

export const getWeatherCity = async (user, city) => {
  var url = CURRENT_WEATHER_URL
    .replace('{city}', city.name)
    .replace('{lang}', user.language)
    .replace('{units}', user.units);
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
      isFavorite: city.isFavorite,
      OpwId: response.id,
      coord: response.coord
    }
    return weatherCity;
  } catch (e) {
    return null;
    // console.log(e);
  }
}