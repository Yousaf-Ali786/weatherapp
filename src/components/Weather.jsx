import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { getWeatherIcon, HumidityIcon } from '../utils/WeatherIcons';

const Weather = () => {
    const { city, weatherData, loading, error } = useContext(WeatherContext);

    if (loading) {
        return <div className="text-center text-blue-500 font-semibold text-xl">Loading weather data...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 font-semibold text-xl">Error: {error}</div>;
    }

    if (!weatherData) {
        return <div className="text-center text-gray-400 font-medium text-lg">Search a city to see the weather</div>;
    }


    const WeatherIcon = getWeatherIcon(weatherData.description);

    return (
        <div className="bg-gray-300 p-4 rounded-2xl max-w-2xl mx-auto mt-6 shadow-2xl opacity-75">

            <h2 className="text-center text-3xl font-bold text-black mb-4">
                Weather in {city}
            </h2>


            <div className="bg-gray-100 p-4 rounded-xl shadow-md flex justify-between items-center">
                <div className="text-left">
                    <p className="text-xl font-semibold capitalize text-black flex items-center gap-2">
                        <WeatherIcon className="text-3xl text-blue-500" />
                        {weatherData.description}
                    </p>
                    <p className="text-5xl font-bold text-black">{weatherData.temp}</p>
                </div>
                <div className="text-right space-y-1">
                    <p className="text-sm text-black opacity-70 flex items-center gap-1">
                        <HumidityIcon className="text-xl text-blue-500" />
                        Humidity: {weatherData.humidity}
                    </p>
                    <p className="text-sm text-black opacity-70">Wind: {weatherData.windSpeed} </p>
                </div>
            </div>


            <h3 className="text-2xl font-bold text-black mt-6 mb-3">5-Day Forecast</h3>


            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {weatherData.forecast.map((day, index) => {
                    const ForecastIcon = getWeatherIcon(day.description);
                    return (
                        <div
                            key={index}
                            className="bg-gray-100 p-3 rounded-xl shadow-md flex flex-col items-center"
                        >
                            <p className="text-lg font-medium text-black">{day.day}</p>
                            <ForecastIcon className="text-3xl text-blue-500" />
                            <p className="text-xl font-bold text-black">{day.temp}</p>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Weather;
