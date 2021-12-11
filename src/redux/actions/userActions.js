export const SET_USER = 'SET_USER';
export const ADD_NEW_CITY = 'ADD_NEW_CITY';
export const SET_LANGUAGE = 'SET_LANGUAGES';

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

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}
