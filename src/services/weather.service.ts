import axios from "axios"
import type { WeatherResponse } from "../types/types"

export class WeatherService {
    private URL = 'https://api.open-meteo.com/v1/forecast?latitude=60.03489&longitude=30.41179&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,pressure_msl&hourly=temperature_2m,apparent_temperature,weather_code,relative_humidity_2m,pressure_msl&forecast_days=1&pressure_unit=mmHg&timezone=auto'

    getWeather() {
        return axios.get<WeatherResponse>(this.URL)
    }
}

export const weatherService = new WeatherService 