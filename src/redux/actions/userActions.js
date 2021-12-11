export const SET_CITIES = 'SET_CITIES';
export const SET_LANGUAGE = 'SET_LANGUAGES';

export const setLanguage = (language) => {
    return {
        type: SET_LANGUAGE,
        payload: language
    }
}

export const setCities = (cities) => {
    return {
        type: SET_CITIES,
        payload: cities
    }
}
