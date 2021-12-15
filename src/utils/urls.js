import { OPEN_WEATHER_KEY, GEOCODE_EARTH_API_KEY } from "./constants";

export const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q={city}&lang={lang}&units={units}&appid=${OPEN_WEATHER_KEY}`;
export const ONE_CALL_WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,alerts&lang={lang}&units={units}&appid=${OPEN_WEATHER_KEY}`;

export const AUTOCOMPLETE_URL = `https://api.geocode.earth/v1/autocomplete?text={text}&layer=locality&api_key=${GEOCODE_EARTH_API_KEY}`;