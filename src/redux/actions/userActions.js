export const SET_USER = 'SET_USER';
export const ADD_NEW_CITY = 'ADD_NEW_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const SET_LANGUAGE = 'SET_LANGUAGES';
export const FAVORITE_CITY = 'FAVORITE_CITY';

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language
  }
}

export const addNewCity = (city) => {
  return {
    type: ADD_NEW_CITY,
    payload: city
  }
}

export const removeCity = (city) => {
  return {
    type: REMOVE_CITY,
    payload: city
  }
}

export const favoriteCityState = (city) => {
  return {
    type: FAVORITE_CITY,
    payload: city
  }
}

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}
