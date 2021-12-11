import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_STORAGE_KEY } from '../../../utils/constants';

export const storeNewCity = async (userObj, city) => {
  try {
    const newUserObj = { ...userObj };
    const cities_name = [];
    for (addedCity of newUserObj.addedCities) {
      cities_name.push(addedCity.name);
    }
    cities_name.push(city)
    newUserObj.addedCities = cities_name;
    await AsyncStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify(newUserObj),
    )
  } catch (e) {
    alert("Houve um problema ao salvar a cidade, tente novamente mais tarde");
  }
}

export const clean = async () => {
  await AsyncStorage.setItem(
    USER_STORAGE_KEY,
    '',
  )
}