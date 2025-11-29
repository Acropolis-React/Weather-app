import { useWeather } from "../hooks/useWeather"

export function Weather() {
    function getWeatherDescription(code: number) {
        if (code === 0) return 'Ясно'
        if (code >= 1 && code <= 3) return 'Переменная облачность'
        if (code === 45 || code === 48) return 'Туман'
        if (code >= 51 && code <= 57) return 'Моросит'
        if (code >= 61 && code <= 67) return 'Дождь'
        if (code >= 71 && code <= 77) return 'Снег'
        if (code >= 80 && code <= 82) return 'Ливень'
        if (code >= 95 && code <= 99) return 'Гроза'
        return 'Неизвестно'
    }

    const {data, isLoading, error, isSuccess} = useWeather()
    
    return(
        <div className="min-h-screen bg-linear-to-b from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 p-6">

            {isSuccess && data && (
                <div className="space-y-6">

                    <div className="min-w-screen -ml-6 flex justify-center">
                        <div className="min-w-[200px] sm:w-100 w-70 p-5 rounded-xl
                                        bg-white/30 dark:bg-gray-800/40 
                                        backdrop-blur-xl 
                                        border border-white/40 dark:border-gray-600/50
                                        shadow-lg shadow-black/10
                                        text-gray-900 dark:text-gray-100
                                        text-center">
                            <h2 className="text-2xl font-bold mb-2">Текущая погода</h2>

                            <p>Температура: {data.current.temperature_2m}°C</p>
                            <p>Ощущается как: {data.current.apparent_temperature}°C</p>
                            <p>Влажность: {data.current.relative_humidity_2m}%</p>
                            <p>Погода: {getWeatherDescription(data.current.weather_code)}</p>
                        </div>
                    </div>

                    
                    <div className="w-full max-w-7xl mx-auto px-4 2xl:px-0">
                        <div 
                        className="bg-linear-to-t from-blue-100/70 via-blue-200/50 to-blue-300/70 dark:from-gray-900/80
                        dark:via-gray-800/60 dark:to-gray-700/80 p-5 rounded-xl shadow-md text-gray-800 dark:text-gray-100">

                            <h2 className="text-2xl text-center font-bold mb-3">Прогноз на 24 часа</h2>

                            <div className="overflow-x-auto">
                                <div className="flex space-x-4 p-2">
                                    {data.hourly.time.map((time: string, i: number) => (
                                        <div
                                            key={time}
                                            className="min-w-[200px] p-4 rounded-xl shadow-lg shrink-0
                                                    bg-white/30 dark:bg-gray-800/40 
                                                    backdrop-blur-xl 
                                                    border border-white/40 dark:border-gray-600/50
                                                    shadow-black/10
                                                    text-gray-900 dark:text-gray-100"
                                        >
                                            <p className="font-semibold">
                                                {time.split("T")[0].split("-").reverse().join(".")} – {time.split("T")[1]}
                                            </p>
                                            
                                            <p>Температура: {data.hourly.temperature_2m[i]}°C</p>
                                            <p>Ощущается: {data.hourly.apparent_temperature[i]}°C</p>
                                            <p>Влажность: {data.hourly.relative_humidity_2m[i]}%</p>
                                            <p>Погода: {getWeatherDescription(data.hourly.weather_code[i])}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}

            {isLoading && (
                <div className="w-full text-center py-10 text-gray-600 dark:text-gray-300 animate-pulse">
                    Загружаем данные...
                </div>
            )}

            {error && (
                <div className="w-full max-w-7xl mx-auto text-center py-4 px-6 
                                bg-red-100 border border-red-300 text-red-700 rounded-lg
                                dark:bg-red-900 dark:border-red-700 dark:text-red-200">
                    Ошибка загрузки данных. Попробуйте позже.
                </div>
            )}

        </div>

    )
}