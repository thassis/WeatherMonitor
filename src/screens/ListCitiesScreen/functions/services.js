import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_STORAGE_KEY } from '../../../utils/constants';

export const storeNewCity = async (userObj, city) => {
  try {
    const newUserObj = { ...userObj };
    const cities_name = [];
    cities_name.push({ name: city.name, isFavorite: city.isFavorite });
    for (let addedCity of newUserObj.addedCities) {
      cities_name.push({
        name: addedCity.name,
        isFavorite: addedCity.isFavorite
      });
    }
    newUserObj.addedCities = cities_name;
    await AsyncStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify(newUserObj),
    )
  } catch (e) {
    // console.log(e);
    alert("Houve um problema ao salvar a cidade, tente novamente mais tarde");
  }
}

export const removeStoragedCity = async (userObj, city) => {
  try {
    const newUserObj = { ...userObj };
    const cities_name = [];
    for (let addedCity of newUserObj.addedCities) {
      if (addedCity.name !== city)
        cities_name.push({
          name: addedCity.name, isFavorite: addedCity.isFavorite
        });
    }
    newUserObj.addedCities = cities_name;
    await AsyncStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify(newUserObj),
    )
  } catch (e) {
    // console.log(e);
    alert("Houve um problema ao remover a cidade, tente novamente mais tarde");
  }
}

export const favoriteStoragedCity = async (userObj, city) => {
  try {
    const newUserObj = { ...userObj };
    const cities_name = [];
    cityToFavorite = {};
    for (let addedCity of newUserObj.addedCities) {
      if (addedCity.name !== city) {
        cities_name.push({
          name: addedCity.name, isFavorite: addedCity.isFavorite
        });
        continue;
      }
      cityToFavorite = { ...addedCity };
      cityToFavorite.isFavorite = !addedCity.isFavorite;
    }
    if (cityToFavorite.isFavorite)
      newUserObj.addedCities = [cityToFavorite].concat(cities_name);
    else
      newUserObj.addedCities = cities_name.concat([cityToFavorite]);
    await AsyncStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify(newUserObj),
    )
  } catch (e) {
    // console.log(e);
    alert("Houve um problema ao remover a cidade, tente novamente mais tarde");
  }
}

export const changeLanguageStorage = async (userObj, language) => {
  try {
    const newUserObj = { ...userObj, language: language };
    await AsyncStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify(newUserObj),
    )
  } catch (e) {
    // console.log(e);
    alert("Houve um problema ao salvar a cidade, tente novamente mais tarde");
  }
}

export const changeUnitStorage = async (userObj, units) => {
  try {
    const newUserObj = { ...userObj, units: units };
    await AsyncStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify(newUserObj),
    )
  } catch (e) {
    // console.log(e);
    alert("Houve um problema ao salvar a cidade, tente novamente mais tarde");
  }
}