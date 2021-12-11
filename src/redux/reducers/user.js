import {
  ADD_NEW_CITY,
  SET_USER,
  SET_LANGUAGE,
} from "../actions/userActions";

const initialState = {
  addedCities: [],
  language: 'ptBr'
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    case ADD_NEW_CITY:
      return {
        ...state,
        addedCities: [...state.addedCities, action.payload],
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