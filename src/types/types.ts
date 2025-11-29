export interface WeatherResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;

    current: {
        time: string;
        temperature_2m: number;
        apparent_temperature: number;
        relative_humidity_2m: number;
        weather_code: number;
        pressure_msl: number;
    };

    hourly: {
        time: string[];
        temperature_2m: number[];
        apparent_temperature: number[];
        weather_code: number[];
        relative_humidity_2m: number[];
        pressure_msl: number[];
    };
}