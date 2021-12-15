import {
  ADD_NEW_CITY,
  REMOVE_CITY,
  FAVORITE_CITY,
  SET_USER,
  SET_LANGUAGE,
} from "../actions/userActions";

const initialState = {
  addedCities: [],
  language: 'pt_Br',
  units: 'metric'
};

const changeFavoriteCity = (cities, cityName) => {
  var cityToChange = {};
  const filteredCities = cities.filter((city) => {
    if (city.name !== cityName)
      return true;
    cityToChange = { ...city };
    cityToChange.isFavorite = !city.isFavorite;
    return false;
  });
  if (cityToChange.isFavorite)
    return [cityToChange].concat(filteredCities);
  return filteredCities.concat([cityToChange]);
}

const userData = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    case ADD_NEW_CITY:
      return {
        ...state,
        addedCities: [action.payload].concat([...state.addedCities]),
      }
    case REMOVE_CITY:
      return {
        ...state,
        addedCities: [...state.addedCities].filter(city => city.name !== action.payload)
      }

    case FAVORITE_CITY:
      return {
        ...state,
        addedCities: changeFavoriteCity([...state.addedCities], action.payload)
      }

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      }

    default:
      return state
  }
}

export default userData;