import {
  SET_CITIES,
  SET_LANGUAGE,
} from "../actions/userActions";

const initialState = {
  addedCities: [],
  language: 'ptBr'
};

const citiesList = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        addedCities: action.payload,
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

export default citiesList