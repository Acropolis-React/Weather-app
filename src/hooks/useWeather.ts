import { useQuery } from "@tanstack/react-query";
import { weatherService } from "../services/weather.service";
import { useEffect } from "react";

export function useWeather() {
    const {data, isLoading, isSuccess, error} = useQuery({
        queryKey:['getWeather'],
        queryFn: () => weatherService.getWeather(),
        select: (data) => data.data,
        staleTime: 300000,
    })

    useEffect(() => {
        if (isSuccess) {
            console.log('Data fetched successfully')
        }
    }, [isSuccess])
    
    useEffect(() => {
        if(error) {
            console.log(`Error:${error}`)
        }
    }, [error])
    return { data, isSuccess, isLoading, error }
}