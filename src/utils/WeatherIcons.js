import { WiDaySunny, WiCloud, WiRain, WiThunderstorm, WiSnow, WiFog, WiHumidity } from 'react-icons/wi';

export const getWeatherIcon = (weather) => {
    if (!weather) return WiDaySunny;

    const lowerWeather = weather.toLowerCase();

    if (lowerWeather.includes('clear')) return WiDaySunny;
    if (lowerWeather.includes('cloud')) return WiCloud;
    if (lowerWeather.includes('rain')) return WiRain;
    if (lowerWeather.includes('thunderstorm')) return WiThunderstorm;
    if (lowerWeather.includes('snow')) return WiSnow;
    if (lowerWeather.includes('fog') || lowerWeather.includes('mist') || lowerWeather.includes('haze')) return WiFog;

    return WiDaySunny;
};

export const HumidityIcon = WiHumidity; 
