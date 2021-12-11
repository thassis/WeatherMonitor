import { OPEN_WEATHER_KEY } from "./constants";

export const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q={city}&lang={lang}&units={units}&appid=${OPEN_WEATHER_KEY}`;