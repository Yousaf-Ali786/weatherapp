Weather Forecast App

This app is a weather forecast app built using React Vite. Tailwind CSS has been used for styling.

Functionalities:

Search weather by city name
Display current weather with temperature, humidity, wind speed, and condition
5-day weather forecast
Latest weather news section ( NOT WORKING IN DEPLOYED VERSION because of free trial of the newsapi)


Live Demo: https://ultimate-weather-forecast-app.netlify.app/

Why News is Not Being Fetched: The NewsAPI free plan does not allow requests directly from the browser (client-side). This is a limitation of the free tier, so the news section does not work when deployed on Netlify.

APIs Used:


OpenWeather API for weather data (current weather and 5-day forecast)

NewsAPI for fetching weather-related news articles (currently not working - see below)




Commands: To install dependencies:

 npm install

To run the app locally:

 npm run dev

