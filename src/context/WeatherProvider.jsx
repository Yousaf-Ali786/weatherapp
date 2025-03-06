import React, { useState, useEffect } from 'react';
import { WeatherContext } from './WeatherContext';

const API_KEY = '03272fd647381beac0d3d2a42fc0436d';

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            setLoading(true);
            setError('');
            setWeatherData(null);

            try {
                const currentRes = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
                );
                if (!currentRes.ok) {
                    throw new Error('City not found');
                }
                const currentData = await currentRes.json();

                const forecastRes = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
                );
                const forecastData = await forecastRes.json();

                const dailyForecast = [];
                const addedDays = new Set();

                forecastData.list.forEach((item) => {
                    const date = item.dt_txt.split(' ')[0];
                    if (!addedDays.has(date) && item.dt_txt.includes('12:00:00')) {
                        dailyForecast.push({
                            day: new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
                            temp: `${item.main.temp}°C`,
                            description: item.weather[0].description,
                        });
                        addedDays.add(date);
                    }
                });

                setWeatherData({
                    temp: `${currentData.main.temp}°C`,
                    feelsLike: `${currentData.main.feels_like}°C`,
                    humidity: `${currentData.main.humidity}%`,
                    windSpeed: `${currentData.wind.speed} m/s`,
                    description: currentData.weather[0].description,
                    forecast: dailyForecast.slice(0, 5),
                });

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    return (
        <WeatherContext.Provider value={{ city, setCity, weatherData, loading, error }}>
            {children}
        </WeatherContext.Provider>
    );
};
