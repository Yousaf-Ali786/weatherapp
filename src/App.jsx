import React from 'react';
import { WeatherProvider } from './context/WeatherProvider';
import Search from './components/Search';
import Weather from './components/Weather';
import News from './components/News';
import { NewsProvider } from './context/NewsProvider';

import cloudBg from './assets/cloudbg.mp4';

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src={cloudBg}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-black/30 p-4">
        <WeatherProvider>
          <Search />
          <Weather />
        </WeatherProvider>

        <NewsProvider>
          <News />
        </NewsProvider>
      </div>
    </div>
  );
};

export default App;
